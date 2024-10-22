import React from "react";
import { Datepicker } from "flowbite-react";
import clsx from "clsx";

interface Props {
  label: string;
  className: string;
  showClearButton?: boolean;
  showTodayButton?: boolean;
}

const CustomDatePicker = ({ label, className, showClearButton = false, showTodayButton = false }: Props) => {
  return (
    <div className={clsx("w-full", className)}>
      <label htmlFor="countries" className="block mb-2 text-sm text-gray-500 dark:text-white">{label}</label>
      <Datepicker
        showClearButton={showClearButton}
        showTodayButton={showTodayButton}
      />
    </div>
  );
}

export default CustomDatePicker;