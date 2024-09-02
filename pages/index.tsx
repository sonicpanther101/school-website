import { Head } from "@/layouts/head";
import { Footer } from "@/layouts/footer";
import { useRef } from "react";

import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function IndexPage() {

  const plugin = useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  return (
    <div>
      <Head />
      
      <Carousel
        plugins={[plugin.current]}
        className="w-full max-w-xs"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="p-1 w-screen">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-4xl font-semibold">{index + 1}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
          <CarouselItem>
            <div className="p-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ex aliquid porro ducimus unde dolor tempora tempore exercitationem magnam accusamus quas non optio, totam ut facilis? Corrupti praesentium atque nemo?
            </div>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
      <Footer/>
    </div>
  );
}
