import React from "react";
import CustomInput from "../common/CustomInput";
import Image from "next/image";
import Logo from "../../images/logo.png";
import Link from "next/link";
import CustomDatePicker from "../common/DatePicker";
import DropDownMenu from "../common/DropDownMenu";

const Register = () => {

  return (
    <div className="lg:flex flex-col-1 items-center w-full">
      <div className="lg:w-6/12 w-full lg:h-screen h-96 bg-lime-500 flex justify-center items-center object-contain">
        <Image src={Logo} width={300} height={300} alt="" />
      </div>
      <div className="lg:w-6/12 w-full lg:px-16 p-8 space-y-5">
        <div>
          <h3 className="text-4xl font-light">Create an account</h3>
          <div className="text-gray-500 text-sm mt-2">Already have an account? <Link href={"/auth/login"} className="text-gray-500 underline font-bold">Log in</Link></div>
        </div>
        <form className="space-y-3 pb-5">
          <CustomInput label={"First name"} placeholder={"Enter your first name"} />
          <CustomInput label={"Last name"} placeholder={"Enter your last name"} />
          <div className="lg:grid flex-col-1 grid-cols-2 gap-5">
            <DropDownMenu />
            <CustomDatePicker label={"Date of birth (MM/DD/YY)"} className={"lg:mt-0 mt-2"} />
          </div>
          <CustomInput label={"Email Address"} placeholder={"example@gmail.com"} />
          <CustomInput label={"Password"} placeholder={"********"} />
          <CustomInput label={"Confirm your password"} placeholder={"********"} />
          <span className="text-gray-400 text-xs">Use 8 or more charactors with mix of letters, numbers & symbols</span>
          <div className="flex items-center me-4 mt-5">
            <input id="show-password" type="checkbox" value="" className="text-lime-600 bg-gray-100 border-gray-300 focus:ring-green-500 dark:focus:ring-lime-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label htmlFor="show-password" className="ms-2 text-sm font-medium text-lime-600 dark:text-gray-300">Show your password</label>
          </div>
          <div className="text-end mt-5">
            <button className="rounded bg-lime-600 text-white hover:bg-lime-500 p-3 w-4/12">Create an account</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register;