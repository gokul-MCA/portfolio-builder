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
import SignOutBtn from "./SignOutBtn";

const Header = () => {
  const { status, data: session } = useSession();

  return (
    <header className="bg-primary">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <a className="" href="/">
              <span className="sr-only">Home</span>
              <div
                className="bg-dominant rounded"
                style={{
                  backgroundImage: "url(/favicon.ico)",
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  width: "60px", // or any width you desire
                  height: "60px",
                  loading:"eager",
                }}
              />
            </a>
          </div>

          <div className="hidden md:block">
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <a
                    className="text-black relative inline-block group transition hover:text-secondary"
                    href="/"
                  >
                    Home
                    <span className="absolute left-0 bottom-[-2px] h-[2px] w-full bg-transparent transition-colors duration-300 group-hover:bg-dominant"></span>
                  </a>
                </li>

                <li>
                  <a
                    className="text-black relative inline-block group transition hover:text-secondary"
                    href="#"
                  >
                    About
                    <span className="absolute left-0 bottom-[-2px] h-[2px] w-full bg-transparent transition-colors duration-300 group-hover:bg-dominant"></span>
                  </a>
                </li>

                <li>
                  <a
                    className="text-black relative inline-block group transition hover:text-secondary"
                    href="#"
                  >
                    Services
                    <span className="absolute left-0 bottom-[-2px] h-[2px] w-full bg-transparent transition-colors duration-300 group-hover:bg-dominant"></span>
                  </a>
                </li>

                <li>
                  <a
                    className="text-black relative inline-block group transition hover:text-secondary"
                    href="#"
                  >
                    Products
                    <span className="absolute left-0 bottom-[-2px] h-[2px] w-full bg-transparent transition-colors duration-300 group-hover:bg-dominant"></span>
                  </a>
                </li>

                <li>
                  <a
                    className="text-black relative inline-block group transition hover:text-secondary"
                    href="#"
                  >
                    Blog
                    <span className="absolute left-0 bottom-[-2px] h-[2px] w-full bg-transparent transition-colors duration-300 group-hover:bg-dominant"></span>
                  </a>
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
                <SignInBtn className="bg-dominant text-black border rounded p-2 px-4 hover:text-secondary">
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

export default Header;
