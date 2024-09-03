import Link from "next/link";
import { Divider } from "@nextui-org/divider";
import { Card, CardBody, Image, Button, Slider } from "@nextui-org/react";

export const Footer = () => {
    return (
        <footer>
            <div className="flex p-xl pt-xxl bg-secondary">
                <div className="flex-1 text-center">
                    <Link color="foreground" href="#" className="p-md">
                        Home
                    </Link>
                </div>
                <Divider
                    orientation="vertical"
                    className="h-xl"
                />
                <div className="flex-1 text-center">
                    <Link color="foreground" href="#" className="p-md">
                        Our Chalets
                    </Link>
                </div>
                <Divider
                    orientation="vertical"
                    className="h-xl"
                />
                <div className="flex-1 text-center">
                    <Link color="foreground" href="#" className="p-md">
                        My Account
                    </Link>
                </div>
            </div>
            <div className="flex p-xl pb-xxl bg-secondary">
                <div className="basis-2/6 flex-1 text-center">
                    <Card
                        isBlurred
                        className="border-none bg-background"
                        shadow="sm"
                    >
                        <CardBody>
                            <div className="flex shadow-md items-center">
                                <div className="flex-1">
                                    <Image
                                        alt="logo"
                                        className="rounded-full w-9/10 ml-percent1"
                                        src="https://imgs.search.brave.com/Cy3p8CFMTqPdyeaU3Rd7kWQnfWafux7E-EjZCxP8a3E/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wbHVz/cG5nLmNvbS9pbWct/cG5nL21vdW50YWlu/LXBlYWstcG5nLWhk/LW1vdW50YWluLXBu/Zy0xMDUwLnBuZw"
                                    />
                                </div>

                                <div className="flex-1 basis-1/3 m-xl ml-percent1">
                                    <h3 className="text-2xl font-medium">Maunga Club</h3>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias cupiditate aspernatur eum qui eveniet architecto culpa animi adipisci reiciendis accusantium, totam nemo fugiat at voluptas soluta dignissimos magni commodi pariatur.</p>
                                    <br />
                                    <Link color="foreground" href="#" className="p-md">
                                        About Us
                                    </Link>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </div>
                <div className="flex-1 text-right self-end">
                    <h3 className="text-xl font-medium">Contact Us</h3>
                    <p>Phone: 0XX XXX XXX</p>
                    <p>Email: user@example.com</p>
                    
                    <br />
                    <p className="text-foreground/80">Maunga Club© 2024<br/>All rights reserved</p>
                </div>
            </div>
        </footer>
    )
}