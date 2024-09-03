import Link from "next/link";
import { Divider } from "@nextui-org/divider";
import { Card, CardBody, Image, Button, Slider } from "@nextui-org/react";

export const Footer = () => {
    return (
        <footer>
            <div className="flex p-xl pt-xxl bg-secondary">
                <div className="flex-1 text-center">
                    <Link color="foreground" href="#" className="p-xl">
                        Home
                    </Link>
                </div>
                <Divider
                    orientation="vertical"
                    className="h-xl"
                />
                <div className="flex-1 text-center">
                    <Link color="foreground" href="#" className="p-xl">
                        Our Chalets
                    </Link>
                </div>
                <Divider
                    orientation="vertical"
                    className="h-xl"
                />
                <div className="flex-1 text-center">
                    <Link color="foreground" href="#" className="p-xl">
                        My Account
                    </Link>
                </div>
            </div>
            <div className="flex p-xl pb-xxl bg-secondary">
                <div className="basis-2/6 flex-1 text-center">
                    <Card
                        isBlurred
                        className="border-none bg-secondary"
                        shadow="sm"
                    >
                        <CardBody>
                            <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
                                <div className="relative col-span-6 md:col-span-4">
                                    <Image
                                        alt="Album cover"
                                        className="object-cover"
                                        height={200}
                                        shadow="md"
                                        src="https://nextui.org/images/album-cover.png"
                                        width="100%"
                                    />
                                </div>

                                <div className="flex flex-col col-span-6 md:col-span-8">
                                    <div className="flex justify-between items-start">
                                        <div className="flex flex-col gap-0">
                                            <h3 className="font-semibold text-foreground/90">Daily Mix</h3>
                                            <p className="text-small text-foreground/80">12 Tracks</p>
                                            <h1 className="text-large font-medium mt-2">Frontend Radio</h1>
                                        </div>
                                    </div>

                                    <div className="flex flex-col mt-3 gap-1">
                                        <Slider
                                            aria-label="Music progress"
                                            classNames={{
                                                track: "bg-default-500/30",
                                                thumb: "w-2 h-2 after:w-2 after:h-2 after:bg-foreground",
                                            }}
                                            color="foreground"
                                            defaultValue={33}
                                            size="sm"
                                        />
                                        <div className="flex justify-between">
                                            <p className="text-small">1:23</p>
                                            <p className="text-small text-foreground/50">4:32</p>
                                        </div>
                                    </div>

                                    <div className="flex w-full items-center justify-center">
                                        <Button
                                            isIconOnly
                                            className="data-[hover]:bg-foreground/10"
                                            radius="full"
                                            variant="light"
                                        >
                                        </Button>
                                        <Button
                                            isIconOnly
                                            className="data-[hover]:bg-foreground/10"
                                            radius="full"
                                            variant="light"
                                        >
                                        </Button>
                                        <Button
                                            isIconOnly
                                            className="w-auto h-auto data-[hover]:bg-foreground/10"
                                            radius="full"
                                            variant="light"
                                        >
                                        </Button>
                                        <Button
                                            isIconOnly
                                            className="data-[hover]:bg-foreground/10"
                                            radius="full"
                                            variant="light"
                                        >
                                        </Button>
                                        <Button
                                            isIconOnly
                                            className="data-[hover]:bg-foreground/10"
                                            radius="full"
                                            variant="light"
                                        >
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </div>
                <div className="flex-1 text-right self-end">
                    <p className="text-foreground/80">Maunga Club© 2024<br/>All rights reserved</p>
                </div>
            </div>
        </footer>
    )
}