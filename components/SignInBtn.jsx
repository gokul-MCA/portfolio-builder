"use client";

import { signIn } from "next-auth/react";

const SignInBtn = ({ children, className }) => {
  function handleClick() {
    signIn("google");
  }
  return (
    <>
      <button className={className} onClick={handleClick}>
        {children}
      </button>
    </>
  );
};

export default SignInBtn;
