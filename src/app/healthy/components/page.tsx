// states
import { useEffect, useState } from "react";

// services
import { getMealsByCategory } from "../../../lib/services/meals.service";
import { getCategories } from "../../../lib/services/categories.service";

// types
import type { Category, Meal } from "../../../lib/types/meals";

// components
import CarouselDots from "./carousel-dots";

// ui carousel
import type { EmblaCarouselType } from "embla-carousel";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

// images
import vector from "../../../assets/images/Vector.png";
import dumble from "../../../assets/images/dumble.png";
import { useTranslations, useLocale } from "use-intl";
import { useNavigate } from "react-router-dom";

export default function Healthy() {
  // Router
  const navigate = useNavigate();
  // states
  const [categories, setCategories] = useState<Category[]>([]);
  const [meals, setMeals] = useState<Meal[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("Beef");
  const [api, setApi] = useState<EmblaCarouselType | undefined>(undefined);
  // translations
  const t = useTranslations("meal-page");
  // locale
  const locale = useLocale();

  // split categories
  function chunkArray(array: Category[], size: number): Category[][] {
    const result: Category[][] = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  }

  const chunkedCategories = chunkArray(categories, 3);

  // load categories
  useEffect(() => {
    async function loadCategories() {
      const data = await getCategories();
      setCategories(data);
    }

    loadCategories();
  }, []);

  // load meals
  useEffect(() => {
    async function loadMeals() {
      const data = await getMealsByCategory(selectedCategory);
      setMeals(data);
    }

    loadMeals();
  }, [selectedCategory]);

  return (
    <div className="w-full mt-48 bg-linear-to-b from-main/20 via-main/5 to-main/90">
      {/* healthy LAYER */}
      <h2
        className={`relative inline-block text-center -z-1 text-6xl font-bold bg-linear-to-b from-white to-[#232425] bg-clip-text text-transparent ${
          locale === "ar" ? "right-1/2 translate-x-1/2 bottom-16" : "left-1/2 -translate-x-1/2 bottom-12"
        }`}
      >
        {t("title")}
      </h2>
      {/* header */}
      <div>
        <div className="flex justify-center items-center max-w-5xl mx-auto px-4 gap-2 mb-4">
          <img src={dumble} alt="img-dumble" className="w-9" />
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
        <Carousel
          setApi={setApi}
          className="w-full lg:w-1/2 mx-auto"
          opts={{
            direction: locale === "en" ? "ltr" : "rtl",
          }}
        >
          <CarouselContent>
            {chunkedCategories.map((group, index) => (
              <CarouselItem key={index}>
                {/* categories */}
                <div className="mb-8 flex justify-center gap-6">
                  {group.map((cat) => (
                    <button
                      key={cat.idCategory}
                      onClick={() => setSelectedCategory(cat.strCategory)}
                      className={`text-lg font-medium transition ${
                        selectedCategory === cat.strCategory ? "text-orange-600" : "text-gray-500"
                      }`}
                    >
                      {cat.strCategory}
                    </button>
                  ))}
                </div>
                {/* meals */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
                  {meals.map((meal) => (
                    <div key={meal.idMeal} className="border p-1 bg-[#171E2ECC] overflow-hdden">
                      <img src={meal.strMealThumb} alt={meal.strMeal} className="w-full rounded-md" loading="lazy" />
                      <div className="p-4 flex flex-col justify-between">
                        <h3 className="mb-2 text-zinc-100 text-xl font-bold uppercase">{meal.strMeal}</h3>
                        <button
                          onClick={() => navigate(`/${locale}/healthy/meals/${meal.idMeal}`)}
                          className="text-orange-600 flex cursor-pointer"
                        >
                          Explore
                          <div className="p-2 size-6 mx-2 bg-orange-600 rounded-full">
                            <img src={vector} alt="img-button" className="w-full h-full" />
                          </div>
                        </button>
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
