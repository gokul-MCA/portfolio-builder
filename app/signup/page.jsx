"use client";

import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

export default function SignUp() {
  const {
    register,
    handleSubmit,
    getValues,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
  };

  return (
    <section className="mt-16">
      <div className="flex flex-col items-center justify-center px-12 py-6 lg:py-3">
        <h1 className="head2 mb-4">Sign up</h1>
        <div
          className="min-w-72 w-full max-w-lg p-6 rounded-lg 
          border-2 border-dominant hover:border-secondary  
          hover:bg-primary hover:shadow-lg active:bg-primary
          transition-colors duration-300 ease-in-out md:p-8"
        >
          {/* continue with google  */}
          <button
            className="px-4 py-2 flex items-center gap-2 rounded-lg m-auto bg-white border-2
        border-black hover:border-dominant hover:shadow transition duration-150 active:bg-dominant"
          onClick={(e)=> signIn('google')}>
            <Image
              className="w-7  h-7"
              src="/google-icon.svg"
              loading="eager"
              alt="google logo"
              width="0"
              height="0"
            />
            <span className="text-sm md:text-base">Continue with Google</span>
          </button>
          {/* end of google button */}

          <span className="flex items-center text-center text-sm mt-5">
            <span className="h-px flex-1 bg-black"></span>
            <span className="shrink-0 px-4 ">or</span>
            <span className="h-px flex-1 bg-black"></span>
          </span>
          {/* <p className="text-center text-sm mt-5">or</p> */}

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid gap-4 md:gap-6 mt-2 md:mt-5"
          >
            {/* first name */}
            <div className="flex flex-col col-span-2 md:col-span-1 gap-2">
              <label
                htmlFor="firstname"
                className="text-sm font-semibold md:text-base lg:font-extrabold pointer-events-none"
              >
                First name
              </label>
              <input
                {...register("firstname", {
                  required: "First name is required",
                  pattern: {
                    value: /^[a-zA-Z]{2,}$/,
                    message: "First name is not valid",
                  },
                })}
                id="firstname"
                autoFocus
                className="bg-white text-black text-sm outline-none h-8 
              rounded-lg indent-2 caret-dominant p-1 
              border-2 active:border-dominant hover:border-dominant lg:h-10"
                aria-label="enter your firstname"
              />
              {errors.firstname && (
                <span className="text-red-500 text-xs">
                  {errors.firstname.message}
                </span>
              )}
            </div>
            {/* end of first name */}

            {/* last name */}
            <div className="flex flex-col col-span-2 md:col-span-1 gap-2">
              <label
                htmlFor="lastname"
                className="text-sm font-semibold md:text-base lg:font-extrabold pointer-events-none"
              >
                Last name
              </label>
              <input
                {...register("lastname", {
                  required: "Last name is required",
                  pattern: {
                    value: /^[a-zA-Z]{1,}$/,
                    message: "Last name is not valid",
                  },
                })}
                id="lastname"
                className="bg-white text-black text-sm outline-none h-8 
              rounded-lg indent-2 caret-dominant p-1 
              border-2 active:border-dominant hover:border-dominant lg:h-10"
                aria-label="enter your lastname"
              />
              {errors.lastname && (
                <span className="text-red-500 text-xs">
                  {errors.lastname.message}
                </span>
              )}
            </div>
            {/* end of last name */}

            {/* email */}
            <div className="flex flex-col col-span-2 gap-2">
              <label
                htmlFor="email"
                className="text-sm font-semibold md:text-base lg:font-extrabold pointer-events-none"
              >
                Email
              </label>
              <input
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Please enter a valid email address.",
                  },
                })}
                id="email"
                className="bg-white text-black text-sm outline-none h-8 
              rounded-lg indent-2 caret-dominant p-1 
              border-2 active:border-dominant hover:border-dominant lg:h-10"
              />
              {errors.email && (
                <span className="text-red-500 text-xs">
                  {errors.email.message}
                </span>
              )}
            </div>
            {/* end of email */}

            {/* password enter */}
            <div className="flex flex-col col-span-2 md:col-span-1 gap-2">
              <label
                htmlFor="password"
                className="text-sm font-semibold md:text-base lg:font-extrabold pointer-events-none"
              >
                Password
              </label>
              <input
                {...register("password", {
                  required: "Password is required",
                  pattern: {
                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@&]{8,}$/,
                    message: "Password must be at least 8 characters long",
                    // include at least one uppercase letter, one lowercase letter, and one number.
                  },
                })}
                id="password"
                type="password"
                className="bg-white text-black text-sm outline-none h-8 
              rounded-lg indent-2 caret-dominant p-1 
              border-2 active:border-dominant hover:border-dominant lg:h-10"
              />
              {errors.password && (
                <span className="text-red-500 text-xs">
                  {errors.password.message}
                </span>
              )}
            </div>
            {/* end of enter password */}

            {/* Confirm password */}
            <div className="flex flex-col col-span-2 md:col-span-1 gap-2">
              <label
                htmlFor="confirmPassword"
                className="text-sm font-semibold md:text-base lg:font-extrabold pointer-events-none"
              >
                Confirm password
              </label>
              <input
                {...register("confirmPassword", {
                  required: "Re-enter password is required",
                  validate: (value) => {
                    const { password } = getValues();
                    return password === value || "Passwords do not match";
                  },
                })}
                id="confirmPassword"
                className="bg-white text-black text-sm outline-none h-8 
              rounded-lg indent-2 caret-dominant p-1 
              border-2 active:border-dominant hover:border-dominant lg:h-10"
              />
              {errors.confirmPassword && (
                <span className="text-red-500 text-xs">
                  {errors.confirmPassword.message}
                </span>
              )}
            </div>
            {/* end of password confirm */}

            {/* Submit Button */}
            <div className="flex flex-col col-span-2 gap-2">
              <button
                type="submit"
                className="bg-dominant text-black rounded p-2 px-4 text-sm font-semibold
            border-2 border-dominant hover:border-secondary hover:text-secondary
            transition-colors duration-300 ease-in-out
            active:transform active:scale-95 active:transition-all lg:text-base"
                aria-label="Submit your message to Portfolio Builder"
              >
                Create an account
              </button>
            </div>
            {/* end of button */}
          </form>

          <p className="mt-10 text-center text-sm">
            Already on Portfolio Builder?{" "}
            <Link href="/signin" className="text-base font-semibold">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
