import { Head } from "@/layouts/head";
import { Footer } from "@/layouts/footer";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/react";

import { useState } from "react";

import { EyeFilledIcon } from "@/layouts/EyeFilledIcon";
import { EyeSlashFilledIcon } from "@/layouts/EyeSlashFilledIcon";

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

function submitRegistration() {
    
}


export default function IndexPage() {

    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => setIsVisible(!isVisible);

    return (
        <div className="overflow-hidden">
            <Head />

            <Card className="w-[90%] m-[5%] mt-[10%] h-[70vh] flex flex-col">
                <CardHeader>
                    <h1 className="text-5xl font-black m-xl">Register</h1>
                </CardHeader>
                <CardBody className="m-lg">
                    <p className="text-lg">Register a new account</p>
                    <form className="flex flex-col my-sm" onSubmit={submitRegistration} autoComplete="on">
                        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                            <Input
                                type="text"
                                label="First name"
                                variant="bordered"
                                placeholder="Adam"
                                defaultValue="junior@nextui.org"
                                onClear={() => console.log("input cleared")}
                                className="max-w-xs"
                            />
                            <Input
                                type="text"
                                label="Last name"
                                variant="bordered"
                                placeholder="Beattie"
                                defaultValue="junior@nextui.org"
                                onClear={() => console.log("input cleared")}
                                className="max-w-xs"
                            />
                        </div>
                        <Input
                            isClearable
                            type="email"
                            label="Email"
                            variant="bordered"
                            placeholder="Enter your email"
                            defaultValue="junior@nextui.org"
                            onClear={() => console.log("input cleared")}
                            className="max-w-xs"
                        />
                        <Input
                            label="Password"
                            variant="bordered"
                            placeholder="Enter your password"
                            endContent={
                                <button className="focus:outline-none" type="button" onClick={toggleVisibility} aria-label="toggle password visibility">
                                    {isVisible ? (
                                        <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                                    ) : (
                                        <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                                    )}
                                </button>
                            }
                            type={isVisible ? "text" : "password"}
                            className="max-w-xs"
                        />
                        <Button
                            className="w-x4l"
                            type="submit"
                        >
                            Sign up &rarr;
                        </Button>
                    </form>
                </CardBody>
                <CardFooter>
                    <p className="text-lg">Already have an account? Too bad, I was only given a week.</p>
                </CardFooter>
            </Card>

            <Footer />
        </div>
    )
}