export type Category = {
  idCategory: string;
  strCategory: string;
};

export type Meal = {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
};

export type CategoriesResponse = {
  categories: Category[];
};

export type MealsResponse = {
  meals: Meal[];
};
