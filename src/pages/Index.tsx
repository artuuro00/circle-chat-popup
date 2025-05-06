
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import ContentArea from "@/components/ContentArea";
import ChatButton from "@/components/ChatButton";

const Index = () => {
  return (
    <div className="app-container">
      <Navbar />
      <Sidebar />
      <ContentArea />
      <ChatButton />
    </div>
  );
};

export default Index;
