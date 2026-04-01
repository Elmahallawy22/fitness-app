import axios from "axios";
import { useEffect, useState } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/Components/ui/carousel";

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
      <div className="p-6 mt-24">
        {/* ✅ Categories Slider */}
        <Carousel className="mb-8 bg-blue-600 w-1/2 mx-auto ">
          <CarouselContent>
            {chunkedCategories.map((group, index) => (
              <CarouselItem key={index}>
                <div className="flex justify-center gap-6">
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
                <div className="bg-red-600 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {meals.map((meal) => (
                    <div key={meal.idMeal} className="rounded-lg border p-4">
                      <img
                        src={meal.strMealThumb}
                        alt={meal.strMeal}
                        className="mb-3 h-40 w-full rounded-md object-cover"
                      />
                      <h3 className="text-lg font-semibold">{meal.strMeal}</h3>
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
    </>
  );
}
