import { useState } from "react";
import RegisterForm from "./components/register-form";
import GenderStep from "./steps/gender-step";
import AgeStep from "./steps/age-step";
import WeightStep from "./steps/weight-step";
import HeightStep from "./steps/height-step";
import GoalStep from "./steps/goal-step";
import ActivityLevelStep from "./steps/level-step";

export default function RegisterPage() {
  // States
  const [data, setData] = useState<RegisterState>({});
  const [currentStep, setCurrentStep] = useState(0);

  // Functions
  const nextStep = () => setCurrentStep((s) => s + 1);

  // Variables
  const steps = [
    <RegisterForm data={data} setData={setData} nextStep={nextStep} />,
    <GenderStep data={data} setData={setData} nextStep={nextStep} />,
    <AgeStep data={data} setData={setData} nextStep={nextStep} />,
    <WeightStep data={data} setData={setData} nextStep={nextStep} />,
    <HeightStep data={data} setData={setData} nextStep={nextStep} />,
    <GoalStep data={data} setData={setData} nextStep={nextStep} />,
    <ActivityLevelStep data={data} setData={setData} />,
  ];

  return (
    <>
      <div className="flex justify-center items-center w-full">
        {steps[currentStep]}
      </div>
    </>
  );
}
