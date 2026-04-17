import SectionTitle from "@/components/shared/section-title";
import { useTranslations } from "use-intl";

export default function WhyUsSection() {
  // Translation
  const t = useTranslations("WhyUs");

  const images = [
    "src/assets/images/hero2.png",
    "src/assets/images/hero1.jpg",
    "src/assets/images/hero3.jpg",
    "src/assets/images/hero4.png",
  ];

  const whyUsData = [
    {
      id: "01",
      title: t("items.personalized.title"),
      description: t("items.personalized.description"),
    },
    {
      id: "02",
      title: t("items.results.title"),
      description: t("items.results.description"),
    },
    {
      id: "03",
      title: t("items.support.title"),
      description: t("items.support.description"),
    },
  ];

  return (
    <section className="w-full py-12 px-6 md:px-16">
      <div className="flex flex-col lg:flex-row gap-12 w-full">
        {/* Left Content */}
        <div className="lg:w-1/2 flex flex-col gap-8 text-white">
          <SectionTitle title={t("title")} background={t("title")} />

          <h3 className="text-4xl md:text-5xl font-bold font-baloo">
            {t("description.before")}
            <span className="text-primary">{t("description.highlight")}</span>
            {t("description.after")}
          </h3>

          <p className="text-gray-300 text-lg">{t("paragraph")}</p>

          <ul className="flex flex-col gap-6 mt-6">
            {whyUsData.map((item) => (
              <li key={item.id} className="flex gap-4 items-start">
                <div className="shrink-0 w-12 h-12 rounded-full bg-primary flex items-center justify-center my-auto font-bold text-white">
                  {item.id}
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-gray-300 mt-1">{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Images Grid */}
        <div className="lg:w-1/2 grid grid-cols-2 gap-4">
          {images.map((src, idx) => (
            <div key={idx} className="overflow-hidden rounded-xl">
              <img
                src={src}
                alt={`Fitness ${idx + 1}`}
                className="w-full h-full sm:h-80 object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
