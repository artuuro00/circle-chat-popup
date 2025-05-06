
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Navigation from "@/components/Navigation";
import Header from "@/components/Header";
import ContentArea from "@/components/ContentArea";
import ChatButton from "@/components/ChatButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Sidebar />
      <Navigation />
      <Header />
      <div className="pt-44">
        <ContentArea />
      </div>
      <ChatButton />
    </div>
  );
};

export default Index;
