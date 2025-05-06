
import { useState } from "react";
import { Send, X } from "lucide-react";

interface ChatPopupProps {
  onClose: () => void;
}

const ChatPopup = ({ onClose }: ChatPopupProps) => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "¡Hola! Soy el chatbot de PoliFormaT. ¿En qué puedo ayudarte?",
      isBot: true,
    },
  ]);

  const handleSendMessage = () => {
    if (message.trim() === "") return;

    // Add user message
    const newMessages = [
      ...messages,
      { id: messages.length + 1, text: message, isBot: false },
    ];
    setMessages(newMessages);
    setMessage("");

    // Simulate bot response after a short delay
    setTimeout(() => {
      setMessages([
        ...newMessages,
        {
          id: newMessages.length + 1,
          text: "Gracias por tu mensaje. Un profesor te responderá pronto.",
          isBot: true,
        },
      ]);
    }, 1000);
  };

  return (
    <div className="chat-popup flex flex-col">
      <div className="bg-accent p-3 flex justify-between items-center">
        <h3 className="font-semibold text-white">Mensajes de chat</h3>
        <button onClick={onClose} className="text-white hover:text-gray-200">
          <X size={20} />
        </button>
      </div>

      <div className="flex-grow bg-white p-4 overflow-y-auto h-80">
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
      </div>

      <div className="bg-gray-100 p-3 flex gap-2">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Escribe un mensaje..."
          className="flex-grow p-2 border rounded-md"
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              handleSendMessage();
            }
          }}
        />
        <button
          onClick={handleSendMessage}
          className="bg-accent hover:bg-accent/90 text-white p-2 rounded-md"
        >
          <Send size={20} />
        </button>
      </div>
    </div>
  );
};

export default ChatPopup;
