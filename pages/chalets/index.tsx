import { Head } from "@/layouts/head";
import { Footer } from "@/layouts/footer";

import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Button } from "@nextui-org/button";
import { DateRangePicker } from "@nextui-org/date-picker";
import { Input } from "@nextui-org/input";
import Link from "next/link";

import { parseDate } from "@internationalized/date";

import { I18nProvider } from "@react-aria/i18n";

import { useState, useEffect } from 'react';

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

function signedInCheck(data: string) {
    console.log(data)

    const elements = document.querySelectorAll(".signed-in, .signed-out");
    elements.forEach(element => {
        if (data === "true") {
            element.classList.toggle("hidden", element.classList.contains("signed-out"));
        } else {
            element.classList.toggle("hidden", element.classList.contains("signed-in"));
        }
    });
}

let pukeko_date = {
    start: parseDate("2024-05-10"),
    end: parseDate("2024-05-20")
};

let pukeko_adult_num: number = 0;
let pukeko_child_num: number = 0;

const pukeko_capacities: number[] = [6, 15]

let kereru_date = {
    start: parseDate("2024-05-10"),
    end: parseDate("2024-05-20")
};

let kereru_adult_num: number = 0;
let kereru_child_num: number = 0;

const kereru_capacities: number[] = [2, 4]

let kakapo_date = {
    start: parseDate("2024-05-10"),
    end: parseDate("2024-05-20")
};

let kakapo_adult_num: number = 0;
let kakapo_child_num: number = 0;

const kakapo_capacities: number[] = [10, 30]

function isNumericString(str: string): boolean {
    return /^\d+$/.test(str);
}

const isInvalidDateRange = (date_range: any) => {
    console.log(date_range.end.compare(date_range.start));
    console.log(date_range.start.toDate("Pacific/Auckland").getDay());
    console.log(date_range.end.toDate("Pacific/Auckland").getDay());
    if (date_range.end.compare(date_range.start) <= 2 &&
        date_range.end.compare(date_range.start) >= 0 &&
        date_range.start.toDate("Pacific/Auckland").getDay() % 5 <= 1 &&
        date_range.end.toDate("Pacific/Auckland").getDay() % 5 <= 1 &&
        date_range.start.toDate("Pacific/Auckland").getDay() != 1 &&
        date_range.end.toDate("Pacific/Auckland").getDay() != 1) {
        return false;
    } else {
        return true;
    }
};

const isInvalidCapacity = (adult_num: number, child_num: number, capacities: number[]) => {
    if (adult_num >= 0 && child_num >= 0 &&
        adult_num <= capacities[0] &&
        child_num <= capacities[1] &&
        adult_num + child_num > 0) {
        return false;
    } else {
        return true;
    }
};

function handleBooking(chalet: string) {

    let date_range;
    let adult_num;
    let child_num;
    let capacities;

    if (chalet == "pukeko") {
        date_range = pukeko_date;
        adult_num = pukeko_adult_num;
        child_num = pukeko_child_num;
        capacities = pukeko_capacities;
    } else if (chalet == "kereru") {
        date_range = kereru_date;
        adult_num = kereru_adult_num;
        child_num = kereru_child_num;
        capacities = kereru_capacities;
    } else if (chalet == "kakapo") {
        date_range = kakapo_date;
        adult_num = kakapo_adult_num;
        child_num = kakapo_child_num;
        capacities = kakapo_capacities;
    } else {
        return;
    }

    if (isInvalidDateRange(date_range) || isInvalidCapacity(adult_num, child_num, capacities)) {
    } else {
        bookingSuccess(date_range, adult_num, child_num, chalet);
    }
};


function bookingSuccess(date_range: any, adult_num: number, child_num: number, chalet: string) {
    console.log(date_range);
    console.log(adult_num);
    console.log(child_num);
    console.log(chalet);

    const popupBody = document.getElementById("popup-body");
    if (popupBody) {
        popupBody.innerHTML = `Your booking for the ${chalet} chalet for ${adult_num} adult(s) and ${child_num} child(s) on ${date_range.start.toDate("Pacific/Auckland")} to ${date_range.end.toDate("Pacific/Auckland")} has been confirmed.`;
    }
    
    document.getElementById("popup")?.classList.add("block");
    document.getElementById("popup")?.classList.remove("hidden");
};

