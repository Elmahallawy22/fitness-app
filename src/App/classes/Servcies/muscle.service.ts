import axios from "axios";
import type { MusclesResponse, Muscles } from "../Types/muscle";

export async function getMuscles(): Promise<Muscles[]> {
  const { data } = await axios.get<MusclesResponse>(
    "https://fitness.elevateegy.com/api/v1/muscles",
  );

  return (
    data.musclesGroup?.map((item) => ({
      idMuscles: item._id,
      strMuscles: item.name,
    })) ?? []
  );
}
