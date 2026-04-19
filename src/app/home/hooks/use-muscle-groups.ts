import { useQuery } from "@tanstack/react-query";
import { getMuscleGroups } from "../services/workouts.service";
import { useLocale } from "use-intl";

export const useMuscleGroups = () => {
  const local = useLocale();
  return useQuery({
    queryKey: ["muscle-groups", local],
    queryFn: () => getMuscleGroups(local === "ar" ? "ar" : "en"),
  });
};
