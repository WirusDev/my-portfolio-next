import React from "react";
import LoginForm from "@/components/sections/LogInForm";

import Link from "next/link";

const RegisterPage = () => {
  return (
    <div className='flex flex-col justify-center items-center m-4'>
      <LoginForm />
      <p className='my-3'>
        Don&apos; t you have an account?
        <Link href='register' className='mx-2 underline'>
          Register
        </Link>
      </p>
    </div>
  );
};

export default RegisterPage;
