// states
import { useEffect, useState } from "react";

// services
import { getMuscles } from "../Servcies/muscle.service";
import { getMusclesById } from "../Servcies/workout.service";

// types
import type { Muscles, Workout } from "../Types/muscle";

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
// import vector from "../../../assets/Images/Vector.png";
// import dumble from "../../../assets/Images/dumble.png";
import { useTranslations, useLocale } from "use-intl";

export default function Muscles() {
  // states
  const [muscles, setMuscles] = useState<Muscles[]>([]);
  const [workout, setWorkout] = useState<Workout[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [api, setApi] = useState<EmblaCarouselType | undefined>(undefined);
  // translations
  const t = useTranslations("meal-page");
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
      const data = await getMuscles();
      setMuscles(data);
      if (data.length > 0) {
        setSelectedCategory(data[0].idMuscles);
      }
    }

    loadMuscles();
  }, []);

  // load meals
  useEffect(() => {
    if (!selectedCategory) return;
    async function loadWorkout() {
      const data = await getMusclesById(selectedCategory);
      setWorkout(data);
    }

    loadWorkout();
  }, [selectedCategory]);

  return (
    <div className="w-full mt-48 bg-gradient-to-b from-main/20 via-main/5 to-main/90">
      {/* healthy LAYER */}
      <h2
        className={`relative inline-block text-center -z-1 text-6xl font-bold bg-gradient-to-b from-white to-[#232425] bg-clip-text text-transparent ${
          locale === "ar"
            ? "right-1/2 translate-x-1/2 bottom-16"
            : "left-1/2 -translate-x-1/2 bottom-12"
        }`}>
        {t("title")}
      </h2>

      {/* header */}
      <div>
        <div className="flex justify-center items-center max-w-5xl mx-auto px-4 gap-2 mb-4">
          {/* <img src={dumble} alt="img-dumble" className="w-9" /> */}
          <h4 className="text-orange-600">{t("small-title")}</h4>
        </div>

        <h2 className="text-4xl text-center font-bold uppercase leading-16 mb-10">
          <p> {t("first-line")} </p>
          <p>
            {t("customized")}
            <span className="text-orange-600"> {t("special-meal")} </span>
            {t("for-you")}
          </p>
        </h2>
      </div>

      <div className="p-6">
        <Carousel setApi={setApi} className="w-full lg:w-1/2 mx-auto">
          <CarouselContent>
            {chunkedCategories.map((group, index) => (
              <CarouselItem key={index}>
                {/* categories */}
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
                          <button className="text-orange-600">Explore</button>
                          <div className="p-2 w-6 h-6 ms-2 bg-orange-600 rounded-full">
                            {/* <img
                              src={vector}
                              alt="img-button"
                              className="w-full h-full"
                            /> */}
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
