
import { useState, useEffect, useRef } from "react";
import { Send, X } from "lucide-react";

interface ChatPopupProps {
  onClose: () => void;
}

interface Message {
  id: number;
  text: string;
  isBot: boolean;
}

const ChatPopup = ({ onClose }: ChatPopupProps) => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "¡Hola! Soy el chatbot de PoliFormaT. ¿En qué puedo ayudarte?",
      isBot: true,
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [sessionId, setSessionId] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Fetch session ID from localStorage on component mount
  useEffect(() => {
    const storedSessionId = localStorage.getItem("chatSessionId");
    if (storedSessionId) {
      setSessionId(storedSessionId);
    }
  }, []);

  // Scroll to bottom whenever messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = async () => {
    if (message.trim() === "") return;

    // Add user message
    const userMessage = { id: messages.length + 1, text: message, isBot: false };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setMessage("");
    setIsLoading(true);

    try {
      // Prepare the request payload
      const payload = {
        question: message,
        overrideConfig: {
          sessionId: sessionId || undefined,
        }
      };

      // Send the request to the API
      const response = await fetch(
        "https://flowiseai-railway-production-3cb4.up.railway.app/api/v1/prediction/5e4eda77-a540-40c1-ab88-0ef44972a56e",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      if (!response.ok) {
        throw new Error(`API responded with status: ${response.status}`);
      }

      const data = await response.json();
      
      // Store the session ID for future requests if it's returned
      if (data.sessionId) {
        setSessionId(data.sessionId);
        localStorage.setItem("chatSessionId", data.sessionId);
      }

      // Add bot response
      setMessages(prev => [
        ...prev,
        { 
          id: prev.length + 1, 
          text: data.text || data.answer || "Lo siento, no he podido procesar tu solicitud.", 
          isBot: true 
        }
      ]);
    } catch (error) {
      console.error("Error calling assistant API:", error);
      // Add error message
      setMessages(prev => [
        ...prev,
        { 
          id: prev.length + 1, 
          text: "Lo siento, ha ocurrido un error al procesar tu solicitud.", 
          isBot: true 
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="chat-popup flex flex-col">
      <div className="bg-accent p-2 flex justify-between items-center">
        <h3 className="font-semibold text-white text-sm">Mensajes de chat</h3>
        <button onClick={onClose} className="text-white hover:text-gray-200">
          <X size={16} />
        </button>
      </div>

      <div className="flex-grow bg-white p-3 overflow-y-auto h-80">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`mb-3 ${
              msg.isBot ? "text-left" : "text-right"
            }`}
          >
            <div
              className={`inline-block px-3 py-2 rounded-lg ${
                msg.isBot
                  ? "bg-gray-200 text-gray-800"
                  : "bg-blue-500 text-white"
              }`}
            >
              {msg.text}
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
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Escribe un mensaje..."
          className="flex-grow p-2 border rounded-md text-sm"
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              handleSendMessage();
            }
          }}
          disabled={isLoading}
        />
        <button
          onClick={handleSendMessage}
          className={`bg-accent hover:bg-accent/90 text-white p-2 rounded-md ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={isLoading}
        >
          <Send size={16} />
        </button>
      </div>
    </div>
  );
};

export default ChatPopup;
