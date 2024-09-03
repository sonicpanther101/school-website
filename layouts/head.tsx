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

export const Head = () => {

  const [isScrolled, setIsScrolled] = useState(false);

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
        <img
          src="https://imgs.search.brave.com/Cy3p8CFMTqPdyeaU3Rd7kWQnfWafux7E-EjZCxP8a3E/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wbHVz/cG5nLmNvbS9pbWct/cG5nL21vdW50YWlu/LXBlYWstcG5nLWhk/LW1vdW50YWluLXBu/Zy0xMDUwLnBuZw"
          alt="Logo"
          width={32}
          height={32}
          className="cursor-pointer rounded-full"
        />
        <Link href="#" className="font-bold text-inherit pl-sm cursor-pointer">
          Maunga Club
        </Link>
      </NavbarBrand>

      <NavbarContent className="gap-4 hidden md:flex" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#" className="p-xl pb-md">
            Home
          </Link>
        </NavbarItem>
        <Divider
          orientation="vertical"
          className="h-xl"
        />
        <NavbarItem>
          <Link color="foreground" href="#" className="p-xl pb-md">
            Our Chalets
          </Link>
        </NavbarItem>
        <Divider
          orientation="vertical"
          className="h-xl"
        />
        <NavbarItem>
          <Link href="#" aria-current="page" className="p-xl pb-md">
            My Account
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden md:flex">
          <Link href="#" className="p-xl">
            Login
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat" className="mr-xl p-sm rounded-full">
            Sign Up
          </Button>
        </NavbarItem>
        <Divider
          orientation="vertical"
          className="h-xl"
        />
        <NavbarItem>
          <ThemeSwitch className="ml-xl"/>
        </NavbarItem>
        <NavbarItem>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          // className="md:hidden"
          />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};
