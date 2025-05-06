
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
      <div className="chat-button" onClick={toggleChat}>
        <Users size={24} color="white" />
        <span className="users-indicator">30</span>
      </div>
      {isOpen && <ChatPopup onClose={() => setIsOpen(false)} />}
    </>
  );
};

export default ChatButton;
