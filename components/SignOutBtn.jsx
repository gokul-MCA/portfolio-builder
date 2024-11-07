import { signOut } from "next-auth/react";

const SignOutBtn = ({ children, className }) => {
  function handleClick() {
    signOut("google");
  }

  return (
    <>
      <button className={className} onClick={handleClick}>
        {children}
      </button>
    </>
  );
};

export default SignOutBtn;
