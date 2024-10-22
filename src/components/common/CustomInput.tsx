import React from "react";
import clsx from "clsx";

interface Props {
  label: string;
  placeholder: string;
  className?: string;
  message?: string;
}
const CustomInput = ({ label, placeholder, className, message }: Props) => {
  return (
    <>
      <div className="space-y-2">
        <label className="text-sm text-gray-500">{label}</label>
        <input placeholder={placeholder} className="w-full rounded-md bg-inherit border border-gray-400 p-3 text-xs focus:border-lime-500 active:border-lime-500 outline-none" />
        <span className="text-red-500 text-xs">{message}</span>
      </div>
    </>
  )
}

export default CustomInput;