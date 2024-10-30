"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import SignInBtn from "./SignInBtn";
import React, { useEffect, useState } from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import SignOutBtn from "./SignOutBtn";
import { Cross1Icon, HamburgerMenuIcon } from "@radix-ui/react-icons";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Products", href: "/products" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];
const Header = () => {
  const { status, data: session } = useSession();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  // Detect scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header className="bg-primary">
        {/* only laptop screens */}
        <div className="hidden lg:block">
          <nav
            aria-label="Global"
            className={`h-16  font-extrabold  flex items-center justify-around  py-6 px-8 
              fixed inset-x-0 top-0 backdrop-blur-xl z-50 
              ${
                scrolling
                  ? "bg-transparent border border-b-2"
                  : "bg-primary bg-opacity-90"
              }`}
          >
            {/* logo */}
            <a className="" href="/">
              <span className="sr-only">Home</span>
              <div
                className="bg-dominant rounded w-14 h-14"
                style={{
                  backgroundImage: "url(/favicon.ico)",
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  loading: "lazy",
                }}
              />
            </a>
            {/* links */}
            <ul className="flex items-center gap-10">
              {navigation.map((item) => (
                <li key={item.href}>
                  <a
                    className={`font-extrabold relative inline-block group transition hover:text-secondary ${
                      scrolling ? "text-secondary" : "text-black"
                    }`}
                    href={item.href}
                  >
                    {item.name}
                    <span className="absolute left-0 bottom-[-2px] h-[2px] w-full bg-transparent transition-colors duration-300 group-hover:bg-dominant"></span>
                  </a>
                </li>
              ))}
            </ul>
            {/* login */}
            <div className="flex items-center gap-4">
              {status === "authenticated" ? (
                <DropdownMenu>
                  <DropdownMenuTrigger aria-label="User menu" className="focus:outline-none">
                    <Image
                      src={session?.user?.image}
                      alt={session?.user?.name || "User Profile"}
                      loading="eager"
                      width={40}
                      height={40}
                      className="rounded-full ring-4 ring-dominant"
                    />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-primary rounded-b-3xl border-none w-[120px]" align="">
                    <DropdownMenuItem className={`bg-dominant rounded-3xl border-0 hover:text-secondary hover:border hover:border-secondary`}>
                      <SignOutBtn className="p-1 text-center w-full">Sign Out</SignOutBtn>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <>
                  <SignInBtn className="bg-dominant text-black transition border-2 border-dominant rounded p-2 px-4 hover:text-secondary hover:border-secondary active:bg-white">
                    Sign In
                  </SignInBtn>
                  <button className="bg-white text-black transition border-2 border-dominant rounded p-2 px-4 hover:text-secondary hover:border-secondary active:bg-white">
                    Sign Up
                  </button>
                </>
              )}
            </div>
          </nav>
        </div>

        {/* smaller screens */}
        <div className="lg:hidden">
          <nav
            aria-label="Global"
            className={`h-14 text-sm flex items-center justify-between 
              fixed inset-x-0 top-0 p-4 md:p-6 backdrop-blur-sm z-50 
              ${
                scrolling
                  ? "bg-transparent border border-b-2"
                  : "bg-primary bg-opacity-90"
              }`}
          >
            <div className="w-[30%] flex gap-3 md:gap-5">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2 md:p-2.5 text-black"
              >
                <span className="sr-only">Open main menu</span>
                <HamburgerMenuIcon
                  aria-hidden="true"
                  className="h-5 w-5 md:h-6 md:w-6 hover:text-secondary"
                />
              </button>
              {/* logo */}
              <a className="" href="/">
                <span className="sr-only">Home</span>
                <div
                  className="bg-dominant rounded w-10 h-10 md:w-12 md:h-12"
                  style={{
                    backgroundImage: "url(/favicon.ico)",
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    loading: "lazy",
                  }}
                />
              </a>
            </div>
            {/* mobile menu and links */}
            <Sheet
              open={mobileMenuOpen}
              //   onClose={setMobileMenuOpen}
              className="lg:hidden "
              aria-label="side menu"
            >
              <SheetContent
                className="bg-primary text-black w-full"
                side="left"
              >
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1 absolute top-4 right-4 rounded-full border border-black hover:text-secondary hover:border-2 hover:border-dominant"
                >
                  <span className="sr-only">Close menu</span>
                  <Cross1Icon
                    aria-hidden="true"
                    className="h-5 w-5 md:h-6 md:w-6"
                  />
                </button>
                <nav aria-label="Global" className="mt-10">
                  <ul className="text-sm block space-y-6 text-center ">
                    {navigation.map((item) => (
                      <li key={item.href}>
                        <a
                          className="relative inline-block group transition p-1 px-2 border-2 border-primary rounded-md hover:text-secondary hover:border-dominant"
                          href={item.href}
                        >
                          {item.name}
                          {/* <span className="absolute left-0 bottom-[-2px] h-[2px] w-full bg-transparent transition-colors duration-300 group-hover:bg-dominant"></span> */}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </SheetContent>
            </Sheet>
            {/* login */}
            <div className="flex items-center gap-4">
              {status === "authenticated" ? (
                <DropdownMenu>
                  <DropdownMenuTrigger aria-label="User menu" className="focus:outline-none">
                    <Image
                      src={session?.user?.image}
                      alt={session?.user?.name || "User Profile"}
                      loading="eager"
                      width={40}
                      height={40}
                      className="rounded-full ring ring-dominant md:ring-4"
                    />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-primary rounded-b-3xl border-none outline-none w-[100px] md:w-[120px]" align="">
                    <DropdownMenuItem className={`bg-dominant rounded-3xl border-0 hover:text-secondary hover:border hover:border-secondary`}>
                      <SignOutBtn className={`p-0.5 w-full text-center text-xs md:text-sm`}>Sign Out</SignOutBtn>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <>
                  <SignInBtn className="bg-dominant text-black transition border-2 border-dominant rounded p-1.5 px-1.5 md:p-2 md:px-2 hover:text-secondary hover:border-secondary">
                    Sign In
                  </SignInBtn>
                  <button className="bg-white text-black transition border-2 border-dominant rounded p-1.5 px-1.5 md:p-2 md:px-2 hover:text-secondary hover:border-secondary hidden sm:block">
                    Sign Up
                  </button>
                </>
              )}
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
