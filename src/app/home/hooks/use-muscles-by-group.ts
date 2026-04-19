import { useQuery } from "@tanstack/react-query";
import { getMusclesByGroup } from "../services/workouts.service";
import { useLocale } from "use-intl";

export const useMusclesByGroup = (id?: string) => {
  const local = useLocale();
  return useQuery({
    queryKey: ["muscles", id, local],
    queryFn: () => getMusclesByGroup(local === "ar" ? "ar" : "en", id!),
    enabled: !!id,
  });
};
