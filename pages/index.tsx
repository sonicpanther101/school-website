import { Head } from "@/layouts/head";
import { Footer } from "@/layouts/footer";
import { useRef } from "react";
import { Image } from "@nextui-org/image";
import { Divider } from "@nextui-org/divider";

import Autoplay from "embla-carousel-autoplay"
import useEmblaCarousel from 'embla-carousel-react'
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";

import { Card as Card2, CardContent } from "@/components/ui/card"


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

  const [emblaRef] = useEmblaCarousel({
    loop: false, duration: 50
  }, [Autoplay({ delay: 7500 })])

  return (
    <div>
      <Head />
      <div className="absolute w-full h-screen z-10 bg-background opacity-50 flex flex-col justify-center items-center">
      </div>
      <div className="absolute w-full h-screen z-10 flex flex-col justify-center items-center">
        <h1 className="text-5xl md:text-7xl font-black text-center select-none">Maunga Club</h1>
        <h2 className="mt-4 text-lg md:text-2xl text-center select-none">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae in laboriosam atque culpa quibusdam. Dolore alias perferendis dolor, molestias quaerat accusamus quae. Minima esse ea excepturi reiciendis, beatae eligendi neque.</h2>
      </div>

      

      <div className="w-full h-screen overflow-hidden" ref={emblaRef}>
        <div className="flex">
          <div className="flex-[0_0_100%] min-w-0 h-screen bg-cover bg-center" style={{ backgroundImage: `url('https://imgs.search.brave.com/tDOmKAC5oVW5aY3l7Vovuom5EARlVQ94U_8d1s09gZM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTUw/NjM4NjcxL3Bob3Rv/L3NraWVyLXNraWlu/Zy1vbi1zbm93eS1z/bG9wZS5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9RnpNXzJG/dGRsNUItQXl5Qkx2/OXRVM1lDaFhPVDZq/dzRnYl9Pb2JwbUhB/dz0')` }}></div>
          <div className="flex-[0_0_100%] min-w-0 h-screen bg-cover bg-center" style={{ backgroundImage: `url('https://imgs.search.brave.com/tDOmKAC5oVW5aY3l7Vovuom5EARlVQ94U_8d1s09gZM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTUw/NjM4NjcxL3Bob3Rv/L3NraWVyLXNraWlu/Zy1vbi1zbm93eS1z/bG9wZS5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9RnpNXzJG/dGRsNUItQXl5Qkx2/OXRVM1lDaFhPVDZq/dzRnYl9Pb2JwbUhB/dz0')` }}></div>
          <div className="flex-[0_0_100%] min-w-0 h-screen bg-cover bg-center" style={{ backgroundImage: `url('https://imgs.search.brave.com/tDOmKAC5oVW5aY3l7Vovuom5EARlVQ94U_8d1s09gZM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTUw/NjM4NjcxL3Bob3Rv/L3NraWVyLXNraWlu/Zy1vbi1zbm93eS1z/bG9wZS5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9RnpNXzJG/dGRsNUItQXl5Qkx2/OXRVM1lDaFhPVDZq/dzRnYl9Pb2JwbUhB/dz0')` }}></div>
          <div className="flex-[0_0_100%] min-w-0 h-screen bg-cover bg-center" style={{ backgroundImage: `url('https://imgs.search.brave.com/tDOmKAC5oVW5aY3l7Vovuom5EARlVQ94U_8d1s09gZM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTUw/NjM4NjcxL3Bob3Rv/L3NraWVyLXNraWlu/Zy1vbi1zbm93eS1z/bG9wZS5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9RnpNXzJG/dGRsNUItQXl5Qkx2/OXRVM1lDaFhPVDZq/dzRnYl9Pb2JwbUhB/dz0')` }}></div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
