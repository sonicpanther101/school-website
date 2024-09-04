import { Head } from "@/layouts/head";
import { Footer } from "@/layouts/footer";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Button } from "@nextui-org/button";
import { DateRangePicker } from "@nextui-org/date-picker";
import { Input } from "@nextui-org/input";

import { parseDate } from "@internationalized/date";

import { I18nProvider } from "@react-aria/i18n";

import { useState } from 'react';

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

let XXXXX_adult_num: number = 1;
let XXXXX_child_num: number = 1;

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

    if (chalet == "XXXX") {
        date_range = XXXXX_date;
        adult_num = XXXXX_adult_num;
        child_num = XXXXX_child_num;
        capacities = XXXXX_capacities;
    } else {
        return
    }


    
    if (date_range.end.compare(date_range.start) <= 2 &&
        date_range.end.compare(date_range.start) >= 0 &&
        date_range.start.toDate("Pacific/Auckland").getDay() % 5 <= 1 &&
        date_range.end.toDate("Pacific/Auckland").getDay() % 5 <= 1 &&
        date_range.start.toDate("Pacific/Auckland").getDay() != 1 &&
        date_range.end.toDate("Pacific/Auckland").getDay() != 1) {
        console.log("valid");
    } else {
        console.log("invalid");
    }
};


export default function IndexPage() { 

    const [isXXXXXInvalidCapacity, setIsXXXXXInvalidCapacity] = useState(false);
    const [isXXXXXInvalidDateRange, setIsXXXXXInvalidDateRange] = useState(false);

    return (
        <I18nProvider locale = "en-GB">
            <Head />

            <div className="absolute w-full h-[30vh] z-10 flex flex-col justify-center items-center">
                <h1 className="text-5xl md:text-7xl font-black text-center select-none">Our Chalets</h1>
            </div>
            <div className="h-[30vh]"></div>

            <div>
                <h1 className="text-3xl md:text-5xl font-black text-center select-none">XXXXX Chalet</h1>
                <img
                    className="w-[90%] h-[70vh] object-cover rounded-2xl m-[5%] shadow-2xl"
                    src="https://media.gettyimages.com/id/185010957/photo/mountain-log-chalet.jpg?s=612x612&w=0&k=20&c=MV_qneVamVI4f5SkI9Za6_yGICPMKLfoguPih4vqC_o="
                    alt="chalet" />
                <Card className="w-[95%] object-cover rounded-2xl m-[2.5%] mt-[-10%] shadow-2xl p-md flex flex-col md:flex-row gap-md">
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
                <h1 className="text-3xl md:text-5xl font-black text-center select-none">XXXXX Chalet</h1>
                <img
                    className="w-[90%] h-[70vh] object-cover rounded-2xl m-[5%] shadow-2xl"
                    src="https://media.gettyimages.com/id/185010957/photo/mountain-log-chalet.jpg?s=612x612&w=0&k=20&c=MV_qneVamVI4f5SkI9Za6_yGICPMKLfoguPih4vqC_o="
                    alt="chalet" />
                <Card className="w-[95%] object-cover rounded-2xl m-[2.5%] mt-[-10%] shadow-2xl p-md flex flex-col md:flex-row gap-md">
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

            <div className="mb-x4l">
                <h1 className="text-3xl md:text-5xl font-black text-center select-none">XXXXX Chalet</h1>
                <img
                    className="w-[90%] h-[70vh] object-cover rounded-2xl m-[5%] shadow-2xl"
                    src="https://media.gettyimages.com/id/185010957/photo/mountain-log-chalet.jpg?s=612x612&w=0&k=20&c=MV_qneVamVI4f5SkI9Za6_yGICPMKLfoguPih4vqC_o="
                    alt="chalet" />
                <Card className="w-[95%] object-cover rounded-2xl m-[2.5%] mt-[-10%] shadow-2xl p-md flex flex-col md:flex-row gap-md">
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
        </I18nProvider>
    )
}