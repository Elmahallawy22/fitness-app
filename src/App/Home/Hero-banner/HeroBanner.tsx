import { Button } from "../../../Components/ui/button";
import arrow from "../../../assets/Images/arrow.png";
import imgBanner from "../../../assets/Images/Theo Vance.png";
import ScrollingTicker from "../ScrollingTicker/ScrollingTicker";
import { useTranslations } from "use-intl";

export default function HeroBanner() {
  //Translations
  const t = useTranslations("Hero-banner");
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
              {t("your body can")}{" "}
              <span className="text-orange-600"> {t("stand")} </span>
              <br /> <span className="text-orange-600">{t("almost")}</span>
              {t("anything")}
            </p>
            <p className="text-zinc-900 leading-7 text-lg font-normal border-s-4 border-orange-600 pt-1.5 ps-5 dark:text-zinc-100">
              {t("first-line")} <br /> {t("second-line")} <br />{" "}
              {t("third-line")}
            </p>

            {/* counter */}
            <div className="w-[`38rem`] flex justify-between items-start mt-16">
              {/* first counter */}
              <div>
                <span className="font-bold text-4xl text-zinc-900 leading-7 mb-1.5 dark:text-zinc-100">
                  {t("num-members")}
                </span>
                <p className="text-lg font-normal leading-7 capitalize text-zinc-900 dark:text-zinc-100">
                  {t("active-members")}
                </p>
              </div>

              {/* second counrt */}
              <div>
                <span className="font-bold text-4xl text-zinc-900 leading-7 mb-1.5 dark:text-zinc-100">
                  {t("num-trainers")}
                </span>
                <p className="text-lg font-normal leading-7 capitalize text-zinc-900 dark:text-zinc-100">
                  {t("certified-trainers")}
                </p>
              </div>

              {/* third counrt */}
              <div>
                <span className="font-bold text-4xl text-zinc-900 leading-7 mb-1.5 dark:text-zinc-100">
                  {t("num-years")}
                </span>
                <p className="text-lg font-normal leading-7 capitalize text-zinc-900 dark:text-zinc-100">
                  {t("year-of-experience")}
                </p>
              </div>
            </div>

            {/* buttons */}

            <div className="mt-16 flex gap-16 items-center ">
              {/* get started */}
              <div className="flex flex-row ltr:flex-row rtl:flex-row-reverse">
                <Button variant={`default`}> {t("get-started")} </Button>
                <img
                  src={arrow}
                  alt="img-button"
                  className=" -ms-2 border-2 border-white w-9 h-9 bg-orange-600 rounded-full"
                />
              </div>
              {/* explore more */}
              <div className=" flex flex-row ltr:flex-row rtl:flex-row-reverse">
                <Button
                  variant={"default"}
                  className=" bg-transparent border border-orange-600 text-orange-600 ">
                  {t("explore-more")}
                </Button>
                <img
                  src={arrow}
                  alt="img-button"
                  className=" -ms-2 border-2 border-white w-9 h-9 bg-orange-600 rounded-full"
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
