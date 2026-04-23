import { useTranslations } from "use-intl";
import { getLevels, type LevelType } from "../constants/levels";

export function useLevels() {
  const t = useTranslations("Register");
  const LEVELS = getLevels(t);

  const getLevelLabel = (value?: LevelType | string) => {
    return LEVELS.find((l) => l.value === value)?.label ?? value;
  };

  return { LEVELS, getLevelLabel };
}
