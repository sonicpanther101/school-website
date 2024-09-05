import { Head } from "@/layouts/head";
import { Footer } from "@/layouts/footer";

import { useRef } from "react";

import { Image } from "@nextui-org/image";
import { Divider } from "@nextui-org/divider";
import { Avatar } from "@nextui-org/avatar";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";

import AutoScroll from "embla-carousel-auto-scroll";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from 'embla-carousel-react';


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
    loop: true, duration: 50
  }, [Autoplay({ delay: 10000 })])

  const [emblaRef2] = useEmblaCarousel({
    loop: true
  }, [AutoScroll()])

  return (
    <div className="overflow-hidden">
      <Head />

      <div className="absolute w-full h-screen z-10 bg-background opacity-50 flex flex-col justify-center items-center">
      </div>
      <div className="absolute w-full h-screen z-10 flex flex-col justify-center items-center">
        <h1 className="text-5xl md:text-7xl font-black text-center select-none">Maunga Club</h1>
        <h2 className="mt-4 text-lg md:text-2xl text-center select-none">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae in laboriosam atque culpa quibusdam. Dolore alias perferendis dolor, molestias quaerat accusamus quae. Minima esse ea excepturi reiciendis, beatae eligendi neque.</h2>
      </div>

      <div className="w-full h-screen overflow-hidden" ref={emblaRef}>
        <div className="flex">
          <div className="flex-[0_0_100%] min-w-0 h-screen bg-cover bg-center" style={{ backgroundImage: `url('https://github.com/sonicpanther101/school-website/blob/main/images/Maunga%20Club%20images/maunga_club_cabin.jpg?raw=true')` }}></div>
          <div className="flex-[0_0_100%] min-w-0 h-screen bg-cover bg-center" style={{ backgroundImage: `url('https://github.com/sonicpanther101/school-website/blob/main/images/Maunga%20Club%20images/mountain_view_1.jpg?raw=true')` }}></div>
          <div className="flex-[0_0_100%] min-w-0 h-screen bg-cover bg-center" style={{ backgroundImage: `url('https://github.com/sonicpanther101/school-website/blob/main/images/Maunga%20Club%20images/mountain_view_light.jpg?raw=true')` }}></div>
        </div>
      </div>

      { /*
        card for each chalet, linking to chalets page
      */ }
      
      { /* Stats */ }
      <div className="flex flex-col md:flex-row m-lg md:m-xxl gap-xl">
        <Card className="flex-1 shadow-md bg-secondary">
          <CardHeader>
            <h2 className="m-lg mb-sm font-bold text-xl">Temperature</h2>
          </CardHeader>
          <CardBody className="flex flex-row items-center">
            <img
              className="flex-1 object-contain h-full w-1/2 p-md rounded-full"
              alt="Thermomitor"
              src="https://cdn.pixabay.com/photo/2016/05/17/17/56/bip-1398748_1280.png"></img>
            <h1 className="font-black text-5xl mr-xl">-X℃</h1>
          </CardBody>
        </Card>
        <Card className="flex-1 shadow-md bg-secondary">
          <CardHeader>
            <h2 className="m-lg mb-sm font-bold text-xl">Slope Conditions</h2>
          </CardHeader>
          <CardBody className="flex flex-row items-center">
            <img
              className="flex-1 object-contain h-full w-1/2 p-md rounded-full"
              alt="Mountain"
              src="https://cdn.pixabay.com/photo/2021/11/10/07/29/mountain-6783202_1280.png"></img>
            <h1 className="font-black mr-xl">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis libero officiis quibusdam sunt autem voluptatum ratione doloremque fugit molestiae eligendi dolores tempora labore velit illum, aut sit similique sint asperiores.</h1>
          </CardBody>
        </Card>
        <Card className="flex-1 shadow-md bg-secondary">
          <CardHeader>
            <h2 className="m-lg mb-sm font-bold text-xl">Weather</h2>
          </CardHeader>
          <CardBody className="flex flex-row items-center">
            <img
              className="flex-1 object-contain h-full w-1/2 rounded-full"
              alt="Cloud"
              id="about"
              src="https://cdn.pixabay.com/photo/2020/09/17/22/53/cloud-5580520_1280.png"></img>
            <h1 className="font-black mr-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe nemo expedita tenetur aspernatur voluptatem, quos vitae ipsum, hic illum neque quod facilis recusandae quas laboriosam aliquid possimus, deserunt dicta accusantium.</h1>
          </CardBody>
        </Card>
      </div>

      { /* About */}
      <div>
        <h1 className="m-lg md:m-xxl font-bold text-3xl">About Us</h1>
        <p className="m-lg md:m-xxl mb-none">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia ad laudantium voluptate incidunt, laboriosam explicabo, aspernatur sed saepe vero sapiente at omnis eum tempora dicta repellat corrupti, ab rerum ipsum? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque molestiae laborum animi dicta adipisci dolores aut laudantium recusandae, labore quis, possimus quae sapiente. Voluptate debitis quae aperiam, at asperiores consectetur! Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam aspernatur nobis dolorum consequuntur quibusdam, voluptatem ipsum saepe vero quae ex aperiam enim distinctio repellendus temporibus aliquid quas minima laborum at? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur tempore optio, obcaecati, dolore ipsum consectetur aliquid vitae repudiandae voluptate animi itaque, officiis quos. Distinctio, fuga dolorem. Voluptas est esse cupiditate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque ratione ducimus ea sit nobis, dicta officia. Consequuntur atque amet iusto recusandae animi! Vel, accusamus ad odit in fugit eligendi dolor.</p>
        <p className="m-lg md:m-xxl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia ad laudantium voluptate incidunt, laboriosam explicabo, aspernatur sed saepe vero sapiente at omnis eum tempora dicta repellat corrupti, ab rerum ipsum? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque molestiae laborum animi dicta adipisci dolores aut laudantium recusandae, labore quis, possimus quae sapiente. Voluptate debitis quae aperiam, at asperiores consectetur! Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam aspernatur nobis dolorum consequuntur quibusdam, voluptatem ipsum saepe vero quae ex aperiam enim distinctio repellendus temporibus aliquid quas minima laborum at? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur tempore optio, obcaecati, dolore ipsum consectetur aliquid vitae repudiandae voluptate animi itaque, officiis quos. Distinctio, fuga dolorem. Voluptas est esse cupiditate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque ratione ducimus ea sit nobis, dicta officia. Consequuntur atque amet iusto recusandae animi! Vel, accusamus ad odit in fugit eligendi dolor.</p>
      </div>

      { /* Reviews */}
      
      <h1 className="m-lg md:m-xxl font-bold text-3xl">Reviews</h1>
      <div className="flex flex-col md:flex-row m-lg md:m-xxl gap-xl">
        <Card className="flex-1 shadow-md bg-secondary">
          <CardHeader className="justify-between flex gap-5 m-lg mb-sm">
            <Avatar isBordered radius="full" size="md" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" className="flex-1 basis-[20%]" />
            <div className="justify-center flex-1 basis-[80%]">
              <h4 className="text-small font-semibold leading-none ml-lg">First name Last name</h4>
            </div>
          </CardHeader>
          <CardBody className="px-3 py-0 text-small m-md">
            <p className="mr-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur nobis provident dolorum doloremque delectus amet eligendi excepturi laborum nisi natus magnam eaque fugiat, rerum cumque reiciendis sequi accusantium? Adipisci, fugit.
            </p>
          </CardBody>
        </Card>

        <Card className="flex-1 shadow-md bg-secondary">
          <CardHeader className="justify-between flex gap-5 m-lg mb-sm">
            <Avatar isBordered radius="full" size="md" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" className="flex-1 basis-[20%]" />
            <div className="justify-center flex-1 basis-[80%]">
              <h4 className="text-small font-semibold leading-none ml-lg">First name Last name</h4>
            </div>
          </CardHeader>
          <CardBody className="px-3 py-0 text-small m-md">
            <p className="mr-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur nobis provident dolorum doloremque delectus amet eligendi excepturi laborum nisi natus magnam eaque fugiat, rerum cumque reiciendis sequi accusantium? Adipisci, fugit.
            </p>
          </CardBody>
        </Card>

        <Card className="flex-1 shadow-md bg-secondary">
          <CardHeader className="justify-between flex gap-5 m-lg mb-sm">
            <Avatar isBordered radius="full" size="md" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" className="flex-1 basis-[20%]" />
            <div className="justify-center flex-1 basis-[80%]">
              <h4 className="text-small font-semibold leading-none ml-lg">First name Last name</h4>
            </div>
          </CardHeader>
          <CardBody className="px-3 py-0 text-small m-md">
            <p className="mr-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur nobis provident dolorum doloremque delectus amet eligendi excepturi laborum nisi natus magnam eaque fugiat, rerum cumque reiciendis sequi accusantium? Adipisci, fugit.
            </p>
          </CardBody>
        </Card>
      </div>

      { /* Chalets */}
      <div className="w-full h-[80vh] mb-[15rem] overflow-hidden md:overflow-visible cursor-default select-none" ref={emblaRef2}>
        <div className="flex">
          <div
            className="flex flex-col flex-[0_0_100%] min-w-0 h-[80vh] bg-cover bg-bottom"
            style={{ backgroundImage: `url('https://github.com/sonicpanther101/school-website/blob/main/images/kakapo/cabin_exterior.jpg?raw=true')` }}
          >
            <div className="flex-1"></div>
            <div className="flex-1 xl:hidden"></div>
            <Card className="flex-1 m-sm p-sm md:m-lg md:p-lg md:mb-[-5rem]">
              <CardHeader className="font-bold text-3xl">
                Kakapo Chalet
              </CardHeader>
              <CardBody className="mb-lg md:mb-none">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi illum voluptates dolores consequuntur optio quisquam voluptate at magni corrupti doloribus distinctio sunt dolorum aliquid iure nobis explicabo, repellendus unde! Delectus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi illum voluptates dolores consequuntur optio quisquam voluptate at magni corrupti doloribus distinctio sunt dolorum aliquid iure nobis explicabo, repellendus unde! Delectus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi illum voluptates dolores consequuntur optio quisquam voluptate at magni corrupti doloribus distinctio sunt dolorum aliquid iure nobis explicabo, repellendus unde! Delectus!
              </CardBody>
              <CardFooter className="justify-end">
                <Button as={Link} href={'/chalets#kakapo'} className="p-sm md:p-md m-xl md:m-none text-lg">Book Now</Button>
              </CardFooter>
            </Card>
          </div>
          <div
            className="flex flex-col flex-grow flex-[0_0_100%] min-w-0 h-[80vh] bg-cover bg-right-bottom"
            style={{ backgroundImage: `url('https://github.com/sonicpanther101/school-website/blob/main/images/kereru/cabin_exterior.jpg?raw=true')` }}
          >
            <div className="flex-1"></div>
            <div className="flex-1 xl:hidden"></div>
            <Card className="flex-1 flex-grow m-sm p-sm md:m-lg md:p-lg md:mb-[-5rem]">
              <CardHeader className="font-bold text-3xl">
                Kereru Chalet
              </CardHeader>
              <CardBody className="mb-lg md:mb-none">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi illum voluptates dolores consequuntur optio quisquam voluptate at magni corrupti doloribus distinctio sunt dolorum aliquid iure nobis explicabo, repellendus unde! Delectus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi illum voluptates dolores consequuntur optio quisquam voluptate at magni corrupti doloribus distinctio sunt dolorum aliquid iure nobis explicabo, repellendus unde! Delectus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi illum voluptates dolores consequuntur optio quisquam voluptate at magni corrupti doloribus distinctio sunt dolorum aliquid iure nobis explicabo, repellendus unde! Delectus!
              </CardBody>
              <CardFooter className="justify-end">
                <Button as={Link} href={'/chalets#kereru'}  className="p-sm md:p-md m-xl md:m-none text-lg">Book Now</Button>
              </CardFooter>
            </Card>
          </div>
          <div
            className="flex flex-col flex-grow flex-[0_0_100%] min-w-0 h-[80vh] bg-cover bg-center"
            style={{ backgroundImage: `url('https://github.com/sonicpanther101/school-website/blob/main/images/pukeko/chalet_exterior.jpg?raw=true')` }}
          >
            <div className="flex-1"></div>
            <div className="flex-1 xl:hidden"></div>
            <Card className="flex-1 flex-grow m-sm p-sm md:m-lg md:p-lg md:mb-[-5rem]">
              <CardHeader className="font-bold text-3xl">
                Pukeko Chalet
              </CardHeader>
              <CardBody className="mb-lg md:mb-none">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi illum voluptates dolores consequuntur optio quisquam voluptate at magni corrupti doloribus distinctio sunt dolorum aliquid iure nobis explicabo, repellendus unde! Delectus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi illum voluptates dolores consequuntur optio quisquam voluptate at magni corrupti doloribus distinctio sunt dolorum aliquid iure nobis explicabo, repellendus unde! Delectus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi illum voluptates dolores consequuntur optio quisquam voluptate at magni corrupti doloribus distinctio sunt dolorum aliquid iure nobis explicabo, repellendus unde! Delectus!
              </CardBody>
              <CardFooter className="justify-end">
                <Button as={Link} href={'/chalets#pukeko'} className="p-sm md:p-md m-xl md:m-none text-lg">Book Now</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
      
      <Footer/>
    </div>
  );
}
