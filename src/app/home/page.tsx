import HealthySection from "./healthy";
import HeroBanner from "./hero-banner/hero-banner";
import WhyUsSection from "./why-us";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroBanner />
      <HealthySection />
      <WhyUsSection />
    </div>
  );
}
