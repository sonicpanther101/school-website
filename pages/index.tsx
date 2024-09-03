import { Head } from "@/layouts/head";
import { Footer } from "@/layouts/footer";
import { useRef } from "react";
import { Image } from "@nextui-org/image";

import Autoplay from "embla-carousel-autoplay"
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";

import { Card as Card2, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


if (typeof window !== 'undefined') {
  const observer = new MutationObserver(() => {
    if (document.documentElement.getAttribute('data-theme') === "dark") {
      document.documentElement.classList.add("dark");
    } else if (document.documentElement.getAttribute('data-theme') === "light") {
      document.documentElement.classList.remove("dark");
    }
  });

  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['data-theme'],
  });
}

export default function IndexPage() {

  const plugin = useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  return (
    <div>
      <Head />
      <div className="bg-black opacity-75">
        <Image
          width="100%"
          className="w-full h-full object-cover object-center rounded-none position-absolut"
          alt="Maunga skiing"
          src="https://imgs.search.brave.com/tDOmKAC5oVW5aY3l7Vovuom5EARlVQ94U_8d1s09gZM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTUw/NjM4NjcxL3Bob3Rv/L3NraWVyLXNraWlu/Zy1vbi1zbm93eS1z/bG9wZS5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9RnpNXzJG/dGRsNUItQXl5Qkx2/OXRVM1lDaFhPVDZq/dzRnYl9Pb2JwbUhB/dz0"
        />
      </div>
      
      <Card>
        
      </Card>
      
      <Carousel
        plugins={[plugin.current]}
        className="w-full max-w-xs"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="p-1 w-screen h-xl">
                <Card2>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-4xl font-semibold">{index + 1}</span>
                  </CardContent>
                </Card2>
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
