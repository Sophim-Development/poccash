import React from "react";
import CustomInput from "../common/CustomInput";
import Image from "next/image";
import Logo from "../../images/logo.png";
import Link from "next/link";

const Login = () => {
  return (
    <div className="lg:flex flex-col-1 items-center w-full">
      <div className="lg:w-6/12 w-full lg:h-screen h-96 bg-lime-600 flex justify-center items-center object-contain">
        <Image src={Logo} width={300} height={300} alt="" />
      </div>
      <div className="lg:w-6/12 w-full lg:px-16 p-8 space-y-5">
        <h3 className="text-5xl text-lime-600 py-5">Sign in</h3>
        <div className="w-full text-center space-y-5">
          <button className="border border-gray-400 rounded-full w-full p-3 text-gray-500 flex items-center justify-center space-x-3">
            <svg width="22px" height="22px" viewBox="-3 0 262 262" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027" fill="#4285F4"></path><path d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1" fill="#34A853"></path><path d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782" fill="#FBBC05"></path><path d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251" fill="#EB4335"></path></g></svg>
            <span>Continue with Google</span>
          </button>
          <button className="border border-gray-400 rounded-full w-full p-3 text-gray-500 flex items-center justify-center space-x-3">
            <svg width="22px" height="22px" viewBox="126.445 2.281 589 589" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><circle cx="420.945" cy="296.781" r="294.5" fill="#668fe5"></circle><path d="M516.704 92.677h-65.239c-38.715 0-81.777 16.283-81.777 72.402.189 19.554 0 38.281 0 59.357H324.9v71.271h46.174v205.177h84.847V294.353h56.002l5.067-70.117h-62.531s.14-31.191 0-40.249c0-22.177 23.076-20.907 24.464-20.907 10.981 0 32.332.032 37.813 0V92.677h-.032z" fill="#ffffff"></path></g></svg>
            <span>Continue with Facebook</span>
          </button>
          <div className="flex items-center w-full">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="mx-2 text-gray-500 font-bold">Or</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>
        </div>
        <form className="space-y-3 pb-5">
          <CustomInput label={"Email Address"} placeholder={"example@gmail.com"} />
          <CustomInput label={"Password"} placeholder={"********"} />
          <div className="text-lime-600 text-end text-md">Forget your password</div>
          <button className="rounded bg-lime-600 text-white hover:bg-lime-500 p-3 w-4/12">Sign in</button>
          <div className="text-gray-500 text-sm">Don't have an account? <Link href={"/auth/register"} className="text-lime-600 underline font-bold">Sign up</Link></div>
        </form>
      </div>
    </div>
  )
}

export default Login;