'use client'
import React from 'react'
import SignInBtn from './SignInBtn'
import { useSession } from 'next-auth/react';

const GetStarted = ({children, className}) => {
  const {status} = useSession();
  return (
    <>

    {status === 'authenticated'?(
     <button className={className} >Explore Portfolio&apos;s </button> 
    ):(
      <SignInBtn className={className}>{children}</SignInBtn>  
    )}

    </>
  )
}

export default GetStarted