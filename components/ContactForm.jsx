"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Status from "./Status";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },reset,
  } = useForm();

  const [status, setStatus] = useState({ message: "", type: "" });
  const [submit, setSubmit] = useState(0);

  const onSubmit = async (data) => {
      setSubmit(1);
      try {
        const response = await fetch("/api/sendEmail", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });
        if (response.ok) {
          setSubmit(0);
          setStatus({ message: "Email sent successfully!", type: "success" });
          reset(); // This will reset all form fields to their default values comes with react hook form
        } else {
          setStatus({ message: "Failed to send email!", type: "error" });
        }
      } catch (error) {
        console.error("Error:", error);
        setStatus({ message: "An error occurred.", type: "error" });
      }
      setTimeout(() => {
        setStatus({ message: "", type: "" });
      }, 2000); // Hide notification after 3 seconds
    }

  return (
    <section className="mt-16">
      <div className="flex flex-col items-center justify-center  px-4 py-6 lg:py-3 ">
        <h1 className="head1 mt-8">Contact Us</h1>
        <div className="my-12">
          {/* form and validation */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="min-w-72 w-auto flex flex-col gap-4 p-6 rounded-lg 
          border-2 border-dominant hover:border-secondary  
          hover:bg-primary hover:shadow-lg active:bg-primary
          transition-colors duration-300 ease-in-out 
          md:w-[380px] md:gap-6 md:p-8
          lg:w-[500px] lg:gap-8 lg:p-10"
          >
            {/* name */}
            <div className="flex flex-col gap-1 md:gap-2">
              <label
                htmlFor="name"
                className="text-sm font-semibold md:text-base lg:font-extrabold pointer-events-none"
              >
                Company name
              </label>
              <input
                id="name"
                autoFocus
                {...register("userName", {
                  required: "Name is required",
                  pattern: {
                    value: /^[a-zA-Z\s]+$/,
                    message:
                      "Name must contain only alphabetic characters and spaces.",
                  },
                  minLength: {
                    value: 2,
                    message: "Name must be at least 2 characters long.",
                  },
                })}
                className="bg-white text-black text-sm outline-none h-8 
              rounded-lg indent-2 caret-dominant p-1 
              border-2 active:border-dominant hover:border-dominant lg:h-10"
              />
              {errors.userName && (
                <span className="text-[8px] md:text-xs indent-0 lg:indent-2 text-red-600">
                  {errors.userName.message}
                </span>
              )}
            </div>
            {/* end of name  */}

            {/* email */}
            <div className="flex flex-col gap-1 md:gap-2">
              <label
                htmlFor="email"
                className="text-sm font-semibold md:text-base lg:font-extrabold pointer-events-none"
              >
                Company email
              </label>
              <input
                id="email"
                {...register("userEmail", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Please enter a valid email address.",
                  },
                })}
                className="bg-white text-black text-sm outline-none h-8 
              rounded-lg indent-2 caret-dominant p-1 
              border-2 active:border-dominant hover:border-dominant lg:h-10"
              />
              {errors.userEmail && (
                <span className="text-[8px] md:text-xs indent-0 lg:indent-2 text-red-600">
                  {errors.userEmail.message}
                </span>
              )}
            </div>
            {/* end of email */}

            {/* message */}
            <div className="flex flex-col gap-1 md:gap-2">
              <label
                htmlFor="message"
                className="text-sm font-semibold md:text-base lg:font-extrabold pointer-events-none"
              >
                How can we help?
              </label>
              <textarea
                name="textarea"
                {...register("userTextarea", {
                  required: "Message is required",
                  validate: {
                    minWords: (value) => {
                      const wordCount = value.trim().split(/\s+/).length;
                      if (wordCount < 10) {
                        return "Please enter a message with at least 10 words.";
                      }
                      return true;
                    },
                  },
                })}
                className="bg-white text-black text-sm outline-none h-28
              rounded-lg indent-2 caret-dominant p-1 pt-2 
              border-2 active:border-dominant hover:border-dominant lg:h-32"
              ></textarea>
              {errors.userTextarea && (
                <span className="text-[8px] md:text-xs indent-0 lg:indent-2 text-red-600">
                  {errors.userTextarea.message}
                </span>
              )}
            </div>
            {/* submit */}
            <button
              type="submit"
              disabled={submit && true}
              className="bg-dominant text-black rounded p-2 px-4 text-sm font-semibold
            border-2 border-dominant hover:border-secondary hover:text-secondary
            transition-colors duration-300 ease-in-out
            active:transform active:scale-95 active:transition-all lg:text-base"
              aria-label="Submit your needs to Portfolio Builder"
            >
              {submit ? <>Sending...</> : <>Talk to Portfolio Builder</>}
            </button>
          </form>

          {/* status after send succesfully email */}
          <Status
            message={status.message}
            type={status.type}
            onClose={() => setStatus({ message: "", type: "" })}
          />
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
