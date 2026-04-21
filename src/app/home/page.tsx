import HealthySection from "./healthy-section";
import HeroBanner from "./hero-banner-section";
import WhyUsSection from "./why-us-section";
import WorkoutsSection from "./workouts-section";
import Footer from "@/components/layout/footer";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroBanner />
      <WorkoutsSection />
      <WhyUsSection />
      <HealthySection />
      <Footer />
    </div>
  );
}
