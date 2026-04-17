"use client";

import Card from "@/components/shared/card";
import SectionTitle from "@/components/shared/section-title";
import { useTranslations } from "use-intl";

export default function HealthySection() {
  // Translation
  const t = useTranslations("HealthySection");

  // Constants
  const cards = [
    {
      image: "/src/assets/images/healthy1.jpg",
      title: t("cards.breakfast.title"),
      buttonText: t("cards.breakfast.buttonText"),
      index: 1,
    },
    {
      image: "/src/assets/images/healthy2.jpg",
      title: t("cards.lunch.title"),
      buttonText: t("cards.lunch.buttonText"),
      index: 2,
    },
    {
      image: "/src/assets/images/healthy3.jpg",
      title: t("cards.dinner.title"),
      buttonText: t("cards.dinner.buttonText"),
      index: 3,
    },
  ];

  return (
    <section className="relative bg-[url('/images/healthy-background.jpg')] bg-cover pt-5 pb-10 px-6 md:px-16">
      {/* Section Header  */}
      <header className="flex flex-col justify-center items-center gap-4 py-3 mb-3">
        <SectionTitle title={t("title")} background={t("background")} />
        <h3 className="text-2xl relative md:text-4xl text-white lg:text-5xl font-bold font-baloo w-full md:w-4/5 lg:w-8/12 xl:w-[55%] text-center capitalize">
          {t("description.before")}
          <span className="text-primary">{t("description.highlight")}</span>
          {t("description.after")}
        </h3>
      </header>
      {/* // Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-8 w-full ">
        {cards.map((card) => (
          <Card
            key={card.index}
            image={card.image}
            title={card.title}
            buttonText={card.buttonText}
          />
        ))}
      </div>
    </section>
  );
}
