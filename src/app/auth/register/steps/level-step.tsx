import StepsHeader from "../components/steps-header";
import { useFormContext } from "react-hook-form";
import { type RegisterSchema } from "@/lib/schemas/auth.schema";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldContent,
  FieldLabel,
  FieldTitle,
} from "@/components/ui/field";
import { Spinner } from "@/components/ui/spinner";
import { useTranslations } from "use-intl";

export default function ActivityLevelStep({
  isPending,
}: {
  isPending: boolean;
}) {
  const t = useTranslations("Register");
  const LEVELS = [
    { label: t("rookie"), value: "level1" },
    { label: t("beginner"), value: "level2" },
    { label: t("intermediate"), value: "level3" },
    { label: t("advanced"), value: "level4" },
    { label: t("true-beast"), value: "level5" },
  ] as const;
  const form = useFormContext<RegisterSchema>();
  const activityLevel = form.watch("activityLevel") ?? "";

  return (
    <div className="text-center space-y-6">
      <StepsHeader header={t("level")} paragraph={t("step-header-paragraph")} />

      <RadioGroup
        value={activityLevel}
        onValueChange={(value) =>
          form.setValue(
            "activityLevel",
            value as RegisterSchema["activityLevel"],
          )
        }
        className="flex flex-col gap-4 mt-6 w-full max-w-md mx-auto"
      >
        {LEVELS.map((level) => {
          return (
            <FieldLabel htmlFor={level.value} key={level.value}>
              <Field
                orientation="horizontal"
                className="
                rounded-2xl px-2 py-1 transition-all
                peer-data-[state=checked]:border-orange-500
                peer-data-[state=checked]:text-primary"
              >
                <FieldContent>
                  <FieldTitle>{level.label}</FieldTitle>
                </FieldContent>

                <RadioGroupItem
                  value={level.value}
                  id={level.value}
                  className="peer"
                />
              </Field>
            </FieldLabel>
          );
        })}
      </RadioGroup>

      <Button type="submit" disabled={!activityLevel} className="w-2/3 h-fit">
        {isPending ? <Spinner /> : t("finish")}
      </Button>
    </div>
  );
}
