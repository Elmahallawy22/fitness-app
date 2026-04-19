import { ArrowUpRight } from "lucide-react";

type Props = {
  name: string;
  image: string;
};

export default function MuscleCard({ name, image }: Props) {
  return (
    <div
      className="bg-white/30 dark:bg-black/30 backdrop-blur-lg rounded-3xl shadow-sm
      w-65 sm:w-75 lg:w-100
      h-80 sm:h-90 lg:h-96"
    >
      <img
        src={image}
        alt={name}
        className="w-full h-3/4 object-cover rounded-3xl"
      />

      <p className="mt-2 ps-4 text-xl font-bold text-black dark:text-white">
        {name}
      </p>

      <div>
        <span className="text-primary ps-4 mt-2 block">
          Explore{" "}
          <ArrowUpRight
            className="inline bg-primary text-black rounded-full p-1"
            size={20}
          />
        </span>
      </div>
    </div>
  );
}
