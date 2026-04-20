import { useState, useMemo } from "react";
import MuscleTabs from "./muscle-tabs";
import MuscleCarousel from "./masule-carousel";

import { useTranslations } from "use-intl";
import { TabsSkeleton } from "./skeletons/taabs-skeletons";
import { CarouselSkeleton } from "./skeletons/carousel-skeleton";
import SectionTitle from "@/components/shared/section-title";
import { useMuscleGroups } from "@/lib/hooks/use-muscle-groups";
import { useMusclesByGroup } from "@/lib/hooks/use-muscles-by-group";

export default function WorkoutSection() {
  const t = useTranslations("home.workouts");

  const [selectedGroup, setSelectedGroup] = useState<string>("");

  const {
    data: groupsData,
    isLoading: groupsLoading,
    isError: groupsError,
  } = useMuscleGroups();

  const groups = useMemo(() => {
    return groupsData?.musclesGroup || [];
  }, [groupsData]);

  const effectiveSelectedGroup = useMemo(() => {
    return selectedGroup || groups[0]?._id || "";
  }, [selectedGroup, groups]);

  const {
    data: musclesData,
    isLoading: musclesLoading,
    isError: musclesError,
  } = useMusclesByGroup(effectiveSelectedGroup);

  return (
    <section className="relative space-y-8 w-full px-6 pb-10">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('../../../../../assets/images/workouts.jpg')",
        }}
      />

      {/* Overlay */}
      <div className="absolute  h-3/5 left-0 right-0 top-1/12  bg-white/60 dark:bg-black/30  backdrop-blur-xl" />
      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <h3 className="flex items-center justify-center mt-6">
          <SectionTitle
            background={t("title-text")}
            title={t("title-background")}
          />
        </h3>

        <p className="text-xl md:text-[2.5rem] mb-2 text-start md:text-center space-y-2 mt-10 font-bold  text-black dark:text-white leading-tight">
          {t.rich("title", {
            br: () => <br />,
            highlight: (chunks) => (
              <span className="text-primary">{chunks}</span>
            ),
          })}
        </p>
        {/* Error State */}
        {groupsError && (
          <p className="text-center text-red-500">
            Failed to load muscle groups
          </p>
        )}
        {/* Tabs */}
        {groupsLoading ? (
          <TabsSkeleton />
        ) : groupsError ? (
          <p className="text-center text-red-500">
            Failed to load muscle groups
          </p>
        ) : (
          <MuscleTabs
            groups={groups}
            value={effectiveSelectedGroup}
            onChange={setSelectedGroup}
          />
        )}
        {/* Muscles Section */}
        <div className="min-h-62.5 flex items-center justify-center my-8">
          {musclesLoading ? (
            <CarouselSkeleton />
          ) : musclesError ? (
            <p className="text-red-500">Failed to load exercises</p>
          ) : (
            <MuscleCarousel muscles={musclesData?.muscles || []} />
          )}
        </div>
      </div>
    </section>
  );
}
