"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import SignInBtn from "./SignInBtn";
import React from "react";

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
import Image from "next/image";
import GetStarted from "./GetStarted";
import SignOutBtn from "./SignOutBtn";

const Navbar = () => {
  const { status, data: session } = useSession();

  return (
    <header className="bg-[#2c6e49]">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <a className="block text-teal-600 dark:text-teal-600" href="/">
              <span className="sr-only">Home</span>
              <Image src='/favicon.ico' alt="portfolio builder" width={80} height={80} loading="eager" />
            </a>
          </div>

          <div className="hidden md:block">
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <a className="text-[#fefee3] transition hover:text-black" href="#"> About </a>
                </li>
    
                <li>
                  <a className="text-gray-700 transition hover:text-black" href="#"> Services </a>
                </li>
    
                <li>
                  <a className="text-gray-700 transition hover:text-black" href="#"> Projects </a>
                </li>
    
                <li>
                  <a className="text-gray-700 transition hover:text-black" href="#"> Blog </a>
                </li>
              </ul>
            </nav>
          </div>


          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              {status === "authenticated" ? (
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <Image
                      src={session?.user?.image}
                      alt={session?.user?.name}
                      loading="eager"
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-auto" align="">
                    <DropdownMenuGroup></DropdownMenuGroup>
                    {/* Switch Account */}
                    {/* <SignInBtn>
                      <DropdownMenuItem
                        onClick={() => {
                          //Sign out the user first
                          signOut({
                            redirect: false,
                            callbackUrl: "/auth/signin?session=clear", // Clear session and redirect to sign-in
                          }).then(() => {
                            window.location.href =
                              "https://accounts.google.com/Logout?continue"; // Ensure to replace 'https://app.example.com' with your app's URL
                          });
                        }}
                      >
                        Switch Account
                      </DropdownMenuItem>
                    </SignInBtn> */}
                    <DropdownMenuItem>
                      <SignOutBtn>Sign Out</SignOutBtn>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <SignInBtn className="bg-white text-black border rounded hover:border-lime-400 p-2 px-4 hover:bg-black hover:text-white">
                  Sign In
                </SignInBtn>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
