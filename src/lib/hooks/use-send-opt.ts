
import { useMutation } from "@tanstack/react-query";
import type { EmailStepFields } from "../types/forgot-password";
import { sendOtpAction } from "../actions/auth.action";

export default function useSendOtp() {
  // mutation
  const { mutate, isPending, error } = useMutation({
    mutationFn: async (fields: EmailStepFields) => {
      const payload = await sendOtpAction(fields);

      if ("code" in payload) {
        throw new Error(payload.message);
      }

      return payload;
    },
  });

  return { sendOtp: mutate, isPending, error };
}