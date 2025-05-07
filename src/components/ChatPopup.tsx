
import { useState, useEffect, useRef } from "react";
import { Send, X, RefreshCw } from "lucide-react";
import ReactMarkdown from "react-markdown";
// import { toast } from "@/components/ui/sonner"; // opcional si aún lo necesitas

interface ChatPopupProps {
  onClose: () => void;
}

interface Message {
  id: number;
  text: string;
  isBot: boolean;
}

/**
 * 👉 CONFIGURACIÓN
 * - Crea tu Asistente en https://platform.openai.com/assistants y copia su `assistant_id`.
 * - Añade VITE_OPENAI_ASSISTANT_ID y VITE_OPENAI_API_KEY en tu archivo .env.local.
 *   ⚠️ Nunca expongas tu API‑Key en el frontend de producción; lo ideal es envolver las
 *   llamadas en una ruta API server‑side (p.ej. /api/chat), pero aquí se muestra la llamada
 *   directa por simplicidad.
 */
const ASSISTANT_ID = "asst_kIy7Mgl74E2FOUUbmYiSHGSZ";
const OPENAI_API_KEY = "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";

const ChatPopup = ({ onClose }: ChatPopupProps) => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [threadId, setThreadId] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Cargar estado desde localStorage al montar
  useEffect(() => {
    const storedThreadId = localStorage.getItem("chatThreadId");
    const storedMessages = localStorage.getItem("chatMessages");

    if (storedThreadId) {
      setThreadId(storedThreadId);
    }

    if (storedMessages) {
      try {
        setMessages(JSON.parse(storedMessages));
      } catch (err) {
        console.error("Error al parsear mensajes almacenados:", err);
        setMessages([{ id: 1, text: "¡Hola! Soy el chatbot de PoliFormaT. ¿En qué puedo ayudarte?", isBot: true }]);
      }
    } else {
      setMessages([{ id: 1, text: "¡Hola! Soy el chatbot de PoliFormaT. ¿En qué puedo ayudarte?", isBot: true }]);
    }
  }, []);

  // Persistir mensajes
  useEffect(() => {
    if (messages.length) {
      localStorage.setItem("chatMessages", JSON.stringify(messages));
    }
  }, [messages]);

  // Scroll automático al fondo
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = async () => {
    if (!message.trim()) return;

    // 1️⃣ Añadir el mensaje del usuario a la UI
    let currentThread = threadId;
    const userMsg = { id: messages.length + 1, text: message, isBot: false };
    setMessages(prev => [...prev, userMsg]);
    setMessage("");
    setIsLoading(true);

    try {
      // Config común para las peticiones a OpenAI
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${OPENAI_API_KEY}`,
        "OpenAI-Beta": "assistants=v2", // cabecera requerida para Assistants API v2
      } as const;

      // 2️⃣ Asegurar que existe un hilo (thread)
      if (!currentThread) {
        try {
          const threadRes = await fetch("https://api.openai.com/v1/threads", {
            method: "POST",
            headers,
            body: JSON.stringify({}),
          });
          
          if (!threadRes.ok) {
            const text = await threadRes.text();
            console.error("Error creando hilo:", threadRes.status, text);
            setMessages(prev => [
              ...prev,
              {
                id: prev.length + 1,
                text: `Error creando hilo (${threadRes.status}): ${text}`,
                isBot: true,
              },
            ]);
            setIsLoading(false);
            return;
          }
          
          const threadData = await threadRes.json();
          currentThread = threadData.id;
          setThreadId(currentThread);
          localStorage.setItem("chatThreadId", currentThread);
          
        } catch (err: any) {
          console.error("Error en fetch de creación de hilo:", err);
          setMessages(prev => [
            ...prev,
            { id: prev.length + 1, text: `Error: ${err.message}`, isBot: true },
          ]);
          setIsLoading(false);
          return;
        }
      }

      // 3️⃣ Enviar el mensaje del usuario al hilo
      const msgRes = await fetch(
        `https://api.openai.com/v1/threads/${currentThread}/messages`,
        {
          method: "POST",
          headers,
          body: JSON.stringify({ role: "user", content: message }),
        }
      );
      
      if (!msgRes.ok) {
        const errorText = await msgRes.text();
        console.error(`Error añadiendo mensaje [${msgRes.status}]: ${errorText}`);
        throw new Error(`No se pudo añadir el mensaje (status ${msgRes.status}): ${errorText}`);
      }

      // 4️⃣ Lanzar una ejecución (run) del asistente sobre el hilo
      const runRes = await fetch(`https://api.openai.com/v1/threads/${currentThread}/runs`, {
        method: "POST",
        headers,
        body: JSON.stringify({ assistant_id: ASSISTANT_ID }),
      });
      
      if (!runRes.ok) {
        const errorText = await runRes.text();
        console.error(`Error iniciando ejecución [${runRes.status}]: ${errorText}`);
        throw new Error(`No se pudo iniciar la ejecución (status ${runRes.status}): ${errorText}`);
      }
      
      const runData = await runRes.json();

      // 5️⃣ Sondear hasta que la ejecución termine
      let runStatus = runData.status;
      const RUN_POLL_INTERVAL = 2000; // 2 segundos (aumentado de 1s)
      const MAX_POLLS = 60; // 120 segundos máximo (aumentado de 30s)
      let polls = 0;
      
      console.log(`Iniciando sondeo de ejecución. ID: ${runData.id}, Estado inicial: ${runStatus}`);
      
      while (runStatus !== "completed" && runStatus !== "failed" && runStatus !== "expired" && polls < MAX_POLLS) {
        await new Promise(r => setTimeout(r, RUN_POLL_INTERVAL));
        polls++;
        
        console.log(`Sondeo #${polls}, último estado: ${runStatus}`);
        
        try {
          const statusRes = await fetch(`https://api.openai.com/v1/threads/${currentThread}/runs/${runData.id}`, {
            method: "GET",
            headers,
          });
          
          if (!statusRes.ok) {
            const errorText = await statusRes.text();
            console.error(`Error consultando estado [${statusRes.status}]: ${errorText}`);
            continue; // Intentar de nuevo en la siguiente iteración
          }
          
          const statusData = await statusRes.json();
          runStatus = statusData.status;
          console.log(`Nuevo estado: ${runStatus}`);
          
          // Si está en requerido o pendiente, esperamos un poco más
          if (runStatus === "queued" || runStatus === "in_progress") {
            continue;
          }
          
          // Si está completado, salimos del bucle
          if (runStatus === "completed") {
            break;
          }
          
          // Si hay errores o cancelaciones, manejamos adecuadamente
          if (["failed", "cancelled", "expired"].includes(runStatus)) {
            throw new Error(`La ejecución terminó con estado: ${runStatus}${statusData.last_error ? ` - ${statusData.last_error?.message}` : ''}`);
          }
        } catch (pollError: any) {
          console.error("Error durante el sondeo:", pollError);
          // No lanzamos el error aquí, seguimos intentando hasta agotar los intentos
        }
      }

      if (runStatus !== "completed") {
        throw new Error(`La ejecución no se completó. Último estado: ${runStatus} después de ${polls} intentos`);
      }

      // 6️⃣ Recuperar el último mensaje del asistente
      console.log("Ejecución completada, recuperando respuesta...");
      
      const assistantMsgsRes = await fetch(`https://api.openai.com/v1/threads/${currentThread}/messages?limit=1&order=desc`, {
        method: "GET",
        headers,
      });
      
      if (!assistantMsgsRes.ok) {
        const errorText = await assistantMsgsRes.text();
        console.error(`Error obteniendo mensajes [${assistantMsgsRes.status}]: ${errorText}`);
        throw new Error("No se pudieron leer los mensajes del asistente");
      }
      
      const assistantMsgsData = await assistantMsgsRes.json();
      const assistantText = assistantMsgsData.data?.[0]?.content?.[0]?.text?.value ??
        "Lo siento, no he podido procesar tu solicitud.";

      setMessages(prev => [...prev, { id: prev.length + 1, text: assistantText, isBot: true }]);
    } catch (err: any) {
      console.error("Error llamando a la Assistants API:", err);
      setMessages(prev => [
        ...prev, 
        { 
          id: prev.length + 1, 
          text: `Lo siento, ha ocurrido un error al procesar tu solicitud: ${err.message || 'Error desconocido'}`, 
          isBot: true 
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  // Reiniciar conversación
  const handleRefreshSession = () => {
    setThreadId(null);
    localStorage.removeItem("chatThreadId");
    localStorage.removeItem("chatMessages");
    setMessages([{ id: 1, text: "¡Hola! Soy el chatbot de PoliFormaT. He iniciado una nueva conversación. ¿En qué puedo ayudarte?", isBot: true }]);
  };

  // Cerrar popup
  const handleClose = () => {
    onClose();
  };

  return (
    <div className="chat-popup flex flex-col">
      <div className="bg-accent p-2 flex justify-between items-center">
        <h3 className="font-semibold text-white text-sm">Mensajes de chat</h3>
        <div className="flex items-center gap-2">
          <button onClick={handleRefreshSession} className="text-white hover:text-gray-200" title="Reiniciar conversación">
            <RefreshCw size={16} />
          </button>
          <button onClick={handleClose} className="text-white hover:text-gray-200">
            <X size={16} />
          </button>
        </div>
      </div>

      <div className="flex-grow bg-white p-3 overflow-y-auto h-80">
        {messages.map(msg => (
          <div key={msg.id} className={`mb-3 ${msg.isBot ? "text-left" : "text-right"}`}>
            <div className={`inline-block px-3 py-2 rounded-lg ${msg.isBot ? "bg-gray-200 text-gray-800" : "bg-blue-500 text-white"}`}>
              {msg.isBot ? (
                <ReactMarkdown className="prose prose-sm max-w-none">{msg.text}</ReactMarkdown>
              ) : (
                msg.text
              )}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="text-left mb-3">
            <div className="inline-block px-3 py-2 rounded-lg bg-gray-200 text-gray-800">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></div>
                <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></div>
                <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="bg-gray-100 p-2 flex gap-2">
        <input
          type="text"
          value={message}
          onChange={e => setMessage(e.target.value)}
          placeholder="Escribe un mensaje..."
          className="flex-grow p-2 border rounded-md text-sm text-black"
          onKeyPress={e => {
            if (e.key === "Enter") handleSendMessage();
          }}
          disabled={isLoading}
        />
        <button
          onClick={handleSendMessage}
          className={`bg-accent hover:bg-accent/90 text-white p-2 rounded-md ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
          disabled={isLoading}
        >
          <Send size={16} />
        </button>
      </div>
    </div>
  );
};

export default ChatPopup;
