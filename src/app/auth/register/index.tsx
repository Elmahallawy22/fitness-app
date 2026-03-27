import RegisterForm from "./components/register-form";
import GenderStep from "./steps/gender-step";
import AgeStep from "./steps/age-step";
import WeightStep from "./steps/weight-step";
import HeightStep from "./steps/height-step";
import GoalStep from "./steps/goal-step";
import ActivityLevelStep from "./steps/level-step";
import CircularProgress from "./components/circular-progress";

import { FormProvider, useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useRegister } from "./hooks/use-register";
import { useNavigate } from "react-router-dom";
import {
  createRegisterSchema,
  type RegisterSchema,
} from "@/lib/schemas/auth.schema";
import { useTranslations } from "use-intl";

export default function Register() {
  const t = useTranslations();
  const navigate = useNavigate();
  const form = useForm<RegisterSchema>({
    resolver: zodResolver(createRegisterSchema(t)),
    mode: "onChange",
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      rePassword: "",
      gender: undefined,
      age: 30,
      weight: 70,
      height: 170,
      goal: undefined,
      activityLevel: undefined,
    },
  });

  const { mutate, isPending } = useRegister();

  const [currentStep, setCurrentStep] = useState(0);

  // Handle next step with validation
  const nextStep = async () => {
    let fields: (keyof RegisterSchema)[] = [];

    switch (currentStep) {
      case 0:
        fields = ["firstName", "lastName", "email", "password", "rePassword"];
        break;
      case 1:
        fields = ["gender"];
        break;
      case 2:
        fields = ["age"];
        break;
      case 3:
        fields = ["weight"];
        break;
      case 4:
        fields = ["height"];
        break;
      case 5:
        fields = ["goal"];
        break;
      case 6:
        fields = ["activityLevel"];
        break;
    }

    const isValid = await form.trigger(fields);

    if (isValid) {
      setCurrentStep((s) => Math.min(s + 1, steps.length - 1));
    }
  };

  // Final submit
  const onSubmit: SubmitHandler<RegisterSchema> = (data) => {
    console.log("FINAL DATA:", data);
    mutate(data, {
      onSuccess: () => navigate("/"),
    });
  };

  // Steps
  const steps = [
    <RegisterForm key="step-0" nextStep={nextStep} />,
    <GenderStep key="step-1" nextStep={nextStep} />,
    <AgeStep key="step-2" nextStep={nextStep} />,
    <WeightStep key="step-3" nextStep={nextStep} />,
    <HeightStep key="step-4" nextStep={nextStep} />,
    <GoalStep key="step-5" nextStep={nextStep} />,
    <ActivityLevelStep key="step-6" isPending={isPending} />,
  ];

  return (
    <FormProvider {...form}>
      <div className="flex flex-col justify-center items-center w-full">
        {/* Progress */}
        {currentStep !== 0 && (
          <div className="relative flex items-center justify-center mb-6">
            <CircularProgress
              currentStep={currentStep}
              totalSteps={steps.length - 1}
            />
          </div>
        )}

        {/* Form */}
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full flex flex-col items-center"
        >
          {steps[currentStep]}
        </form>
      </div>
    </FormProvider>
  );
}
