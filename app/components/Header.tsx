"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
} from "@heroui/react";
import Image from "next/image";
import React from "react";

export const Profile = () => {
  return (
    <div className="flex flex-row items-center gap-2">
      <Image src="/profile.png" alt="profile" width={50} height={50} />
      <h1>Kartik.</h1>
    </div>
  );
};

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Home",
    "Work",
    "Resume",
    "Contact",
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className="navbar-top bg-background/70 backdrop-blur-md">
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden text-white"
        />
        <NavbarBrand>
          <Link href="/" className="text-white">
            <Profile />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">

        <NavbarItem>
          <Link color="foreground" href="/Work" className="text-lg hover:text-primary transition-colors">
            Work
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/Resume" className="text-lg hover:text-primary transition-colors">
            Resume
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/Contact" className="text-lg hover:text-primary transition-colors">
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="bg-background/90 pt-8">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full text-2xl font-bold py-2"
              color="foreground"
              href={item === "Home" ? "/" : `/${item}`}
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
