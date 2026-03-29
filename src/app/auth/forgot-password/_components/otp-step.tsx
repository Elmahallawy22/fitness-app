import { otpStepSchema } from "@/lib/schemas/auth.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import type { Dispatch, SetStateAction } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { useTranslations } from "use-intl";
import type { ForgotPasswordSteps } from "./forgot-password-flow";
import type { OtpStepFields } from "@/lib/types/forgot-password";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import useVerifyOtp from "@/lib/hooks/use-verify-opt";
import { FORGOT_PASSWORD_STEPS } from "@/lib/constants/auth.constant";
import { Link } from "react-router-dom";
import Feedback from "@/components/shared/feadback";

type OtpStepProps = {
  setStep: Dispatch<SetStateAction<ForgotPasswordSteps>>;
};

export default function OtpStep({ setStep }: OtpStepProps) {
  //translation
  const t = useTranslations("forgot-password-step");

  // mutation
  const { verifyOtp, isPending, error } = useVerifyOtp();

  // form
  const form = useForm<OtpStepFields>({
    resolver: zodResolver(otpStepSchema(t)),
    defaultValues: {
      otp: "",
    },
  });

  const onSubmit: SubmitHandler<OtpStepFields> = (values) => {
    verifyOtp(values, {
      onSuccess: () => {
        setStep(FORGOT_PASSWORD_STEPS.NEW_PASSWORD);
      },
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-6 items-center w-96 py-6 px-4">
        {/* otp */}
        <FormField
          control={form.control}
          name="otp"
          render={({ field }) => (
            <FormItem className="flex flex-col items-center gap-2">
              {/* Field */}
              <FormControl>
                <InputOTP maxLength={6} {...field}>
                  <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                  </InputOTPGroup>
                </InputOTP>
              </FormControl>
              {/* message */}
              <FormMessage className="text-primary text-center" />
            </FormItem>
          )}
        />
        {/* feedback */}
        <Feedback className="mt-3">{error?.message}</Feedback>
        {/* submit button */}
        <Button disabled={isPending || (!form.formState.isValid && form.formState.isSubmitted)} className="w-full">
          {t("confirm")}
        </Button>
        <div className="flex flex-col items-center">
          <p>{t("did-not-receive")}</p>
          <Link to={""} className="text-sm m-0 underline font-bold text-primary">
            {t("resend")}
          </Link>
        </div>
      </form>
    </Form>
  );
}
