"use client";

import { useState } from "react";

const DropDownMenu = () => {
  let [value, setValue] = useState("Custom");
  return (
    <form className="w-full">
      <label htmlFor="countries" className="block mb-2 text-sm text-gray-500 dark:text-white">Gender</label>
      <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-lime-500 focus:border-lime-500 block w-full p-2.5">
        <option selected>Custom</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>
    </form>
  )
}

export default DropDownMenu;