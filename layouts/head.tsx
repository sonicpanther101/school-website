import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem
} from "@nextui-org/navbar";

import { Divider } from "@nextui-org/divider";

import { useEffect, useState } from "react";

import { ThemeSwitch } from "@/components/theme-switch";

import Link from "next/link";
import { Button, ButtonGroup } from "@nextui-org/button";

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

export const Head = () => {

  const [isScrolled, setIsScrolled] = useState(false);

  const [signedIn, setSignedIn] = useState(null);

  const [name, setName] = useState("");

  useEffect(() => {
    const storedName = localStorage.getItem('first-name');
    if (storedName) {
      setName(storedName);
    }
  }, []);

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

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar
      isBlurred={false}
      onMenuOpenChange={setIsMenuOpen}
      className={`fixed transition-all duration-250 ${isScrolled ? "shadow-md bg-secondary" : "bg-transparent"}`}>
      <NavbarBrand>
        <Link href="/">
          <img
            src="https://imgs.search.brave.com/Cy3p8CFMTqPdyeaU3Rd7kWQnfWafux7E-EjZCxP8a3E/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wbHVz/cG5nLmNvbS9pbWct/cG5nL21vdW50YWlu/LXBlYWstcG5nLWhk/LW1vdW50YWluLXBu/Zy0xMDUwLnBuZw"
            alt="Logo"
            width={32}
            height={32}
            className="cursor-pointer rounded-full ml-xl"
          />
        </Link>
        <Link href="/" className="font-bold text-inherit pl-sm cursor-pointer">
          Maunga Club
        </Link>
      </NavbarBrand>

      <NavbarContent className="gap-4 hidden md:flex" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/" className="p-xl pb-md">
            Home
          </Link>
        </NavbarItem>
        <Divider
          orientation="vertical"
          className="h-xl"
        />
        <NavbarItem>
          <Link color="foreground" href="/chalets" className="p-xl pb-md">
            Our Chalets
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="signed-out">
          <Button as={Link} color="primary" href="/register" variant="flat" className="mr-xl p-sm rounded-full bg-secondary">
            Sign Up
          </Button>
        </NavbarItem>
        <NavbarItem className="signed-in">
          <h1 color="primary" className="mr-xl p-sm rounded-full">
            Hi, {name}!
          </h1>
        </NavbarItem>
        <NavbarItem>
          <NavbarMenuToggle
            icon={isMenuOpen ? "🞤" : "≡"}
            className={`w-xl h-xl md:hidden mr-xl rounded-full bg-secondary text-lg font-black ${isMenuOpen ? "rotate-45" : ""}`}
          />
        </NavbarItem>
        <Divider
          orientation="vertical"
          className="h-xl"
        />
        <NavbarItem>
          <ThemeSwitch className="ml-xl hidden md:flex"/>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="flex items-center flex-col">
      <NavbarMenuItem className="flex-1 basis-1/10"></NavbarMenuItem>
        <NavbarMenuItem className="flex-1">
          <Link color="foreground" href="/" className="p-md">
            Home
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem className="flex-1">
          <Link color="foreground" href="/chalets" className="p-md">
            Our Chalets
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem className="flex-1">
          <Link href="/register" className="p-md">
            Register
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem className="flex-1 basis-1/2"></NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
};
