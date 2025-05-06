
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Navigation from "@/components/Navigation";
import Header from "@/components/Header";
import ContentArea from "@/components/ContentArea";
import ChatButton from "@/components/ChatButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#1C1C1C]">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="flex flex-col flex-grow">
          <Navigation />
          <Header />
          <div className="pt-36 pl-14">
            <ContentArea />
          </div>
        </div>
      </div>
      <ChatButton />
    </div>
  );
};

export default Index;
