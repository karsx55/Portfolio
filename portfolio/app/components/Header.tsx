"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@heroui/react";
import Image from "next/image";

export const Profile = () => {
  return (
    <div className="flex flex-row items-center gap-2">
      <Image src="/profile.png" alt="profile" width={50} height={50} />
      <h1>Kartik.</h1>
    </div>
  );
};

export default function Header() {
  return (
    <Navbar position="static" className=" mt-5">
      <NavbarBrand>
        <Link href="/">
          <Profile />
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link aria-current="page" href="#">
            Work
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
