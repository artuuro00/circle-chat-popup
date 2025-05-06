
import { useState } from "react";
import { Users } from "lucide-react";
import ChatPopup from "./ChatPopup";

const ChatButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="fixed bottom-4 right-4 bg-red-600 rounded-full flex items-center justify-center w-12 h-12 cursor-pointer shadow-md z-50" onClick={toggleChat}>
        <Users size={24} color="white" />
        <span className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-semibold border-2 border-background">30</span>
      </div>
      {isOpen && <ChatPopup onClose={() => setIsOpen(false)} />}
    </>
  );
};

export default ChatButton;
