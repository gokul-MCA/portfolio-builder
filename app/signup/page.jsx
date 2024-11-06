"use client";

import React from "react";
import { useForm } from "react-hook-form";

export default function SignUp() {
  const {register, handleSubmit, getValues, reset, formState: { errors }} = useForm();
  const onSubmit = async (data) => {
    console.log(data);
  };

  return (
    <section className="">
      <div className="flex flex-col items-center justify-center">
        <h1 className="head1">Welcome</h1>
      </div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="head1">Sign up</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-3 p-6 rounded-lg border"
        >
        
        <button>
          hello
        </button>

        {/* name section contain firstname and lastname */}
        <div className="flex flex-col items-center justify-center gap-3 md:flex-row">
          
          {/* first name */}
          <div className="flex flex-col gap-2">
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
            <span className="text-red-500 text-[8px] md:text-xs">{errors.firstname.message}</span>
          )}
          </div>
          {/* end of first name */}

          {/* last name */}
          <div className="flex flex-col gap-2">
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
            <span className="text-red-500 text-[8px] md:text-xs">{errors.lastname.message}</span>
          )}
          </div>
          {/* end of last name */}

          </div>
          {/* end of name */}


          {/* email */}
          <div className="flex flex-col gap-2">
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
            <span className="text-red-500 text-[8px] md:text-xs">{errors.email.message}</span>
          )}
          </div>
          {/* end of email */}


          {/* password section contain password and confirmPassword */}
          <div className="flex flex-col items-center justify-center gap-3 md:flex-row">

          {/* enter password */}
          <div className="flex flex-col gap-2">
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
            type='password'
            className="bg-white text-black text-sm outline-none h-8 
              rounded-lg indent-2 caret-dominant p-1 
              border-2 active:border-dominant hover:border-dominant lg:h-10"
          />
          {errors.password && (
            <span className="text-red-500 text-[8px] md:text-xs">{errors.password.message}</span>
          )}
          </div>
          {/* end of enter password */}

          {/* password confirm */}
          <div className="flex flex-col gap-2">
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
            <span className="text-red-500 text-[8px] md:text-xs">{errors.confirmPassword.message}</span>
          )}
          </div>
          {/* end of password confirm */}

          </div>
          {/* end of password */}


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
        </form>
      </div>
    </section>
  );
}
