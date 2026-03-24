import Footer from "./Footer/Footer";
import HeroBanner from "./Hero-banner/HeroBanner";
import Navbar from "./Navbar/Navbar";
import { Button } from "../ui/button";
import emo from "../../assets/Images/emo.png";

export default function Home() {
  return (
    <>
      {/* chat bot */}
      <div className=" fixed top-1/2 right-20 ">
        <img src={emo} alt="img-button" className="w-24 h-24 " />
        <Button variant="default" className="w-32 p-1.5">
          Hey Ask Me
        </Button>
      </div>

      <Navbar />

      <HeroBanner />

      <Footer />
    </>
  );
}
