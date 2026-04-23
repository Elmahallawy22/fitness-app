import { FORGOT_PASSWORD_STEPS } from "@/lib/constants/auth.constant";
import { useState } from "react";
import EmailStep from "./email-step";
import OtpStep from "./otp-step";
import NewPasswordStep from "./new-password-step";
import { useTranslations } from "use-intl";

export type ForgotPasswordSteps =
  (typeof FORGOT_PASSWORD_STEPS)[keyof typeof FORGOT_PASSWORD_STEPS];

export default function ForgotPasswordFlow() {
  const t = useTranslations("forgot-password-step");

  const [step, setStep] = useState<ForgotPasswordSteps>(
    FORGOT_PASSWORD_STEPS.EMAIL,
  );
  const [email, setEmail] = useState<string>("");

  // variables
  const steps = {
    [FORGOT_PASSWORD_STEPS.EMAIL]: {
      title: t("step-one-title"),
      subTitle: t("step-one-subtitle"),
      form: <EmailStep email={email} setStep={setStep} setEmail={setEmail} />,
    },
    [FORGOT_PASSWORD_STEPS.OTP]: {
      title: t("step-two-title"),
      subTitle: t("step-two-subtitle"),
      form: <OtpStep setStep={setStep} />,
    },
    [FORGOT_PASSWORD_STEPS.NEW_PASSWORD]: {
      title: t("step-three-title"),
      subTitle: t("step-three-subtitle"),
      form: <NewPasswordStep email={email} />,
    },
  } as const;

  return (
    <div>
      <h1 className="text-5xl font-bold mb-4 text-center">
        {steps[step].title}
      </h1>
      <div className="py-10 px-11 border border-gray-100 rounded-[50px] flex flex-col items-center justify-center gap-2">
        {/* Subtitle */}
        <p className="text-white text-2xl">{steps[step].subTitle}</p>
        {/* Form */}
        {steps[step].form}
      </div>
    </div>
  );
}
