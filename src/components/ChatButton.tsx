
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
      <div className="fixed bottom-4 right-4 bg-red-600 hover:bg-red-700 rounded-md flex items-center justify-center gap-2 px-3 py-2 cursor-pointer shadow-md z-50" onClick={toggleChat}>
        <Users size={18} color="white" />
        <div className="bg-red-700 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-semibold">9</div>
      </div>
      {isOpen && <ChatPopup onClose={() => setIsOpen(false)} />}
    </>
  );
};

export default ChatButton;
