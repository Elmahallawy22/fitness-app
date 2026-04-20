<<<<<<< HEAD:src/Components/ui/carousel.tsx
import * as React from "react"
import useEmblaCarousel, {
  type UseEmblaCarouselType,
} from "embla-carousel-react"

import { cn } from "@/lib/utils"
import { Button } from "@/Components/ui/button"
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react"

type CarouselApi = UseEmblaCarouselType[1]
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>
type CarouselOptions = UseCarouselParameters[0]
type CarouselPlugin = UseCarouselParameters[1]

type CarouselProps = {
  opts?: CarouselOptions
  plugins?: CarouselPlugin
  orientation?: "horizontal" | "vertical"
  setApi?: (api: CarouselApi) => void
}

type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0]
  api: ReturnType<typeof useEmblaCarousel>[1]
  scrollPrev: () => void
  scrollNext: () => void
  canScrollPrev: boolean
  canScrollNext: boolean
} & CarouselProps

const CarouselContext = React.createContext<CarouselContextProps | null>(null)

function useCarousel() {
  const context = React.useContext(CarouselContext)

  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />")
  }

  return context
=======
import * as React from "react";
import useEmblaCarousel, {
  type UseEmblaCarouselType,
} from "embla-carousel-react";

import { Button } from "@/components/ui/button";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { cn } from "@/lib/utils/tailwind-merge";

type CarouselApi = UseEmblaCarouselType[1];
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
type CarouselOptions = UseCarouselParameters[0];
type CarouselPlugin = UseCarouselParameters[1];

type CarouselProps = {
  opts?: CarouselOptions;
  plugins?: CarouselPlugin;
  orientation?: "horizontal" | "vertical";
  setApi?: (api: CarouselApi) => void;
};

type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0];
  api: ReturnType<typeof useEmblaCarousel>[1];
  scrollPrev: () => void;
  scrollNext: () => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;
} & CarouselProps;

const CarouselContext = React.createContext<CarouselContextProps | null>(null);

function useCarousel() {
  const context = React.useContext(CarouselContext);

  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }

  return context;
>>>>>>> e18c7c465dfcbb81da5cc1932dce819f193aedfd:src/components/ui/carousel.tsx
}

function Carousel({
  orientation = "horizontal",
  opts,
  setApi,
  plugins,
  className,
  children,
  ...props
}: React.ComponentProps<"div"> & CarouselProps) {
  const [carouselRef, api] = useEmblaCarousel(
    {
      ...opts,
      axis: orientation === "horizontal" ? "x" : "y",
    },
<<<<<<< HEAD:src/Components/ui/carousel.tsx
    plugins
  )
  const [canScrollPrev, setCanScrollPrev] = React.useState(false)
  const [canScrollNext, setCanScrollNext] = React.useState(false)

  const onSelect = React.useCallback((api: CarouselApi) => {
    if (!api) return
    setCanScrollPrev(api.canScrollPrev())
    setCanScrollNext(api.canScrollNext())
  }, [])

  const scrollPrev = React.useCallback(() => {
    api?.scrollPrev()
  }, [api])

  const scrollNext = React.useCallback(() => {
    api?.scrollNext()
  }, [api])
=======
    plugins,
  );
  const [canScrollPrev, setCanScrollPrev] = React.useState(false);
  const [canScrollNext, setCanScrollNext] = React.useState(false);

  const onSelect = React.useCallback((api: CarouselApi) => {
    if (!api) return;
    setCanScrollPrev(api.canScrollPrev());
    setCanScrollNext(api.canScrollNext());
  }, []);

  const scrollPrev = React.useCallback(() => {
    api?.scrollPrev();
  }, [api]);

  const scrollNext = React.useCallback(() => {
    api?.scrollNext();
  }, [api]);
>>>>>>> e18c7c465dfcbb81da5cc1932dce819f193aedfd:src/components/ui/carousel.tsx

  const handleKeyDown = React.useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key === "ArrowLeft") {
<<<<<<< HEAD:src/Components/ui/carousel.tsx
        event.preventDefault()
        scrollPrev()
      } else if (event.key === "ArrowRight") {
        event.preventDefault()
        scrollNext()
      }
    },
    [scrollPrev, scrollNext]
  )

  React.useEffect(() => {
    if (!api || !setApi) return
    setApi(api)
  }, [api, setApi])

  React.useEffect(() => {
    if (!api) return
    onSelect(api)
    api.on("reInit", onSelect)
    api.on("select", onSelect)

    return () => {
      api?.off("select", onSelect)
    }
  }, [api, onSelect])
=======
        event.preventDefault();
        scrollPrev();
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        scrollNext();
      }
    },
    [scrollPrev, scrollNext],
  );

  React.useEffect(() => {
    if (!api || !setApi) return;
    setApi(api);
  }, [api, setApi]);

  React.useEffect(() => {
    if (!api) return;
    onSelect(api);
    api.on("reInit", onSelect);
    api.on("select", onSelect);

    return () => {
      api?.off("select", onSelect);
    };
  }, [api, onSelect]);
>>>>>>> e18c7c465dfcbb81da5cc1932dce819f193aedfd:src/components/ui/carousel.tsx

  return (
    <CarouselContext.Provider
      value={{
        carouselRef,
        api: api,
        opts,
        orientation:
          orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
        scrollPrev,
        scrollNext,
        canScrollPrev,
        canScrollNext,
<<<<<<< HEAD:src/Components/ui/carousel.tsx
      }}
    >
=======
      }}>
