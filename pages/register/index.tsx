import { Head } from "@/layouts/head";
import { Footer } from "@/layouts/footer";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Button as NextUIButton } from "@nextui-org/button";
import { Input } from "@nextui-org/react";

import { useState, useEffect } from "react";

import { EyeFilledIcon } from "@/layouts/EyeFilledIcon";
import { EyeSlashFilledIcon } from "@/layouts/EyeSlashFilledIcon";

import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

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

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

export default function IndexPage() {

    const [isVisible, setIsVisible] = useState(false);
    const toggleVisibility = () => setIsVisible(!isVisible);

    const [firstName, setFirstName] = useState('');
    const [firstNameError, setFirstNameError] = useState(false);

    const [lastName, setLastName] = useState('');
    const [lastNameError, setLastNameError] = useState(false);

    const [address, setAddress] = useState('');
    const [addressError, setAddressError] = useState(false);

    const [proofOfAddressFile, setProofOfAddressFile] = useState<File | null>(null);
    const [proofOfAddressError, setProofOfAddressError] = useState(false);

    const [proofOfIDFile, setProofOfIDFile] = useState<File | null>(null);
    const [proofOfIDError, setProofOfIDError] = useState(false);

    const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFirstName(e.target.value);
        setFirstNameError(e.target.value.trim() === '' || e.target.value.trim().length >= 10);
    };

    const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLastName(e.target.value);
        setLastNameError(e.target.value.trim() === '' || e.target.value.trim().length >= 10);
    };

    const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAddress(e.target.value);
        setAddressError(e.target.value.trim() === '');
    };

    const [signedIn, setSignedIn] = useState<null | boolean>(null);

    const submitRegistration = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setFirstNameError(firstName.trim() === '');
        setLastNameError(lastName.trim() === '');
        setAddressError(address.trim() === '');
        setProofOfAddressError(!proofOfAddressFile);
        setProofOfIDError(!proofOfIDFile);
        
        if (!firstNameError && !lastNameError && !addressError && proofOfAddressFile && proofOfIDFile) {
            setSignedIn(true);
            localStorage.setItem('signed-in', JSON.stringify(true));
            localStorage.setItem('first-name', firstName);

            window.location.href = '/';
        }
    };

    useEffect(() => {
        const storedData = localStorage.getItem('signed-in');
        if (storedData) {
            setSignedIn(JSON.parse(storedData));
        }
    }, []);

    useEffect(() => {
        if (signedIn !== null) {
            localStorage.setItem('signed-in', JSON.stringify(signedIn));
        }
    }, [signedIn]);


    return (
        <div className="overflow-hidden">
            <Head />

            <Card className="w-[90%] lg:w-[40%] mx-[5%] lg:mx-[30%] my-[20%] lg:my-[10%] h-[85vh] lg:h-[70vh] flex flex-col">
                <CardHeader className="flex">
                    <h1 className="text-5xl font-black m-xl">Register</h1>
                </CardHeader>
                <CardBody className="m-lg flex-1 flex items-center">
                    <p className="text-lg mr-xl">Register a new account</p>

                    <form className="flex flex-col gap-lg items-center my-sm w-[90%] lg:w-auto ml-[-12.5%] lg:ml-none" onSubmit={submitRegistration} autoComplete="on">
                        <div className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-2 mb-4 gap-lg">
                            <Input
                                type="text"
                                label="First name"
                                variant="underlined"
                                className="p-sm bg-background rounded-full"
                                value={firstName}
                                onChange={handleFirstNameChange}
                                isInvalid={firstNameError}
                                errorMessage="Please Enter First Name"
                            />
                            <Input
                                type="text"
                                label="Last name"
                                variant="underlined"
                                className="p-sm bg-background rounded-full"
                                value={lastName}
                                onChange={handleLastNameChange}
                                isInvalid={lastNameError}
                                errorMessage="Please Enter Last Name"
                            />
                        </div>

                        <Input
                            type="text"
                            label="Physical address"
                            variant="underlined"
                            className="w-auto lg:w-full p-sm bg-background rounded-full"
                            value={address}
                            onChange={handleAddressChange}
                            isInvalid={addressError}
                            errorMessage="Please Enter Address"
                        />

                        <Button
                            component="label"
                            role={undefined}
                            className={`w-2/3 lg:w-full bg-background ${proofOfAddressError ? 'text-red-600' : ''}`}
                            variant="contained"
                            tabIndex={-1}
                            startIcon={<CloudUploadIcon />}
                        >
                            Upload proof of address (eg copy of power bill)
                            <VisuallyHiddenInput
                                type="file"
                                onChange={(event: any) => {
                                    setProofOfAddressFile(event.target.files?.[0] ?? null);
                                    setProofOfAddressError(!event.target.files?.[0]);
                                }}
                                multiple
                            />
                        </Button>

                        <Button
                            component="label"
                            role={undefined}
                            className={`w-2/3 lg:w-full bg-background ${proofOfIDError ? 'text-red-600' : ''}`}
                            variant="contained"
                            tabIndex={-1}
                            startIcon={<CloudUploadIcon />}
                        >
                            proof of ID (eg driver’s licence or passport)
                            <VisuallyHiddenInput
                                type="file"
                                onChange={(event: any) => {
                                    setProofOfIDFile(event.target.files?.[0] ?? null);
                                    setProofOfIDError(!event.target.files?.[0]);
                                }}
                                multiple
                            />
                        </Button>
                        
                        <NextUIButton
                            className="w-x4l p-sm"
                            type="submit"
                        >
                            Sign up &rarr;
                        </NextUIButton>
                    </form>
                </CardBody>
                
                <CardFooter>
                    <p className="text-lg m-md">Already have an account? Too bad, I was only given a week. Reregister.</p>
                </CardFooter>
            </Card>

            <Footer />
        </div>
    )
}