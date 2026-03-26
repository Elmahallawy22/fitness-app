import Footer from "./Footer/Footer";
import HeroBanner from "./Hero-banner/HeroBanner";
import Navbar from "./Navbar/Navbar";
import { Button } from "../../Components/ui/button";
import emo from "../../assets/Images/emo.png";
import { useTranslations } from "use-intl";

export default function Home() {
  //Translations
  const t = useTranslations("chat-boot");

  return (
    <>
      {/* chat bot */}
      <div className=" fixed top-1/2 end-20 z-50 ">
        <img src={emo} alt="img-button" className=" h-24 mx-auto" />
        <Button variant="default" className="w-32 p-1.5">
          {t("title")}
        </Button>
      </div>

      <Navbar />

      <HeroBanner />

      <Footer />
    </>
  );
}
