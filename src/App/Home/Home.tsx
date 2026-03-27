import ChatBoot from "../shared/chat-boot/chat-boot";
import Footer from "./Footer/Footer";
import HeroBanner from "./Hero-banner/HeroBanner";
import Navbar from "./Navbar/Navbar";

export default function Home() {
  return (
    <>
      <ChatBoot />

      <Navbar />

      <HeroBanner />

      <Footer />
    </>
  );
}
