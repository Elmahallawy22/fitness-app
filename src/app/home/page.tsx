import HealthySection from "./healthy";
import WhyUsSection from "./why-us";

export default function Home() {
  return (
    <div className="flex flex-col gap-5">
      <HealthySection />
      <WhyUsSection />
    </div>
  );
}
