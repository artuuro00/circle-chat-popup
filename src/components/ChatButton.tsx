
import { useState } from "react";
import { MessageSquare } from "lucide-react";
import ChatPopup from "./ChatPopup";

const ChatButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div 
        className="fixed bottom-4 right-4 bg-[#E63946] rounded-full flex items-center justify-center w-10 h-10 cursor-pointer shadow-md z-50" 
        onClick={toggleChat}
      >
        <MessageSquare size={18} color="white" />
      </div>
      {isOpen && <ChatPopup onClose={() => setIsOpen(false)} />}
    </>
  );
};

export default ChatButton;
