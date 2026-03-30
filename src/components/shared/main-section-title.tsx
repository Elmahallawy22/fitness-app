import { Dumbbell } from "lucide-react";

type SectionTitleProps = {
  assetSrc: string;
  width: number;
  title: string;
};

export default function MainSectionTitle({ assetSrc, width, title }: SectionTitleProps) {
  return (
    <div>
      <div className="relative mb-4">
        <img src={assetSrc} alt="About us" width={width} height={77} loading="lazy" className=" hidden lg:block" />
        <p className="text-primary text-sm font-semibold flex items-center gap-2 absolute -bottom-3">
          <Dumbbell className="rotate-45 size-6" /> {title}
        </p>
      </div>
    </div>
  );
}
