import axios from "axios";
import type { WorkoutResponse, Workout } from "../types/muscle";

export async function getMusclesById(
  muscle: string,
  locale: string = "en",
): Promise<Workout[]> {
  const { data } = await axios.get<WorkoutResponse>(
    `https://fitness.elevateegy.com/api/v1/musclesGroup/by-muscle-group?muscleGroupId=${muscle}`,
    {
      headers: {
        "Accept-Language": locale,
      },
    },
  );

  return (
    data.muscles?.map((item) => ({
      idWorkout: item._id,
      strWorkout: item.name,
      strWorkoutThumb: item.image ?? "",
    })) ?? []
  );
}
