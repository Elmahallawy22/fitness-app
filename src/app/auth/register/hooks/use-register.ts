import { useMutation } from "@tanstack/react-query";
import { registerUser } from "../services/register.service";
import { toast } from "sonner";

export const useRegister = () => {
  return useMutation({
    mutationFn: registerUser,
    onSuccess: () => {
      toast.success("Account created successfully");
    },
    onError: () => {
      toast.error("Something went wrong");
    },
  });
};
