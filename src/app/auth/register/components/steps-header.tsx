type StepHeaderProps = {
  header: string;
  paragraph: string;
};

export default function StepsHeader({ header, paragraph }: StepHeaderProps) {
  return (
    <>
      <h3 className="uppercase text-4xl font-extrabold text-black dark:text-white">
        {header}
      </h3>
      <p className="text-lg font-light -mt-7 text-black/70 dark:text-white/70">
        {paragraph}
      </p>
    </>
  );
}
