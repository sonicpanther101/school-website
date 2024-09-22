import { Head } from "@/layouts/head";
import { Footer } from "@/layouts/footer";

import { useRef, useState, useEffect } from "react";

import { cn } from "@/lib/utils";

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
      for (let i = 0; i < document.getElementsByClassName("to-invert").length; i++) {
        document.getElementsByClassName("to-invert")[i].classList.add("invert");
      }
    } else if (document.documentElement.getAttribute('data-theme') === "light") {
      document.documentElement.classList.remove("dark");
      for (let i = 0; i < document.getElementsByClassName("to-invert").length; i++) {
        document.getElementsByClassName("to-invert")[i].classList.remove("invert");
      }
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
    <div className="overflow-hidden font-roboto bg-primary">
      <Head />

      <div className="absolute w-full h-screen z-10 flex flex-col justify-center items-center">
        <div className="bg-[radial-gradient(rgba(0,0,0,0.8)_0%,rgba(0,0,0,0.8)50%,rgba(0,0,0,0.0)_70%,rgba(0,0,0,0.0)_100%)] p-xxl md:p-x4l">
        <h1 className="text-5xl md:text-7xl font-black text-[#CDD6F4] text-center select-none">Maunga Club</h1>
        <h2 className="mt-4 text-lg md:text-2xl text-center text-[#CDD6F4] select-none">Join the club and discover your mountain paradise.</h2>
        </div>
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
              className="flex-1 object-contain h-[50%] w-[50%] p-md rounded-full to-invert"
              alt="Thermomitor"
              src="https://cdn.pixabay.com/photo/2016/05/17/17/56/bip-1398748_1280.png"></img>
            <h1 className="font-black text-5xl mr-xl">-4℃</h1>
          </CardBody>
        </Card>
        <Card className="flex-1 shadow-md bg-secondary pb-md md:pb-none">
          <CardHeader>
            <h2 className="m-lg mb-sm font-bold text-xl">Slope Conditions</h2>
          </CardHeader>
          <CardBody className="flex flex-row items-center">
            <img
              className="flex-1 object-contain h-full w-1/2 p-md rounded-full to-invert"
              alt="Mountain"
              src="https://cdn.pixabay.com/photo/2021/11/10/07/29/mountain-6783202_1280.png"></img>
            <h1 className="font-black mr-xl">Ample base depth, ensuring consistent skiing and snowboarding conditions. Enjoy the challenge and exhilaration of navigating unplowed terrain. Immerse yourself in the soft, fluffy snow, perfect for floating and gliding.</h1>
          </CardBody>
        </Card>
        <Card className="flex-1 shadow-md bg-secondary pb-md md:pb-none">
          <CardHeader>
            <h2 className="m-lg mb-sm font-bold text-xl">Weather</h2>
          </CardHeader>
          <CardBody className="flex flex-row items-center">
            <img
              className="flex-1 object-contain h-full w-1/2 rounded-full to-invert p-md"
              alt="Cloud"
              id="about"
              src="https://cdn.pixabay.com/photo/2020/09/17/22/53/cloud-5580520_1280.png"></img>
            <h1 className="font-black mr-xl">A significant winter storm is currently impacting the Maunga Mountain region. Heavy snowfall is expected to continue throughout the day, with accumulation rates of up to 20cm per hour in higher elevations.</h1>
          </CardBody>
        </Card>
      </div>

      { /* About */}
      <div>
        <h1 className="m-lg md:m-xxl font-bold text-3xl">About Us</h1>
        <p className="m-lg md:m-xxl">
          Maunga Club is more than just a membership; it's a gateway to an unparalleled mountain experience in New Zealand. Nestled amidst the breathtaking alpine scenery, our exclusive club offers a unique blend of luxury, convenience, and camaraderie.<br/><br/>As a member of Maunga Club, you gain exclusive access to our stunning mountain chalets, providing the perfect base for your winter escapades. Our chalets are strategically located on the slopes, offering easy ski-in/ski-out access to pristine snow and world-class terrain. Imagine waking up to breathtaking mountain views and stepping directly onto the slopes, ready to carve your own path through the powder.<br/><br/>Beyond our luxurious accommodations, Maunga Club is committed to creating a welcoming and inclusive community for our members. We foster a sense of camaraderie and shared passion for the mountains, providing opportunities for social gatherings, events, and networking. Join us for après-ski gatherings, live music, or simply relax and unwind in the company of like-minded individuals.<br/><br/>Our dedication to providing exceptional experiences extends beyond our membership benefits. We are committed to environmental sustainability and responsible tourism, ensuring that our operations minimize their impact on the natural environment. By choosing Maunga Club, you are supporting a club that is dedicated to preserving the beauty and integrity of the mountains for generations to come.<br/><br/>Join Maunga Club and discover the thrill of skiing and snowboarding in one of New Zealand's most stunning alpine environments. Experience the luxury, convenience, and camaraderie that sets us apart.
        </p>
      </div>

      { /* Reviews */}
      
      <h1 className="m-lg md:m-xxl font-bold text-3xl">Reviews</h1>
      <div className="flex flex-col md:flex-row m-lg md:m-xxl gap-xl">
        <Card className="flex-1 shadow-md bg-secondary">
          <CardHeader className="justify-between flex gap-5 m-lg mb-sm">
            <Avatar isBordered radius="full" size="md" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" className="flex-1 basis-[20%]" />
            <div className="justify-center flex-1 basis-[80%]">
              <h4 className="text-small font-semibold leading-none ml-lg">Sarah J.</h4>
            </div>
          </CardHeader>
          <CardBody className="px-3 py-0 text-small m-md">
            <p className="mr-lg">
              "My stay at the Maunga Club was absolutely incredible! The chalet was spacious, comfortable, and well-appointed with everything we needed. The views from the balcony were breathtaking, and the ski-in/ski-out access was a huge bonus. The staff were incredibly friendly and helpful, going above and beyond to make sure we had everything we needed. I would highly recommend the Maunga Club to anyone looking for a luxurious and unforgettable mountain getaway."
            </p>
          </CardBody>
        </Card>

        <Card className="flex-1 shadow-md bg-secondary">
          <CardHeader className="justify-between flex gap-5 m-lg mb-sm">
            <Avatar isBordered radius="full" size="md" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" className="flex-1 basis-[20%]" />
            <div className="justify-center flex-1 basis-[80%]">
              <h4 className="text-small font-semibold leading-none ml-lg">Tom M.</h4>
            </div>
          </CardHeader>
          <CardBody className="px-3 py-0 text-small m-md">
            <p className="mr-lg">
              "I've been a member of the Maunga Club for several years now, and I can honestly say it's one of the best ski clubs I've ever been to. The location is unbeatable, the facilities are top-notch, and the staff are always friendly and accommodating. I love being able to stay in a comfortable and convenient chalet right on the slopes, and I've made so many great memories with my friends and family here. I highly recommend the Maunga Club to anyone who loves skiing and snowboarding."
            </p>
          </CardBody>
        </Card>

        <Card className="flex-1 shadow-md bg-secondary">
          <CardHeader className="justify-between flex gap-5 m-lg mb-sm">
            <Avatar isBordered radius="full" size="md" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" className="flex-1 basis-[20%]" />
            <div className="justify-center flex-1 basis-[80%]">
              <h4 className="text-small font-semibold leading-none ml-lg">Emily C.</h4>
            </div>
          </CardHeader>
          <CardBody className="px-3 py-0 text-small m-md">
            <p className="mr-lg">
              "The Maunga Club is a truly special place. The atmosphere is warm and inviting, the staff is exceptional, and the facilities are second to none. I've stayed at many ski resorts over the years, but the Maunga Club is by far the best. I would highly recommend it to anyone looking for a truly unforgettable mountain experience."
            </p>
          </CardBody>
        </Card>
      </div>

      { /* Chalets */}
      <div className="w-full h-[80vh] mb-[30rem] md:mb-[15rem] cursor-default select-none" ref={emblaRef2}>
        <div className="flex">
          <div
            className="flex flex-col flex-[0_0_100%] min-w-0 h-[80vh] bg-cover bg-bottom"
            style={{ backgroundImage: `url('https://github.com/sonicpanther101/school-website/blob/main/images/kakapo/cabin_exterior.jpg?raw=true')` }}
          >
            <div className="flex-1 hidden md:block"></div>
            <div className="flex-1 hidden md:block"></div>
            <div className="flex-1 xl:hidden"></div>
            <Card className="flex-1 m-sm p-sm mb-[-25rem] md:m-lg md:p-lg md:mb-[-5rem] bg-secondary">
              <CardHeader className="font-bold text-3xl">
                Kākāpo Chalet
              </CardHeader>
              <CardBody className="mb-lg md:mb-none">
                The Kākāpo is our largest chalet, offering ample space and luxurious amenities for groups of all sizes. Its spacious kitchen, dining, and living areas provide plenty of room for socializing and relaxation. The Kākāpo is ideal for families with children, offering a variety of entertainment options and comfortable sleeping arrangements. With its prime location on the mountain, the Kākāpo provides easy access to all the best skiing and snowboarding terrain.
              </CardBody>
              <CardFooter className="justify-end">
                <Button as={Link} href={'/chalets#kakapo'} className="p-sm md:p-md m-xl md:m-none text-lg bg-muted">Book Now</Button>
              </CardFooter>
            </Card>
          </div>
          <div
            className="flex flex-col flex-grow flex-[0_0_100%] min-w-0 h-[80vh] bg-cover bg-right-bottom"
            style={{ backgroundImage: `url('https://github.com/sonicpanther101/school-website/blob/main/images/kereru/cabin_exterior.jpg?raw=true')` }}
          >
            <div className="flex-1 hidden md:block"></div>
            <div className="flex-1 hidden md:block"></div>
            <div className="flex-1 xl:hidden"></div>
            <Card className="flex-1 flex-grow m-sm p-sm mb-[-25rem] md:m-lg md:p-lg md:mb-[-5rem] bg-secondary">
              <CardHeader className="font-bold text-3xl">
                Kererū Chalet
              </CardHeader>
              <CardBody className="mb-lg md:mb-none">
                The Kererū is our smallest chalet, providing a cozy and intimate atmosphere for families of four. With its two bedrooms and separate living area, the Kererū offers a comfortable and convenient layout for families with young children. The chalet's location on the mountain provides easy access to the slopes and stunning views of the surrounding landscape. The Kererū is a perfect choice for families seeking a quiet and peaceful retreat in the mountains.
              </CardBody>
              <CardFooter className="justify-end">
                <Button as={Link} href={'/chalets#kereru'}  className="p-sm md:p-md m-xl md:m-none text-lg bg-muted">Book Now</Button>
              </CardFooter>
            </Card>
          </div>
          <div
            className="flex flex-col flex-grow flex-[0_0_100%] min-w-0 h-[80vh] bg-cover bg-center"
            style={{ backgroundImage: `url('https://github.com/sonicpanther101/school-website/blob/main/images/pukeko/chalet_exterior.jpg?raw=true')` }}
          >
            <div className="flex-1 hidden md:block"></div>
            <div className="flex-1 hidden md:block"></div>
            <div className="flex-1 xl:hidden"></div>
            <Card className="flex-1 flex-grow m-sm p-sm mb-[-25rem] md:m-lg md:p-lg md:mb-[-5rem] bg-secondary">
              <CardHeader className="font-bold text-3xl">
                Pūkeko Chalet
              </CardHeader>
              <CardBody className="mb-lg md:mb-none">
                The Pūkeko is a perfect choice for families or groups seeking a more intimate setting. With its limited adult/child capacity, the Pūkeko ensures a comfortable and enjoyable stay for all. The chalet's cozy living area is perfect for relaxing after a day on the slopes, while the well-equipped kitchen makes it easy to prepare meals for your group. The Pūkeko's location on the mountain offers stunning views and easy access to the ski area.
              </CardBody>
              <CardFooter className="justify-end">
                <Button as={Link} href={'/chalets#pukeko'} className="p-sm md:p-md m-xl md:m-none text-lg bg-muted">Book Now</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
      
      <Footer/>
    </div>
  );
}
