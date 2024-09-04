import { Head } from "@/layouts/head";
import { Footer } from "@/layouts/footer";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Button } from "@nextui-org/button";

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
    return 0
}


export default function IndexPage() {

    return (
        <div className="overflow-hidden">
            <Head />

            <Card>
                <CardHeader>
                    <h1 className="text-5xl font-black">Register</h1>
                </CardHeader>
                <CardBody>
                    <p className="text-lg">Register a new account</p>
                </CardBody>
                <CardFooter>
                    <Button onClick={() => {submitRegistration()}}>Register</Button>
                </CardFooter>
            </Card>

            <Footer />
        </div>
    )
}