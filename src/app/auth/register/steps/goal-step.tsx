import StepsHeader from "../components/steps-header";
import { useFormContext } from "react-hook-form";
import { GOALS, type RegisterSchema } from "@/lib/schemas/auth.schema";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldContent,
  FieldLabel,
  FieldTitle,
} from "@/components/ui/field";
import { useTranslations } from "use-intl";

export default function GoalStep({ nextStep }: RegisterFormProps) {
  const t = useTranslations("Register");
  const form = useFormContext<RegisterSchema>();
  const selectedGoal = form.watch("goal") ?? "";

  const handleNext = async () => {
    const isValid = await form.trigger(["goal"]);
    if (isValid) nextStep?.();
  };

  return (
    <div className="text-center space-y-6">
      <StepsHeader
        header={t("what-is-your-goal")}
        paragraph={t("step-header-paragraph")}
      />

      <RadioGroup
        value={selectedGoal}
        onValueChange={(value) =>
          form.setValue("goal", value as RegisterSchema["goal"])
        }
        className="flex flex-col gap-4 mt-6 w-full max-w-md mx-auto"
      >
        {GOALS.map((goal) => {
          const id = goal.replace(/\s+/g, "-").toLowerCase();
          const goalLabel = t(`goal.${id}`);

          return (
            <FieldLabel htmlFor={`${id}-goal`} key={goal}>
              <Field
                orientation="horizontal"
                className="rounded-2xl px-2 py-1 transition-all text-black dark:text-white
                peer-data-[state=checked]:border-orange-500
                peer-data-[state=checked]:text-primary"
              >
                <FieldContent>
                  <FieldTitle>{goalLabel}</FieldTitle>
                </FieldContent>

                <RadioGroupItem
                  value={goal}
                  id={`${id}-goal`}
                  className="peer"
                />
              </Field>
            </FieldLabel>
          );
        })}
      </RadioGroup>

      <Button onClick={handleNext} disabled={!selectedGoal} className="w-2/3">
        {t("next")}
      </Button>
    </div>
  );
}
