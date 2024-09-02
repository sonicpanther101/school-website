import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem
} from "@nextui-org/navbar";

import Link from "next/link";
import { Button, ButtonGroup } from "@nextui-org/button";


export const Head = () => {
  return (
    <Navbar shouldHideOnScroll>
      <NavbarBrand>
        <img
          src="/favicon.ico"
          alt="Logo"
          width={32}
          height={32}
          className="cursor-pointer rounded-full"
        />
        <p className="font-bold text-inherit">Maunga Club</p>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <ButtonGroup>
          <NavbarItem>
            <Link color="foreground" href="#" className="p-4">
              Home
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#" className="p-4">
              Our Chalets
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link href="#" aria-current="page" className="p-4">
              My Account
            </Link>
          </NavbarItem>
        </ButtonGroup>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};
