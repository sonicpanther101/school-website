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

  return (
    <Navbar
      isBlurred={false}
      className={`fixed transition-all duration-250 ${isScrolled ? "shadow-md" : "bg-transparent"}`}>
      <NavbarBrand>
        <img
          src="/favicon.ico"
          alt="Logo"
          width={32}
          height={32}
          className="cursor-pointer rounded-full"
        />
        <p className="font-bold text-inherit pl-sm">Maunga Club</p>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#" className="p-xl">
            Home
          </Link>
        </NavbarItem>
        <Divider
          orientation="vertical"
          className="h-xl"
        />
        <NavbarItem>
          <Link color="foreground" href="#" className="p-xl">
            Our Chalets
          </Link>
        </NavbarItem>
        <Divider
          orientation="vertical"
          className="h-xl"
        />
        <NavbarItem>
          <Link href="#" aria-current="page" className="p-xl">
            My Account
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
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
      </NavbarContent>
    </Navbar>
  );
};
