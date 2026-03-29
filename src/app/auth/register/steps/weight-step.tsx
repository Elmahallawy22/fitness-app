import { NumberPicker } from "@/components/ui/number-picker";
import StepsHeader from "../components/steps-header";
import { Controller, useFormContext } from "react-hook-form";
import type { RegisterSchema } from "@/lib/schemas/auth.schema";
import { Button } from "@/components/ui/button";
import { useTranslations } from "use-intl";

export default function WeightStep({ nextStep }: RegisterFormProps) {
  // Translation
  const t = useTranslations("Register");

  // Form context
  const form = useFormContext<RegisterSchema>();

  // constants
  const weight = form.watch("weight");

  // Handle next step
  const handleNext = async () => {
    const isValid = await form.trigger(["weight"]);
    if (isValid) {
      nextStep?.();
    }
  };

  return (
    <div className="text-center space-y-6">
      <StepsHeader
        header={t("what-is-your-weight")}
        paragraph={t("step-header-paragraph")}
      />

      <Controller
        name="weight"
        control={form.control}
        render={({ field }) => (
          <NumberPicker
            min={40}
            max={180}
            defaultValue={field.value}
            unit="KG"
            onChange={field.onChange}
            name={field.name}
          />
        )}
      />

      <Button
        disabled={weight == undefined}
        onClick={handleNext}
        className="w-2/3"
      >
        {t("next")}
      </Button>
    </div>
  );
}