>>>>>>> e18c7c465dfcbb81da5cc1932dce819f193aedfd:src/components/ui/carousel.tsx
      <div
        onKeyDownCapture={handleKeyDown}
        className={cn("relative", className)}
        role="region"
        aria-roledescription="carousel"
        data-slot="carousel"
<<<<<<< HEAD:src/Components/ui/carousel.tsx
        {...props}
      >
        {children}
      </div>
    </CarouselContext.Provider>
  )
}

function CarouselContent({ className, ...props }: React.ComponentProps<"div">) {
  const { carouselRef, orientation } = useCarousel()
=======
        {...props}>
        {children}
      </div>
    </CarouselContext.Provider>
  );
}

function CarouselContent({ className, ...props }: React.ComponentProps<"div">) {
  const { carouselRef, orientation } = useCarousel();
>>>>>>> e18c7c465dfcbb81da5cc1932dce819f193aedfd:src/components/ui/carousel.tsx

  return (
    <div
      ref={carouselRef}
      className="overflow-hidden"
<<<<<<< HEAD:src/Components/ui/carousel.tsx
      data-slot="carousel-content"
    >
=======
      data-slot="carousel-content">
>>>>>>> e18c7c465dfcbb81da5cc1932dce819f193aedfd:src/components/ui/carousel.tsx
      <div
        className={cn(
          "flex",
          orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
<<<<<<< HEAD:src/Components/ui/carousel.tsx
          className
=======
          className,
>>>>>>> e18c7c465dfcbb81da5cc1932dce819f193aedfd:src/components/ui/carousel.tsx
        )}
        {...props}
      />
    </div>
<<<<<<< HEAD:src/Components/ui/carousel.tsx
  )
}

function CarouselItem({ className, ...props }: React.ComponentProps<"div">) {
  const { orientation } = useCarousel()
=======
  );
}

function CarouselItem({ className, ...props }: React.ComponentProps<"div">) {
  const { orientation } = useCarousel();
>>>>>>> e18c7c465dfcbb81da5cc1932dce819f193aedfd:src/components/ui/carousel.tsx

  return (
    <div
      role="group"
      aria-roledescription="slide"
      data-slot="carousel-item"
      className={cn(
        "min-w-0 shrink-0 grow-0 basis-full",
        orientation === "horizontal" ? "pl-4" : "pt-4",
<<<<<<< HEAD:src/Components/ui/carousel.tsx
        className
      )}
      {...props}
    />
  )
=======
        className,
      )}
      {...props}
    />
  );
>>>>>>> e18c7c465dfcbb81da5cc1932dce819f193aedfd:src/components/ui/carousel.tsx
}

function CarouselPrevious({
  className,
  variant = "outline",
  size = "icon-sm",
  ...props
}: React.ComponentProps<typeof Button>) {
<<<<<<< HEAD:src/Components/ui/carousel.tsx
  const { orientation, scrollPrev, canScrollPrev } = useCarousel()
=======
  const { orientation, scrollPrev, canScrollPrev } = useCarousel();
>>>>>>> e18c7c465dfcbb81da5cc1932dce819f193aedfd:src/components/ui/carousel.tsx

  return (
    <Button
      data-slot="carousel-previous"
      variant={variant}
      size={size}
      className={cn(
        "absolute touch-manipulation rounded-full",
        orientation === "horizontal"
          ? "top-1/2 -left-12 -translate-y-1/2"
          : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
<<<<<<< HEAD:src/Components/ui/carousel.tsx
        className
      )}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      {...props}
    >
      <ChevronLeftIcon />
      <span className="sr-only">Previous slide</span>
    </Button>
  )
=======
        className,
      )}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      {...props}>
      <ChevronLeftIcon />
      <span className="sr-only">Previous slide</span>
    </Button>
  );
>>>>>>> e18c7c465dfcbb81da5cc1932dce819f193aedfd:src/components/ui/carousel.tsx
}

function CarouselNext({
  className,
  variant = "outline",
  size = "icon-sm",
  ...props
}: React.ComponentProps<typeof Button>) {
<<<<<<< HEAD:src/Components/ui/carousel.tsx
  const { orientation, scrollNext, canScrollNext } = useCarousel()
=======
  const { orientation, scrollNext, canScrollNext } = useCarousel();
>>>>>>> e18c7c465dfcbb81da5cc1932dce819f193aedfd:src/components/ui/carousel.tsx

  return (
    <Button
      data-slot="carousel-next"
      variant={variant}
      size={size}
      className={cn(
        "absolute touch-manipulation rounded-full",
        orientation === "horizontal"
          ? "top-1/2 -right-12 -translate-y-1/2"
          : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
<<<<<<< HEAD:src/Components/ui/carousel.tsx
        className
      )}
      disabled={!canScrollNext}
      onClick={scrollNext}
      {...props}
    >
      <ChevronRightIcon />
      <span className="sr-only">Next slide</span>
    </Button>
  )
=======
        className,
      )}
      disabled={!canScrollNext}
      onClick={scrollNext}
      {...props}>
      <ChevronRightIcon />
      <span className="sr-only">Next slide</span>
    </Button>
  );
>>>>>>> e18c7c465dfcbb81da5cc1932dce819f193aedfd:src/components/ui/carousel.tsx
}

export {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  useCarousel,
<<<<<<< HEAD:src/Components/ui/carousel.tsx
}
=======
};
>>>>>>> e18c7c465dfcbb81da5cc1932dce819f193aedfd:src/components/ui/carousel.tsx
