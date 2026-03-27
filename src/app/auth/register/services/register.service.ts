import axios from "axios";
import { type RegisterSchema } from "@/lib/schemas/auth.schema";

export const registerUser = async (data: RegisterSchema) => {
  const response = await axios.post(
    "https://fitness.elevateegy.com/api/v1/auth/signup",
    data,
  );
  return response.data;
};
