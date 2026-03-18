import imgBanner from "../../../assets/Images/Theo Vance.png";
export default function HeroBanner() {
  return (
    <>
      {/* <div className="flex justify-between items-center bg-gradient-to-l from-[#abb1af_80%] to-[#ffffff_20%]  w-[`90rem`] h-[`62.5rem`] ">
        <div>
          <p> test test test</p>
        </div>
        <div>
          <img src={imgBanner} alt="logo-banner" />
        </div>
      </div> */}

      <div
        className=" bg-gradient-to-br  from-white/10  via-[#abb1af] to-[#abb1af] 
              w-[`90rem`] h-[`62.5rem`]">
        <div className="content  w-screen flex justify-between items-start pt-52 px-20">
          {/* content */}
          <div>
            <p className="font-bold uppercase text-6xl leading-[1.2] mb-6">
              Your body can <span className="text-orange-600"> stand </span>
              <br /> <span className="text-orange-600"> almost </span> anything
            </p>
            <p className="text-zinc-900 leading-7 text-lg font-normal border-l-4 border-orange-600 pt-1.5 ps-5">
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
                <span className="font-bold text-4xl text-zinc-900 leading-7 mb-1.5">
                  1200+
                </span>
                <p className="text-lg font-normal leading-7 capitalize text-zinc-900">
                  active members
                </p>
              </div>

              {/* second counrt */}
              <div>
                <span className="font-bold text-4xl text-zinc-900 leading-7 mb-1.5">
                  12+
                </span>
                <p className="text-lg font-normal leading-7 capitalize text-zinc-900">
                  Certified Trainers
                </p>
              </div>

              {/* third counrt */}
              <div>
                <span className="font-bold text-4xl text-zinc-900 leading-7 mb-1.5">
                  20+
                </span>
                <p className="text-lg font-normal leading-7 capitalize text-zinc-900">
                  Year Of Experience
                </p>
              </div>
            </div>

            {/* buttons */}
            <div className="mt-16">
              <button className="w-36 h-12 text-base me-10 font-semibold leading-4 cursor-pointer rounded-full bg-orange-600 text-zinc-100 capitalize">
                get started
              </button>
              <button className="w-36 h-12 cursor-pointer text-base font-semibold leading-4 rounded-full bg-transparent border border-orange-600 text-orange-600 capitalize  hover:bg-orange-600 hover:text-zinc-100">
                explore more
              </button>
            </div>
          </div>

          {/* image */}
          <div>
            <img src={imgBanner} alt="logo-banner" />
          </div>
        </div>
      </div>
    </>
  );
}
