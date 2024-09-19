import Link from "next/link";
import Image from 'next/image';
import { Divider } from "@nextui-org/react";
import { Card, CardBody, Button, Slider } from "@nextui-org/react";

export const Footer = () => {

    return (
        <footer className="font-roboto">
            <div className="flex flex-col md:flex-row p-xl pt-xxl bg-secondary">
                <div className="flex-1 text-center my-sm">
                    <Link href="/" className="p-md">
                        Home
                    </Link>
                </div>
                <Divider
                    orientation="vertical"
                    className="h-xl hidden md:inline"
                />
                <div className="flex-1 text-center my-sm">
                    <Link href="/chalets" className="p-md">
                        Our Chalets
                    </Link>
                </div>
                <Divider
                    orientation="vertical"
                    className="h-xl hidden md:inline"
                />
                <div className="flex-1 text-center my-sm">
                    <Link href="/register" className="p-md">
                        Sign Up
                    </Link>
                </div>
            </div>
            <div className="flex flex-col md:flex-row p-xl pb-xxl bg-secondary">
                <div className="basis-2/6 flex-1 text-center">
                    <Card
                        isBlurred
                        className="border-none bg-background"
                        shadow="sm"
                    >
                        <CardBody>
                            <div className="flex flex-col md:flex-row shadow-md items-center">
                                <div className="flex-1">
                                    <Image
                                        src="https://github.com/sonicpanther101/school-website/blob/main/images/Maunga%20Club%20images/Maunga_Club_white.png?raw=true"
                                        alt="Logo"
                                        width={300}
                                        height={100}
                                        className="rounded-b-none w-9/10 ml-auto md:ml-percent1 md:rounded-full"
                                    />
                                </div>

                                <div className="flex-1 basis-1/3 m-xl ml-percent1">
                                    <h3 className="text-2xl font-medium">Maunga Club</h3>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias cupiditate aspernatur eum qui eveniet architecto culpa animi adipisci reiciendis accusantium, totam nemo fugiat at voluptas soluta dignissimos magni commodi pariatur.</p>
                                    <br />
                                    <Link href="/#about" className="p-md">
                                        About Us
                                    </Link>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </div>
                <div className="flex-1 mt-xxl md:mt-auto text-right self-end">
                    <h3 className="text-xl font-medium">Contact Us</h3>
                    <p>Phone: 0XX XXX XXX</p>
                    <p>Email: maungaclub@maungaclub.maungaclub</p>
                    <Link href="https://github.com/sonicpanther101/school-website" className="flex items-center space-x-3 transition hover:text-primary mt-sm">
                        <div className="flex-1"></div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            className="w-lg mr-sm"
                            viewBox="0 0 16 16"
                        >
                            <path
                                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
                            />
                        </svg>
                        <span>Github</span>
                    </Link>
                    <br />
                    <p className="text-foreground/80">Maunga Club© 2024<br />All rights reserved<br />Fake obviously</p>
                </div>
            </div>
        </footer>
    )
}