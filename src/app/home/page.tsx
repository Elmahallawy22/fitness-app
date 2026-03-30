import DesignSystemComponents from "../../components/ui/design-sustem";
import { useLocaleNavigation } from "../../lib/hooks/use-navigation";
import { Link } from "react-router-dom";
import AboutUs from "@/components/shared/about-us";

export default function Home() {
  const { currentLocale } = useLocaleNavigation();
  return (
    <div>
      <AboutUs />
      <Link to={`/${currentLocale}/about`}>About</Link>
      <DesignSystemComponents />
    </div>
  );
}
