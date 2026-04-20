// states
import { useEffect, useState } from "react";

// services
import { getMuscles } from "../../../lib/services/muscle.service";
import { getMusclesById } from "../../../lib/services/exercises.service";

// types
import type { Muscles, Workout } from "../../../lib/types/muscle";

// components
import CarouselDots from "../../healthy/components/carousel-dots";

// ui carousel
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/Components/ui/carousel";
import type { EmblaCarouselType } from "embla-carousel";
// images
import vector from "../../../assets/Images/Vector.png";
import dumble from "../../../assets/Images/dumble.png";
import { useTranslations, useLocale } from "use-intl";

export default function Muscles() {
  // states
  const [muscles, setMuscles] = useState<Muscles[]>([]);
  const [workout, setWorkout] = useState<Workout[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [api, setApi] = useState<EmblaCarouselType | undefined>(undefined);
  // translations
  const t = useTranslations("workout-page");
  const b = useTranslations("slide-button");

  // locale
  const locale = useLocale();

  // split categories
  function chunkArray(array: Muscles[], size: number): Muscles[][] {
    const result: Muscles[][] = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  }

  const chunkedCategories = chunkArray(muscles, 3);

  // load Muscles
  useEffect(() => {
    async function loadMuscles() {
      const data = await getMuscles(locale);
      setMuscles(data);
      if (data.length > 0) {
        setSelectedCategory(data[0].idMuscles);
      }
    }

    loadMuscles();
  }, [locale]);

  // load meals
  useEffect(() => {
    if (!selectedCategory) return;
    async function loadWorkout() {
      const data = await getMusclesById(selectedCategory, locale);
      setWorkout(data);
    }

    loadWorkout();
  }, [selectedCategory, locale]);

  return (
    <div className=" absolute z-0  w-full mt-48 bg-gradient-to-b from-main/80 via-main/60 to-main/90">
      {/* workout LAYER */}
      <h2
        className={` relative -z-10 inline-block w-full bg-red-200 text-center  text-6xl font-bold bg-gradient-to-b from-white to-[#232425] bg-clip-text text-transparent ${
          locale === "ar"
            ? "right-1/2 translate-x-1/2 bottom-16"
            : "left-1/2 -translate-x-1/2 -top-11"
        }`}>
        {t("workout-title")}
      </h2>

      {/* header */}
      <div>
        <div className="flex justify-center items-center max-w-5xl mx-auto px-4 gap-2 mb-4">
          <img src={dumble} alt="img-dumble" className="w-9" />
          <h4 className="text-orange-600">{t("workout-small-title")}</h4>
        </div>

        <h2 className="text-4xl text-center font-bold uppercase leading-16 mb-10">
          <p> {t("workout-first-line")} </p>
          <p>
            {t("workout-second-line")}
            <span className="text-orange-600">
              {t("workout-special-workout")}
            </span>
          </p>
        </h2>
      </div>

      <div className="p-6">
        <Carousel
          setApi={setApi}
          className="w-full lg:w-1/2 mx-auto"
          opts={{
            direction: locale === "ar" ? "rtl" : "ltr",
          }}>
          <CarouselContent>
            {chunkedCategories.map((group, index) => (
              <CarouselItem key={index}>
                {/* muscles */}
                <div className="mb-8 flex justify-center gap-6">
                  {group.map((cat) => (
                    <button
                      key={cat.idMuscles}
                      onClick={() => setSelectedCategory(cat.idMuscles)}
                      className={`text-lg font-medium transition ${
                        selectedCategory === cat.idMuscles
                          ? "text-orange-600"
                          : "text-gray-500"
                      }`}>
                      {cat.strMuscles}
                    </button>
                  ))}
                </div>

                {/* Workout */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {workout.map((exrcise) => (
                    <div key={exrcise.idWorkout} className="border p-1">
                      <img
                        src={exrcise.strWorkoutThumb}
                        alt={exrcise.strWorkout}
                        className="w-full rounded-md object-cover"
                      />

                      <div className="relative bg-gradient-to-r from-[#171E2E00] via-[#171E2E80] to-[#171E2ECC] backdrop-blur-[3.75rem] p-4">
                        <h3 className="mb-2 text-main dark:text-zinc-100 text-xl font-bold uppercase tracking-[0.14rem] leading-8">
                          {exrcise.strWorkout}
                        </h3>

                        <div className="flex">
                          {/* TODO: wating for exrcies path to intiate */}
                          <button className="text-orange-600">
                            {b("buttton-title")}
                          </button>
                          <div className="p-2 w-6 h-6 ms-2 bg-orange-600 rounded-full">
                            <img
                              src={vector}
                              alt="img-button"
                              className="w-full h-full"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <CarouselDots api={api} count={chunkedCategories.length} />
      </div>
    </div>
  );
}
