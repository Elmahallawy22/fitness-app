import axios from "axios";
import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../Components/ui/carousel";

import vector from "../../assets/Images/Vector.png";
import dumble from "../../assets/Images/dumble.png";

type Category = {
  idCategory: string;
  strCategory: string;
};

type Meal = {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
};

export default function Healthy() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [meals, setMeals] = useState<Meal[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("Beef");

  // ✅ get categories
  async function getMealsCategories() {
    const { data } = await axios.get(
      "https://www.themealdb.com/api/json/v1/1/categories.php",
    );
    setCategories(data.categories || []);
  }

  // ✅ get meals by category
  async function getMealsByCategory(category: string) {
    const { data } = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`,
    );
    setMeals(data.meals || []);
  }

  // ✅ split categories into chunks (3 per slide)
  function chunkArray(array: Category[], size: number) {
    const result: Category[][] = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  }

  const chunkedCategories = chunkArray(categories, 3);

  useEffect(() => {
    getMealsCategories();
  }, []);

  useEffect(() => {
    getMealsByCategory(selectedCategory);
  }, [selectedCategory]);

  return (
    <>
      <div className="my-main mt-48 bg-gradient-to-b from-main/20 via-main/5 to-main/90">
        {/* healthy LAYER  */}
        <h2
          className="
                  relative inline-block text-center bottom-12 -z-1 left-1/2 -translate-x-1/2  text-6xl font-bold
                  bg-gradient-to-b from-white to-[#232425]
                   bg-clip-text text-transparent">
          HEALTHY
        </h2>

        {/* header */}
        <div>
          {/* small header */}
          <div className="flex justify-center items-center w-5xl mx-auto  gap-2 mb-4">
            <img src={dumble} alt="img-dumble" className="w-9" />
            <h4 className="text-orange-600">Healthy Nutritions</h4>
          </div>
          <h2 className="text-4xl text-center  font-bold uppercase leading-16  mb-10 ">
            Fuel your fitness journey with <br />
            customized <span className="text-orange-600"> meal plans </span>for
            you
          </h2>
        </div>

        <div className="p-6 ">
          {/* ✅ Categories Slider */}
          <Carousel className="w-1/2 mx-auto ">
            <CarouselContent>
              {chunkedCategories.map((group, index) => (
                <CarouselItem key={index}>
                  <div className="mb-8 flex justify-center gap-6">
                    {group.map((cat) => (
                      <button
                        key={cat.idCategory}
                        onClick={() => setSelectedCategory(cat.strCategory)}
                        className={`text-lg font-medium transition ${
                          selectedCategory === cat.strCategory
                            ? "text-orange-600"
                            : "text-gray-500"
                        }`}>
                        {cat.strCategory}
                      </button>
                    ))}
                  </div>

                  {/* ✅ Meals Grid */}
                  <div className=" grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {meals.map((meal) => (
                      <div key={meal.idMeal} className="  border p-1">
                        <img
                          src={meal.strMealThumb}
                          alt={meal.strMeal}
                          className="  w-full rounded-md object-cover"
                        />
                        {/* slide content */}
                        <div className="relative bottom-0 left-0 bg-gradient-to-r from-[#171E2E00]  via-[#171E2E80]   to-[#171E2ECC]   backdrop-blur-[3.75rem] p-4 gap-2">
                          {/* meal title */}
                          <h3 className=" mb-2  text-main dark:text-zinc-100  text-xl font-bold uppercase tracking-[0.14rem] leading-8">
                            {meal.strMeal}
                          </h3>

                          {/* slide button */}
                          <div className="flex">
                            <button className="text-orange-600">Explore</button>
                            <div className="p-2 w-6 h-6 ms-2 bg-orange-600 rounded-full">
                              <img
                                src={vector}
                                alt="img-button"
                                className="w-full text-center h-full"
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

            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </>
  );
}
