// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
// } from "@/components/ui/carousel";
// import MuscleCard from "./muscle-card";

import MuscleCard from "./muscle-card";

// type Muscle = {
//   _id: string;
//   name: string;
//   image: string;
// };

// type Props = {
//   muscles: Muscle[];
// };

// export default function MuscleCarousel({ muscles }: Props) {
//   return (
//     <Carousel className="w-5/6 mx-auto">
//       <CarouselContent>
//         {muscles.map((muscle) => (
//           <CarouselItem key={muscle._id} className="md:basis-1/2 lg:basis-1/3 ">
//             <MuscleCard name={muscle.name} image={muscle.image} />
//           </CarouselItem>
//         ))}
//       </CarouselContent>
//     </Carousel>
//   );
// }

type Props = {
  muscles: {
    _id: string;
    name: string;
    image: string;
  }[];
};

export default function MuscleCarousel({ muscles }: Props) {
  return (
    <div
      className="
        flex flex-col gap-4 overflow-y-auto hide-scrollbar
          w-5/6 mx-auto scroll-smooth
        lg:flex-row lg:overflow-x-auto lg:overflow-y-hidden 
        lg:max-h-none lg:gap-6
      "
    >
      {muscles.map((muscle) => (
        <div
          key={muscle._id}
          className="
            w-full
            md:basis-1/2 lg:basis-1/3
            "
          // lg:min-w-[300px] lg:max-w-[300px]
        >
          <MuscleCard name={muscle.name} image={muscle.image} />
        </div>
      ))}
    </div>
  );
}
