import { Head } from "@/layouts/head";
import { Footer } from "@/layouts/footer";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Button } from "@nextui-org/button";
import { DateRangePicker } from "@nextui-org/date-picker";
import { Input } from "@nextui-org/input";

import { parseDate } from "@internationalized/date";

import { I18nProvider } from "@react-aria/i18n";

import { useState } from 'react';

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

let XXXXX_date = {
    start: parseDate("2024-05-10"),
    end: parseDate("2024-05-20")
};

let XXXXX_adult_num: number = 0;
let XXXXX_child_num: number = 0;

const XXXXX_capacities: number[] = [30,10]

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

    if (chalet == "XXXXX") {
        date_range = XXXXX_date;
        adult_num = XXXXX_adult_num;
        child_num = XXXXX_child_num;
        capacities = XXXXX_capacities;
    } else {
        return
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

    const [isXXXXXInvalidCapacity, setIsXXXXXInvalidCapacity] = useState(false);
    const [isXXXXXInvalidDateRange, setIsXXXXXInvalidDateRange] = useState(false);

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
            <Head />

            <div className="absolute w-full h-[30vh] z-10 flex flex-col justify-center items-center">
                <h1 className="text-5xl md:text-7xl font-black text-center select-none">Our Chalets</h1>
            </div>
            <div className="h-[25vh]"></div>

            <div>
                <h1 className="text-3xl md:text-5xl font-black text-center select-none mt-xl">XXXXX Chalet</h1>
                <div className="w-full md:w-[120%] h-[120vh] overflow-hidden md:ml-[-10%]" ref={emblaRef}>
                    <div className="flex">
                        <img
                            className="flex-1 h-[80vh] object-cover md:rounded-2xl m-xl shadow-2xl"
                            src="https://media.gettyimages.com/id/185010957/photo/mountain-log-chalet.jpg?s=612x612&w=0&k=20&c=MV_qneVamVI4f5SkI9Za6_yGICPMKLfoguPih4vqC_o="
                            alt="chalet" />
                        <img
                            className="flex-1 h-[80vh] object-cover md:rounded-2xl m-xl shadow-2xl"
                            src="https://media.gettyimages.com/id/185010957/photo/mountain-log-chalet.jpg?s=612x612&w=0&k=20&c=MV_qneVamVI4f5SkI9Za6_yGICPMKLfoguPih4vqC_o="
                            alt="chalet" />
                        <img
                            className="flex-1 h-[80vh] object-cover md:rounded-2xl m-xl shadow-2xl"
                            src="https://media.gettyimages.com/id/185010957/photo/mountain-log-chalet.jpg?s=612x612&w=0&k=20&c=MV_qneVamVI4f5SkI9Za6_yGICPMKLfoguPih4vqC_o="
                            alt="chalet" />
                    </div>
                </div>
                <Card className="w-[95%] rounded-2xl m-[2.5%] mt-[-110%] md:mt-[-30%] shadow-2xl p-md flex flex-col md:flex-row gap-md ">
                    <div className="flex-1 basis-[60%]">
                        <CardHeader>
                            <h2 className="m-lg my-sm font-bold text-xl">Description</h2>
                        </CardHeader>
                        <CardBody>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et consequatur repellendus quidem reprehenderit enim eveniet? Itaque laboriosam a amet aperiam ullam, obcaecati molestias reiciendis sequi possimus cupiditate, maiores ducimus ipsam.
                        </CardBody>
                    </div>
                    <CardFooter className="justify-center flex-1 flex flex-col gap-md">
                        <DateRangePicker
                            label="Stay duration"
                            onChange={(value: any) => {
                                XXXXX_date = value;
                                setIsXXXXXInvalidDateRange(isInvalidDateRange(XXXXX_date))
                            }}
                            isRequired
                            variant="underlined"
                            description="Pick a range of dates between Friday and Sunday"
                            isInvalid={isXXXXXInvalidDateRange}
                            errorMessage="Please enter dates between Friday and Sunday"
                            className="max-w-xs bg-secondary p-sm rounded-xl"
                        />
                        <div className="flex gap-md">
                            <Input
                                className="bg-secondary p-sm rounded-xl"
                                label="Adults"
                                description={`Max ${XXXXX_capacities[0]}`}
                                isRequired
                                size="lg"
                                variant="underlined"
                                type='number'
                                isInvalid={isXXXXXInvalidCapacity}
                                errorMessage="Please Enter Valid Capacity" 
                                onValueChange={(value) => {
                                    if (value != null && isNumericString(value)) {
                                        if (parseInt(value) >= 0) {
                                            XXXXX_adult_num = parseInt(value);
                                        }
                                    }
                                    setIsXXXXXInvalidCapacity(isInvalidCapacity(XXXXX_adult_num, XXXXX_child_num, XXXXX_capacities))
                                }}
                            />
                            <Input
                                className="bg-secondary p-sm rounded-xl"
                                label="Kids"
                                description={`Max ${XXXXX_capacities[1]}`}
                                isRequired
                                size="lg"
                                variant="underlined"
                                type='number'
                                isInvalid={isXXXXXInvalidCapacity}
                                errorMessage="Please Enter Valid Capacity"
                                onValueChange={(value) => {
                                    if (value != null && isNumericString(value)) {
                                        if (parseInt(value) >= 0) {
                                            XXXXX_child_num = parseInt(value);
                                        }
                                    }
                                    setIsXXXXXInvalidCapacity(isInvalidCapacity(XXXXX_adult_num, XXXXX_child_num, XXXXX_capacities))
                                }}
                            />
                        </div>
                        <Button onClick={() => handleBooking("XXXXX")} className="p-sm md:p-md text-lg" >Book Now</Button>
                    </CardFooter>
                </Card>
            </div>

            <div>
                <h1 className="text-3xl md:text-5xl font-black text-center select-none mt-xl">XXXXX Chalet</h1>
                <div className="w-full md:w-[120%] h-[120vh] overflow-hidden md:ml-[-10%]" ref={emblaRef1}>
                    <div className="flex">
                        <img
                            className="flex-1 h-[80vh] object-cover md:rounded-2xl m-xl shadow-2xl"
                            src="https://media.gettyimages.com/id/185010957/photo/mountain-log-chalet.jpg?s=612x612&w=0&k=20&c=MV_qneVamVI4f5SkI9Za6_yGICPMKLfoguPih4vqC_o="
                            alt="chalet" />
                        <img
                            className="flex-1 h-[80vh] object-cover md:rounded-2xl m-xl shadow-2xl"
                            src="https://media.gettyimages.com/id/185010957/photo/mountain-log-chalet.jpg?s=612x612&w=0&k=20&c=MV_qneVamVI4f5SkI9Za6_yGICPMKLfoguPih4vqC_o="
                            alt="chalet" />
                        <img
                            className="flex-1 h-[80vh] object-cover md:rounded-2xl m-xl shadow-2xl"
                            src="https://media.gettyimages.com/id/185010957/photo/mountain-log-chalet.jpg?s=612x612&w=0&k=20&c=MV_qneVamVI4f5SkI9Za6_yGICPMKLfoguPih4vqC_o="
                            alt="chalet" />
                    </div>
                </div>
                <Card className="w-[95%] rounded-2xl m-[2.5%] mt-[-110%] md:mt-[-30%] shadow-2xl p-md flex flex-col md:flex-row gap-md ">
                    <div className="flex-1 basis-[60%]">
                        <CardHeader>
                            <h2 className="m-lg my-sm font-bold text-xl">Description</h2>
                        </CardHeader>
                        <CardBody>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et consequatur repellendus quidem reprehenderit enim eveniet? Itaque laboriosam a amet aperiam ullam, obcaecati molestias reiciendis sequi possimus cupiditate, maiores ducimus ipsam.
                        </CardBody>
                    </div>
                    <CardFooter className="justify-center flex-1 flex flex-col gap-md">
                        <DateRangePicker
                            label="Stay duration"
                            onChange={(value: any) => {
                                XXXXX_date = value;
                                setIsXXXXXInvalidDateRange(isInvalidDateRange(XXXXX_date))
                            }}
                            isRequired
                            variant="underlined"
                            description="Pick a range of dates between Friday and Sunday"
                            isInvalid={isXXXXXInvalidDateRange}
                            errorMessage="Please enter dates between Friday and Sunday"
                            className="max-w-xs bg-secondary p-sm rounded-xl"
                        />
                        <div className="flex gap-md">
                            <Input
                                className="bg-secondary p-sm rounded-xl"
                                label="Adults"
                                description={`Max ${XXXXX_capacities[0]}`}
                                isRequired
                                size="lg"
                                variant="underlined"
                                type='number'
                                isInvalid={isXXXXXInvalidCapacity}
                                errorMessage="Please Enter Valid Capacity"
                                onValueChange={(value) => {
                                    if (value != null && isNumericString(value)) {
                                        if (parseInt(value) >= 0) {
                                            XXXXX_adult_num = parseInt(value);
                                        }
                                    }
                                    setIsXXXXXInvalidCapacity(isInvalidCapacity(XXXXX_adult_num, XXXXX_child_num, XXXXX_capacities))
                                }}
                            />
                            <Input
                                className="bg-secondary p-sm rounded-xl"
                                label="Kids"
                                description={`Max ${XXXXX_capacities[1]}`}
                                isRequired
                                size="lg"
                                variant="underlined"
                                type='number'
                                isInvalid={isXXXXXInvalidCapacity}
                                errorMessage="Please Enter Valid Capacity"
                                onValueChange={(value) => {
                                    if (value != null && isNumericString(value)) {
                                        if (parseInt(value) >= 0) {
                                            XXXXX_child_num = parseInt(value);
                                        }
                                    }
                                    setIsXXXXXInvalidCapacity(isInvalidCapacity(XXXXX_adult_num, XXXXX_child_num, XXXXX_capacities))
                                }}
                            />
                        </div>
                        <Button onClick={() => handleBooking("XXXXX")} className="p-sm md:p-md text-lg" >Book Now</Button>
                    </CardFooter>
                </Card>
            </div>

            <div className="mb-x3l">
                <h1 className="text-3xl md:text-5xl font-black text-center select-none mt-xl">XXXXX Chalet</h1>
                <div className="w-full md:w-[120%] h-[120vh] overflow-hidden md:ml-[-10%]" ref={emblaRef2}>
                    <div className="flex">
                        <img
                            className="flex-1 h-[80vh] object-cover md:rounded-2xl m-xl shadow-2xl"
                            src="https://media.gettyimages.com/id/185010957/photo/mountain-log-chalet.jpg?s=612x612&w=0&k=20&c=MV_qneVamVI4f5SkI9Za6_yGICPMKLfoguPih4vqC_o="
                            alt="chalet" />
                        <img
                            className="flex-1 h-[80vh] object-cover md:rounded-2xl m-xl shadow-2xl"
                            src="https://media.gettyimages.com/id/185010957/photo/mountain-log-chalet.jpg?s=612x612&w=0&k=20&c=MV_qneVamVI4f5SkI9Za6_yGICPMKLfoguPih4vqC_o="
                            alt="chalet" />
                        <img
                            className="flex-1 h-[80vh] object-cover md:rounded-2xl m-xl shadow-2xl"
                            src="https://media.gettyimages.com/id/185010957/photo/mountain-log-chalet.jpg?s=612x612&w=0&k=20&c=MV_qneVamVI4f5SkI9Za6_yGICPMKLfoguPih4vqC_o="
                            alt="chalet" />
                    </div>
                </div>
                <Card className="w-[95%] rounded-2xl m-[2.5%] mt-[-110%] md:mt-[-30%] shadow-2xl p-md flex flex-col md:flex-row gap-md ">
                    <div className="flex-1 basis-[60%]">
                        <CardHeader>
                            <h2 className="m-lg my-sm font-bold text-xl">Description</h2>
                        </CardHeader>
                        <CardBody>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et consequatur repellendus quidem reprehenderit enim eveniet? Itaque laboriosam a amet aperiam ullam, obcaecati molestias reiciendis sequi possimus cupiditate, maiores ducimus ipsam.
                        </CardBody>
                    </div>
                    <CardFooter className="justify-center flex-1 flex flex-col gap-md">
                        <DateRangePicker
                            label="Stay duration"
                            onChange={(value: any) => {
                                XXXXX_date = value;
                                setIsXXXXXInvalidDateRange(isInvalidDateRange(XXXXX_date))
                            }}
                            isRequired
                            variant="underlined"
                            description="Pick a range of dates between Friday and Sunday"
                            isInvalid={isXXXXXInvalidDateRange}
                            errorMessage="Please enter dates between Friday and Sunday"
                            className="max-w-xs bg-secondary p-sm rounded-xl"
                        />
                        <div className="flex gap-md">
                            <Input
                                className="bg-secondary p-sm rounded-xl"
                                label="Adults"
                                description={`Max ${XXXXX_capacities[0]}`}
                                isRequired
                                size="lg"
                                variant="underlined"
                                type='number'
                                isInvalid={isXXXXXInvalidCapacity}
                                errorMessage="Please Enter Valid Capacity"
                                onValueChange={(value) => {
                                    if (value != null && isNumericString(value)) {
                                        if (parseInt(value) >= 0) {
                                            XXXXX_adult_num = parseInt(value);
                                        }
                                    }
                                    setIsXXXXXInvalidCapacity(isInvalidCapacity(XXXXX_adult_num, XXXXX_child_num, XXXXX_capacities))
                                }}
                            />
                            <Input
                                className="bg-secondary p-sm rounded-xl"
                                label="Kids"
                                description={`Max ${XXXXX_capacities[1]}`}
                                isRequired
                                size="lg"
                                variant="underlined"
                                type='number'
                                isInvalid={isXXXXXInvalidCapacity}
                                errorMessage="Please Enter Valid Capacity"
                                onValueChange={(value) => {
                                    if (value != null && isNumericString(value)) {
                                        if (parseInt(value) >= 0) {
                                            XXXXX_child_num = parseInt(value);
                                        }
                                    }
                                    setIsXXXXXInvalidCapacity(isInvalidCapacity(XXXXX_adult_num, XXXXX_child_num, XXXXX_capacities))
                                }}
                            />
                        </div>
                        <Button onClick={() => handleBooking("XXXXX")} className="p-sm md:p-md text-lg" >Book Now</Button>
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

        </I18nProvider>
    )
}