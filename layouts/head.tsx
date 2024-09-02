import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem
} from "@nextui-org/navbar";

import { ThemeSwitch } from "@/components/theme-switch";

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
            <Link color="foreground" href="#" className="p-4 m-xl">
              <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl p-sm">
                  Home
                </span>
              </button>
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
        <NavbarItem>
          <ThemeSwitch className="ml-xl"/>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};
