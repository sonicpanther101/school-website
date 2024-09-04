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
  }, [Autoplay({ delay: 10000 })])

  return (
    <>
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

      { /*
        temp
        snow condition
        weather
        reviews
        card for each chalet, linking to chalets page
        about
      */ }

      <div className="flex flex-col md:flex-row m-xxl">
        <Card className="flex-1 basis-[30%] shadow-md bg-secondary">
          <CardHeader>
            <h2 className="m-lg mb-sm font-bold text-xl">Temperature</h2>
          </CardHeader>
          <CardBody className="flex flex-col md:flex-row">
            <Image
              className="flex-1"
              alt="Thermomitor"
              src="https://imgs.search.brave.com/ESCc0nA1OEE-WekIZgR9v-z8zXmylW3D63S4xa_cH-I/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvOTk1/NzkxNDE4L3ZlY3Rv/ci90aGVybW9tZXRl/ci12ZWN0b3ItZmxh/dC1kZXNpZ24uanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPVRL/T2JETnRKYlhjbmxD/UWEyMnNDMXlvNEpl/V0xNNDByRlRoLTNh/aHpEY2M9"
            />
            <h1 className="font-black flex-1">X℃</h1>
          </CardBody>
        </Card>
        <div className="flex-1 basis-[5%]"></div>
        <Card className="flex-1 basis-[30%] shadow-md bg-secondary">
          <CardHeader>
            <h2 className="m-lg mb-sm font-bold text-xl">Temperature</h2>
          </CardHeader>
          <CardBody className="flex flex-col md:flex-row">
            <Image
              className="flex-1 basis-[50%]"
              alt="Thermomitor"
              src="https://imgs.search.brave.com/ESCc0nA1OEE-WekIZgR9v-z8zXmylW3D63S4xa_cH-I/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvOTk1/NzkxNDE4L3ZlY3Rv/ci90aGVybW9tZXRl/ci12ZWN0b3ItZmxh/dC1kZXNpZ24uanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPVRL/T2JETnRKYlhjbmxD/UWEyMnNDMXlvNEpl/V0xNNDByRlRoLTNh/aHpEY2M9"
            />
            <h1 className="font-black flex-1 basis-[50%]">X℃</h1>
          </CardBody>
        </Card>
        <div className="flex-1 basis-[5%]"></div>
        <Card className="flex-1 basis-[30%] shadow-md bg-secondary">
          <CardHeader>
            <h2 className="m-lg mb-sm font-bold text-xl">Temperature</h2>
          </CardHeader>
          <CardBody className="flex flex-col md:flex-row">
            <Image
              className="flex-1"
              alt="Thermomitor"
              src="https://imgs.search.brave.com/ESCc0nA1OEE-WekIZgR9v-z8zXmylW3D63S4xa_cH-I/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvOTk1/NzkxNDE4L3ZlY3Rv/ci90aGVybW9tZXRl/ci12ZWN0b3ItZmxh/dC1kZXNpZ24uanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPVRL/T2JETnRKYlhjbmxD/UWEyMnNDMXlvNEpl/V0xNNDByRlRoLTNh/aHpEY2M9"
            />
            <h1 className="font-black flex-1">X℃</h1>
          </CardBody>
        </Card>
      </div>
      <Footer/>
    </>
  );
}
