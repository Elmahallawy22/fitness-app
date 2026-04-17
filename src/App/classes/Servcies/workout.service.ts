import axios from "axios";
import type { WorkoutResponse, Workout } from "../Types/muscle";

export async function getMusclesById(muscle: string): Promise<Workout[]> {
  const { data } = await axios.get<WorkoutResponse>(
    `https://fitness.elevateegy.com/api/v1/musclesGroup/by-muscle-group?muscleGroupId=${muscle}`,
  );

  return (
    data.muscles?.map((item) => ({
      idWorkout: item._id,
      strWorkout: item.name,
      strWorkoutThumb: item.image ?? "",
    })) ?? []
  );
}
