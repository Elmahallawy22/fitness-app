import { NumberPicker } from "@/components/ui/number-picker";
import StepsHeader from "../components/steps-header";
import { Controller, useFormContext } from "react-hook-form";
import type { RegisterSchema } from "@/lib/schemas/auth.schema";
import { Button } from "@/components/ui/button";
import { useTranslations } from "use-intl";
export default function HeightStep({ nextStep }: RegisterFormProps) {
  const t = useTranslations("Register");
  const form = useFormContext<RegisterSchema>();
  const height = form.watch("height");

  const handleNext = async () => {
    const isValid = await form.trigger(["height"]);

    if (isValid) {
      nextStep?.();
    }
  };

  return (
    <div className="text-center space-y-6">
      <StepsHeader
        header={t("what-is-your-height")}
        paragraph={t("step-header-paragraph")}
      />

      <Controller
        name="height"
        control={form.control}
        render={({ field }) => (
          <NumberPicker
            min={120}
            max={220}
            defaultValue={field.value}
            unit="CM"
            onChange={field.onChange}
            name={field.name}
          />
        )}
      />

      <Button disabled={!height} onClick={handleNext} className="w-2/3">
        {t("next")}
      </Button>
    </div>
  );
}
