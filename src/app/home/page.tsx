import HealthySection from "./healthy";
import HeroBanner from "./hero-banner";
import WhyUsSection from "./why-us";
import WorkoutsSection from "./components/workouts/workouts-section";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroBanner />
      <WorkoutsSection />
      <HealthySection />
      <WhyUsSection />
    </div>
  );
}
