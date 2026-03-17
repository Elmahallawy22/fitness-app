import logo from "../../../assets/Images/fit 1.png";
import { Phone, Mail } from "lucide-react";
import ScrollingTicker from "../ScrollingTicker/ScrollingTicker";
export default function Footer() {
  return (
    <>
      <ScrollingTicker />
      {/* dispaly footer */}
      <div className="flex  justify-between items-start py-10 px-20  ">
        {/* logo */}
        <div className="mb-2">
          <img src={logo} alt="logo" />
          <p className="leading-6 font-normal text-lg text-zinc-900">
            Push harder, go further. Your <br />
            fitness journey starts today!
          </p>
        </div>

        {/* contact */}
        <div>
          <h3 className="capitalize text-lg font-bold leading-7 mb-6">
            contact us
          </h3>
          {/* phone */}
          <div className="flex items-center  mb-2">
            <div className="me-4 w-10 h-10 rounded-full border border-zinc-900 flex items-center justify-center">
              <Phone size={18} />
            </div>
            <div className="text-xl leading-7 text-zinc-900 font-normal">
              +91 123 456 789
            </div>
          </div>

          {/* mail */}
          <div className="flex items-center ">
            <div className="me-4 w-10 h-10 rounded-full border border-zinc-900 flex items-center justify-center">
              <Mail size={18} />
            </div>
            <div className="text-xl leading-7 text-zinc-900 font-normal">
              info@gmail.com
            </div>
          </div>
        </div>

        {/* timing */}
        <div>
          <h3 className="capitalize text-lg font-bold leading-7 mb-6">
            our gym timing
          </h3>
          <p className="leading-6 font-normal text-lg text-zinc-900 mb-2">
            Mon - Fri : 08:00 AM - 10:00 PM
          </p>
          <p className="leading-6 font-normal text-lg text-zinc-900">
            Sat - Sun : 08:00 AM - 09:00 PM
          </p>
        </div>

        {/* location */}
        <div>
          <h3 className="capitalize text-lg font-bold leading-7 mb-6">
            our location
          </h3>
          <p className="leading-6 font-normal text-lg text-zinc-900">
            2715 Ash Dr. San Jose, South Dakota 83475
          </p>
        </div>
      </div>
    </>
  );
}
