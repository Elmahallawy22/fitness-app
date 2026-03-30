import { useTranslations } from "use-intl";
import MainSectionTitle from "../main-section-title";
import SubSectionTitle from "../sub-section-title";
import ImagesShow from "./images-show";
import InfoSection from "./info-section";

export default function AboutUs() {
  // translations
  const t = useTranslations("about");

  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 p-4 lg:p-0">
      <div className="order-2 lg:order-1">
        <ImagesShow />
      </div>
      <div className="order-1 lg:order-2 space-y-9 pt-4 ">
        {/* main title */}
        <MainSectionTitle assetSrc="/assets/titles/about_us.png" width={332} title={t("title")} />
        {/* sub title */}
        <SubSectionTitle assetSrc="/assets/titles/about_us.png" subTitle={t("sub-title")} />
        {/* description */}
        <p className="text-base lg:text-lg w-full overflow-hidden">{t("description")} </p>
        {/* info sections */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
          <InfoSection title={t("info-one-title")} description={t("info-one-description")} />
          <InfoSection title={t("info-two-title")} description={t("info-two-description")} />
        </div>
        <div className="w-full h-px bg-gray-600" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <InfoSection title={t("info-three-title")} description={t("info-three-description")} />
          <InfoSection title={t("info-four-title")} description={t("info-four-description")} />
        </div>
        {/* #TO DO : Waiting for implementation */}
        <button className="h-12 px-6 bg-primary w-auto">{t("get-started")}</button>
      </div>
    </section>
  );
}