export default function IndexPage() { 

    const [ispukekoInvalidCapacity, setIspukekoInvalidCapacity] = useState(false);
    const [ispukekoInvalidDateRange, setIspukekoInvalidDateRange] = useState(false);

    const [iskereruInvalidCapacity, setIskereruInvalidCapacity] = useState(false);
    const [iskereruInvalidDateRange, setIskereruInvalidDateRange] = useState(false);

    const [iskakapoInvalidCapacity, setIskakapoInvalidCapacity] = useState(false);
    const [iskakapoInvalidDateRange, setIskakapoInvalidDateRange] = useState(false);

    const [signedIn, setSignedIn] = useState(null);

    useEffect(() => {
        const storedData = localStorage.getItem('signed-in');
        if (storedData) {
            setSignedIn(JSON.parse(storedData));
            signedInCheck(storedData);
        }
    }, []);

    useEffect(() => {
        if (signedIn !== null) {
            localStorage.setItem('signed-in', JSON.stringify(signedIn));
        }
    }, [signedIn]);

    const [emblaRef] = useEmblaCarousel({
        loop: true, duration: 50
    }, [Autoplay({ delay: 3000 })])
    const [emblaRef1] = useEmblaCarousel({
        loop: true, duration: 50
    }, [Autoplay({ delay: 3000 })])
    const [emblaRef2] = useEmblaCarousel({
        loop: true, duration: 50
    }, [Autoplay({ delay: 3000 })])

    return (
        <I18nProvider locale="en-GB">
        <div className="overflow-hidden">
            <Head />

            <div className="absolute w-full h-[30vh] z-10 flex flex-col justify-center items-center">
                <h1 className="text-5xl md:text-7xl font-black text-center select-none">Our Chalets</h1>
            </div>
            <div className="h-[25vh]"></div>

            <Card className="w-11/12 md:w-2/3 mx-auto">
                    <h1 className="text-3xl md:text-5xl font-black text-center select-none mt-xl">Details</h1>
                    <p className="m-xl">• Only Club members can access the chalets.<br />
                        • All chalet bookings must be from Friday to Sunday.<br />
                        • Chalets offer shared accommodation for between 6 and 40 people per chalet.<br />
                        • All three chalets are on the mountain, so you can ski to and from the chalets.<br />
                        • The mountain gives 550 hectares of skiing/snowboarding area, and the longest
                        ski/snowboard season in New Zealand.<br />
                        • The table below summarises key features of the three chalets, including the
                        maximum number of adults and children that each chalet can accommodate.</p>
            </Card>

            <div>
                <h1 id="kakapo" className="text-3xl md:text-5xl font-black text-center select-none mt-xl">Kakapo Chalet</h1>
                <div className="w-full md:w-[120%] h-[120vh] overflow-hidden md:ml-[-10%]" ref={emblaRef}>
                    <div className="flex">
                        <img
                            className="flex-1 h-[80vh] object-cover md:rounded-2xl m-xl shadow-2xl"
                                src="https://github.com/sonicpanther101/school-website/blob/main/images/kakapo/bunk_room.jpg?raw=true"
                            alt="kakapo chalet bunk room" />
                        <img
                            className="flex-1 h-[80vh] object-cover md:rounded-2xl m-xl shadow-2xl"
                                src="https://github.com/sonicpanther101/school-website/blob/main/images/kakapo/cabin_exterior.jpg?raw=true"
                            alt="kakapo chalet cabin exterior" />
                        <img
                            className="flex-1 h-[80vh] object-cover md:rounded-2xl m-xl shadow-2xl"
                                src="https://github.com/sonicpanther101/school-website/blob/main/images/kakapo/cabin_view.jpg?raw=true"
                                alt="kakapo chalet cabin view" />
                        <img
                            className="flex-1 h-[80vh] object-cover md:rounded-2xl m-xl shadow-2xl"
                                src="https://github.com/sonicpanther101/school-website/blob/main/images/kakapo/hallway.jpg?raw=true"
                            alt="kakapo chalet hallway" />
                    </div>
                </div>
                <Card className="w-[95%] rounded-2xl m-[2.5%] mt-[-110%] md:mt-[-30%] shadow-2xl p-md flex flex-col md:flex-row gap-md ">
                    <div className="flex-1 basis-[60%]">
                        <CardHeader>
                            <h2 className="m-lg my-sm font-bold text-xl">Description</h2>
                        </CardHeader>
                            <CardBody className="min-h-[20vh]">
                                • Largest of the chalets<br />
                                • Large kitchen, dining and
                                living area<br />
                                • Great amenities<br />
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et consequatur repellendus quidem reprehenderit enim eveniet? Itaque laboriosam a amet aperiam ullam, obcaecati molestias reiciendis sequi possimus cupiditate, maiores ducimus ipsam.
                        </CardBody>
                    </div>
                    <CardFooter className="justify-center flex-1 flex flex-col gap-md">
                        <DateRangePicker
                            label="Stay duration"
                            onChange={(value: any) => {
                                kakapo_date = value;
                                setIskakapoInvalidDateRange(isInvalidDateRange(kakapo_date))
                            }}
                            isRequired
                            variant="underlined"
                            description="Pick a range of dates between Friday and Sunday"
                            isInvalid={iskakapoInvalidDateRange}
                            errorMessage="Please enter dates between Friday and Sunday"
                            className="signed-in hidden max-w-xs bg-secondary p-sm rounded-xl"
                        />
                        <div className="signed-in hidden flex gap-md">
                            <Input
                                className="bg-secondary p-sm rounded-xl"
                                label="Adults"
                                description={`Max ${kakapo_capacities[0]}`}
                                isRequired
                                size="lg"
                                variant="underlined"
                                type='number'
                                isInvalid={iskakapoInvalidCapacity}
                                errorMessage="Please Enter Valid Capacity" 
                                onValueChange={(value) => {
                                    if (value != null && isNumericString(value)) {
                                        if (parseInt(value) >= 0) {
                                            kakapo_adult_num = parseInt(value);
                                        }
                                    }
                                    setIskakapoInvalidCapacity(isInvalidCapacity(kakapo_adult_num, kakapo_child_num, kakapo_capacities))
                                }}
                            />
                            <Input
                                className="bg-secondary p-sm rounded-xl"
                                label="Kids"
                                description={`Max ${kakapo_capacities[1]}`}
                                isRequired
                                size="lg"
                                variant="underlined"
                                type='number'
                                isInvalid={iskakapoInvalidCapacity}
                                errorMessage="Please Enter Valid Capacity"
                                onValueChange={(value) => {
                                    if (value != null && isNumericString(value)) {
                                        if (parseInt(value) >= 0) {
                                            kakapo_child_num = parseInt(value);
                                        }
                                    }
                                    setIskakapoInvalidCapacity(isInvalidCapacity(kakapo_adult_num, kakapo_child_num, kakapo_capacities))
                                }}
                            />
                        </div>
                        <Button onClick={() => handleBooking("kakapo")} className="signed-in hidden p-sm md:p-md text-lg" >Book Now</Button>
                        <Button as={Link} href="/register" className="signed-out p-sm md:p-md text-lg bg-secondary rounded-xl" >Join the Club</Button>
                    </CardFooter>
                </Card>
            </div>

            <div>
                <h1 id="kereru" className="text-3xl md:text-5xl font-black text-center select-none mt-xl">Kereru Chalet</h1>
                <div className="w-full md:w-[120%] h-[120vh] overflow-hidden md:ml-[-10%]" ref={emblaRef1}>
                    <div className="flex">
                        <img
                            className="flex-1 h-[80vh] object-cover md:rounded-2xl m-xl shadow-2xl"
                                src="https://github.com/sonicpanther101/school-website/blob/main/images/kereru/adult_bedroom.jpg?raw=true"
                            alt="kereru chalet adult bedroom" />
                        <img
                            className="flex-1 h-[80vh] object-cover md:rounded-2xl m-xl shadow-2xl"
                                src="https://github.com/sonicpanther101/school-website/blob/main/images/kereru/cabin_exterior.jpg?raw=true"
                            alt="kereru chalet cabin exterior" />
                        <img
                            className="flex-1 h-[80vh] object-cover md:rounded-2xl m-xl shadow-2xl"
                                src="https://github.com/sonicpanther101/school-website/blob/main/images/kereru/kids_bedroom.jpg?raw=true"
                                alt="kereru chalet kid bedroom" />
                        <img
                            className="flex-1 h-[80vh] object-cover md:rounded-2xl m-xl shadow-2xl"
                                src="https://github.com/sonicpanther101/school-website/blob/main/images/kereru/kitchen.jpg?raw=true"
                            alt="kereru chalet kitchen" />
                    </div>
                </div>
                <Card className="w-[95%] rounded-2xl m-[2.5%] mt-[-110%] md:mt-[-30%] shadow-2xl p-md flex flex-col md:flex-row gap-md ">
                    <div className="flex-1 basis-[60%]">
                        <CardHeader>
                            <h2 className="m-lg my-sm font-bold text-xl">Description</h2>
                        </CardHeader>
                            <CardBody className="min-h-[20vh]">
                                • Great option for a family<br />
                                • 2 bedrooms<br />
                                • Perfect for families with 2-4
                                children<br />
                                • Separate living area<br />
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et consequatur repellendus quidem reprehenderit enim eveniet? Itaque laboriosam a amet aperiam ullam, obcaecati molestias reiciendis sequi possimus cupiditate, maiores ducimus ipsam.
                        </CardBody>
                    </div>
                    <CardFooter className="justify-center flex-1 flex flex-col gap-md">
                        <DateRangePicker
                            label="Stay duration"
                            onChange={(value: any) => {
                                kereru_date = value;
                                setIskereruInvalidDateRange(isInvalidDateRange(kereru_date))
                            }}
                            isRequired
                            variant="underlined"
                            description="Pick a range of dates between Friday and Sunday"
                            isInvalid={iskereruInvalidDateRange}
                            errorMessage="Please enter dates between Friday and Sunday"
                            className="signed-in hidden max-w-xs bg-secondary p-sm rounded-xl"
                        />
                        <div className="signed-in hidden flex gap-md">
                            <Input
                                className="bg-secondary p-sm rounded-xl"
                                label="Adults"
                                description={`Max ${kereru_capacities[0]}`}
                                isRequired
                                size="lg"
                                variant="underlined"
                                type='number'
                                isInvalid={iskereruInvalidCapacity}
                                errorMessage="Please Enter Valid Capacity"
                                onValueChange={(value) => {
                                    if (value != null && isNumericString(value)) {
                                        if (parseInt(value) >= 0) {
                                            kereru_adult_num = parseInt(value);
                                        }
                                    }
                                    setIskereruInvalidCapacity(isInvalidCapacity(kereru_adult_num, kereru_child_num, kereru_capacities))
                                }}
                            />
                            <Input
                                className="bg-secondary p-sm rounded-xl"
                                label="Kids"
                                description={`Max ${kereru_capacities[1]}`}
                                isRequired
                                size="lg"
                                variant="underlined"
                                type='number'
                                isInvalid={iskereruInvalidCapacity}
                                errorMessage="Please Enter Valid Capacity"
                                onValueChange={(value) => {
                                    if (value != null && isNumericString(value)) {
                                        if (parseInt(value) >= 0) {
                                            kereru_child_num = parseInt(value);
                                        }
                                    }
                                    setIskereruInvalidCapacity(isInvalidCapacity(kereru_adult_num, kereru_child_num, kereru_capacities))
                                }}
                            />
                        </div>
                        <Button onClick={() => handleBooking("kereru")} className="signed-in hidden p-sm md:p-md text-lg" >Book Now</Button>
                        <Button as={Link} href="/register" className="signed-out p-sm md:p-md text-lg bg-secondary rounded-xl" >Join the Club</Button>
                    </CardFooter>
                </Card>
            </div>

            <div className="mb-x3l">
                <h1 id="pukeko" className="text-3xl md:text-5xl font-black text-center select-none mt-xl">Pukeko Chalet</h1>
                <div className="w-full md:w-[120%] h-[120vh] overflow-hidden md:ml-[-10%]" ref={emblaRef2}>
                    <div className="flex">
                        <img
                            className="flex-1 h-[80vh] object-cover md:rounded-2xl m-xl shadow-2xl"
                                src="https://github.com/sonicpanther101/school-website/blob/main/images/pukeko/adult_bedroom.jpg?raw=true"
                            alt="pukeko chalet adult bedroom" />
                        <img
                            className="flex-1 h-[80vh] object-cover md:rounded-2xl m-xl shadow-2xl"
                                src="https://github.com/sonicpanther101/school-website/blob/main/images/pukeko/bathroom.jpg?raw=true"
                            alt="pukeko chalet bathroom" />
                        <img
                            className="flex-1 h-[80vh] object-cover md:rounded-2xl m-xl shadow-2xl"
                                src="https://github.com/sonicpanther101/school-website/blob/main/images/pukeko/chalet_exterior.jpg?raw=true"
                                alt="pukeko chalet exterior" />
                        <img
                            className="flex-1 h-[80vh] object-cover md:rounded-2xl m-xl shadow-2xl"
                                src="https://github.com/sonicpanther101/school-website/blob/main/images/pukeko/chalet_view.jpg?raw=true"
                            alt="pukeko chalet view" />
                    </div>
                </div>
                <Card className="w-[95%] rounded-2xl m-[2.5%] mt-[-110%] md:mt-[-30%] shadow-2xl p-md flex flex-col md:flex-row gap-md ">
                    <div className="flex-1 basis-[60%]">
                        <CardHeader>
                            <h2 className="m-lg my-sm font-bold text-xl">Description</h2>
                        </CardHeader>
                            <CardBody className="min-h-[20vh]">
                                • Great for large

                                groups/families wanting a
                                chalet to themselves<br />
                                • Limits on adult/child number
                                ensure comfortable stay<br />
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et consequatur repellendus quidem reprehenderit enim eveniet? Itaque laboriosam a amet aperiam ullam, obcaecati molestias reiciendis sequi possimus cupiditate, maiores ducimus ipsam.
                        </CardBody>
                    </div>
                    <CardFooter className="justify-center flex-1 flex flex-col gap-md">
                        <DateRangePicker
                            label="Stay duration"
                            onChange={(value: any) => {
                                pukeko_date = value;
                                setIspukekoInvalidDateRange(isInvalidDateRange(pukeko_date))
                            }}
                            isRequired
                            variant="underlined"
                            description="Pick a range of dates between Friday and Sunday"
                            isInvalid={ispukekoInvalidDateRange}
                            errorMessage="Please enter dates between Friday and Sunday"
                            className="signed-in hidden max-w-xs bg-secondary p-sm rounded-xl"
                        />
                        <div className="signed-in hidden flex gap-md">
                            <Input
                                className="bg-secondary p-sm rounded-xl"
                                label="Adults"
                                description={`Max ${pukeko_capacities[0]}`}
                                isRequired
                                size="lg"
                                variant="underlined"
                                type='number'
                                isInvalid={ispukekoInvalidCapacity}
                                errorMessage="Please Enter Valid Capacity"
                                onValueChange={(value) => {
                                    if (value != null && isNumericString(value)) {
                                        if (parseInt(value) >= 0) {
                                            pukeko_adult_num = parseInt(value);
                                        }
                                    }
                                    setIspukekoInvalidCapacity(isInvalidCapacity(pukeko_adult_num, pukeko_child_num, pukeko_capacities))
                                }}
                            />
                            <Input
                                className="bg-secondary p-sm rounded-xl"
                                label="Kids"
                                description={`Max ${pukeko_capacities[1]}`}
                                isRequired
                                size="lg"
                                variant="underlined"
                                type='number'
                                isInvalid={ispukekoInvalidCapacity}
                                errorMessage="Please Enter Valid Capacity"
                                onValueChange={(value) => {
                                    if (value != null && isNumericString(value)) {
                                        if (parseInt(value) >= 0) {
                                            pukeko_child_num = parseInt(value);
                                        }
                                    }
                                    setIspukekoInvalidCapacity(isInvalidCapacity(pukeko_adult_num, pukeko_child_num, pukeko_capacities))
                                }}
                            />
                        </div>
                        <Button onClick={() => handleBooking("pukeko")} className="signed-in hidden p-sm md:p-md text-lg" >Book Now</Button>
                        <Button as={Link} href="/register" className="signed-out p-sm md:p-md text-lg bg-secondary rounded-xl" >Join the Club</Button>
                    </CardFooter>
                </Card>
            </div>

            <Footer />

            <div id="popup" className="hidden z-10">
                <Card className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] md:w-1/2 p-xl md:p-xxl">
                    <CardHeader>
                        <h2 className="m-lg my-sm font-bold text-xl justify-center">Booked</h2>
                    </CardHeader>
                    <CardBody id="popup-body">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis deleniti rem hic iste eos iusto suscipit, earum dolores fugiat tempora cupiditate beatae magni facilis exercitationem eum laborum totam? Molestiae, dolorum.</p>
                    </CardBody>
                    <CardFooter className="justify-center pt-md">
                        <Button
                            className="p-sm md:p-md text-lg"
                            onClick={() => {
                                document.getElementById("popup")?.classList.add("hidden") 
                                document.getElementById("popup")?.classList.remove("block")
                            }}>Close</Button>
                    </CardFooter>
                </Card>
            </div>
        </div>
        </I18nProvider>
    )
}