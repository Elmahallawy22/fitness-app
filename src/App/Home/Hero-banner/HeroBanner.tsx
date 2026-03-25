import { Button } from "../../../Components/ui/button";
import arrow from "../../../assets/Images/arrow.png";
import imgBanner from "../../../assets/Images/Theo Vance.png";
import ScrollingTicker from "../ScrollingTicker/ScrollingTicker";

export default function HeroBanner() {
  return (
    <>
      <div
        className=" bg-gradient-to-br mb-12  from-white/10  via-[#abb1af] to-[#abb1af] 
                 dark:from-[#242424]/90
                 dark:via-[#242424]/80
                  dark:to-[#242424]/60
                  w-[`90rem`] h-[`62.5rem`]">
        <div className="content  w-screen flex justify-between items-start pt-52 px-20">
          {/* content */}
          <div>
            <p className="font-bold text-zinc-900 uppercase text-6xl leading-[1.2] mb-6 dark:text-zinc-100">
              Your body can <span className="text-orange-600"> stand </span>
              <br /> <span className="text-orange-600"> almost </span> anything
            </p>
            <p className="text-zinc-900 leading-7 text-lg font-normal border-l-4 border-orange-600 pt-1.5 ps-5 dark:text-zinc-100">
              It's your mind that needs convincing. Push past your limits, stay
              <br />
              committed, and watch as your body transform into powerhouse of{" "}
              <br />
              strength and resilience. Start your journey today & truly capable
              of!
            </p>

            {/* counter */}
            <div className="w-[`38rem`] flex justify-between items-start mt-16">
              {/* first counter */}
              <div>
                <span className="font-bold text-4xl text-zinc-900 leading-7 mb-1.5 dark:text-zinc-100">
                  1200+
                </span>
                <p className="text-lg font-normal leading-7 capitalize text-zinc-900 dark:text-zinc-100">
                  active members
                </p>
              </div>

              {/* second counrt */}
              <div>
                <span className="font-bold text-4xl text-zinc-900 leading-7 mb-1.5 dark:text-zinc-100">
                  12+
                </span>
                <p className="text-lg font-normal leading-7 capitalize text-zinc-900 dark:text-zinc-100">
                  Certified Trainers
                </p>
              </div>

              {/* third counrt */}
              <div>
                <span className="font-bold text-4xl text-zinc-900 leading-7 mb-1.5 dark:text-zinc-100">
                  20+
                </span>
                <p className="text-lg font-normal leading-7 capitalize text-zinc-900 dark:text-zinc-100">
                  Year Of Experience
                </p>
              </div>
            </div>

            {/* buttons */}

            <div className="mt-16 flex gap-16 items-center ">
              {/* get started */}
              <div className="flex ">
                <Button variant={`default`}>get started</Button>
                <img
                  src={arrow}
                  alt="img-button"
                  className=" -mx-2 border-2 border-white w-9 h-9 bg-orange-600 rounded-full"
                />
              </div>
              {/* explore more */}
              <div className=" flex">
                <Button
                  variant={"default"}
                  className=" bg-transparent border border-orange-600 text-orange-600 ">
                  explore more
                </Button>
                <img
                  src={arrow}
                  alt="img-button"
                  className=" -mx-2 border-2 border-white w-9 h-9 bg-orange-600 rounded-full"
                />
              </div>
            </div>
          </div>

          {/* image */}
          <div>
            <img src={imgBanner} alt="logo-banner" />
          </div>
        </div>

        {/* scroll section */}
        <ScrollingTicker />
      </div>
    </>
  );
}
