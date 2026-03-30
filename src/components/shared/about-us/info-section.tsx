type InfoSectionProps = {
  title: string;
  description: string;
};

export default function InfoSection({ title, description }: InfoSectionProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <img src="/assets/icons/about-arrow.png" alt="arrow" loading="lazy" />
        <h6>{title}</h6>
      </div>
      <p className="max-w-72">{description}</p>
    </div>
  );
}
