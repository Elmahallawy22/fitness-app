type SectionTitleProps = {
  title: string;
  background: string;
};

export default function SectionTitle({ title, background }: SectionTitleProps) {
  return (
    <div className="relative flex items-center gap-3">
      {/* Background Text */}
      <h2 className="absolute text-6xl font-bold text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.1)]  overflow-hidden mask-[linear-gradient(to_top,transparent,black_90%)] mask-size-[100%_100%]select-none pointer-events-none">
        {background}
      </h2>

      {/* Title */}
      <div className="relative top-3 flex items-center gap-2">
        <img
          src="src/assets/images/Dumbbell.png"
          alt="icon"
          width={30}
          height={30}
        />
        <span className="text-primary font-semibold text-lg">{title}</span>
      </div>
    </div>
  );
}
