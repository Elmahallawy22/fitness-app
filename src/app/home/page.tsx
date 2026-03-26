// import { useTranslations } from "use-intl";
// import DesignSystemComponents from "../../components/ui/design-sustem";
// import { useLocaleNavigation } from "../../lib/hooks/use-navigation";
// import { Link } from "react-router-dom";
import Home from "./Home";

export default function HomePage() {
  // const t = useTranslations("Index");
  // const { currentLocale } = useLocaleNavigation();
  return (
    <div>
      <Home />
      {/* <h1 className="text-3xl font-bold"> {t("title")}</h1>
      <Link to={`/${currentLocale}/about`}>About</Link>
      <DesignSystemComponents /> */}
    </div>
  );
}
