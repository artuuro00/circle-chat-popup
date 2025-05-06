
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Navigation from "@/components/Navigation";
import Header from "@/components/Header";
import ContentArea from "@/components/ContentArea";
import ChatButton from "@/components/ChatButton";
import { ChevronDown } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#1C1C1C]">
      <Navbar />
      <Navigation />
      <Sidebar />
      <Header />
      <div className="pt-32">
        <ContentArea />
      </div>
      <ChatButton />
    </div>
  );
};

export default Index;
