import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import MuscleCard from "./muscle-card";

type Props = {
  muscles: {
    _id: string;
    name: string;
    image: string;
  }[];
};

export default function MuscleCarousel({ muscles }: Props) {
  return (
    <Carousel className="w-5/6 mx-auto">
      <CarouselContent>
        {muscles.map((muscle) => (
          <CarouselItem key={muscle._id} className="md:basis-1/2 lg:basis-1/3">
            <MuscleCard name={muscle.name} image={muscle.image} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
