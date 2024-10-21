import React from "react";
import Link from 'next/link';
import Image from 'next/image';
import Logo from "../images/main-logo.png";
import Profile from "../images/Avatar.png";
import MenuItem from '../components/common/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

interface Props {
  toggle: boolean
  handleToggle: () => void
}
const MobileNavbar = ({ toggle, handleToggle }: Props) => {
  return (
    <nav className="bg-white w-full shadow-sm md:hidden">
      <div className="container mx-auto px-4 py-2">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-green-600">
            <Link href="/">
              <Image src={Logo} width={200} height={200} className="rounded-md" alt='' />
            </Link>
          </div>
          <div className="">
            <button onClick={handleToggle}>
              {toggle ? (<CloseIcon className="transition-transform duration-150 ease-in-out" />) : (<MenuIcon className="transition-transform duration-150 ease-in-out" />)}
            </button>
          </div>
        </div>
      </div>
      <div className={toggle ? "absolute block h-full w-full bg-black/40 z-20" : "hidden"}></div>
      <div className={toggle ? "mobile-menu toggle-active" : "mobile-menu toggle-inactive"}>
        <ul className="flex flex-col text-left space-y-6 text-gray-700">
          <MenuItem link={"/"} title={"Home"} action={handleToggle} />
          <MenuItem link={"/income"} title={"Income"} action={handleToggle} />
          <MenuItem link={"/expense"} title={"Expense"} action={handleToggle} />
          <MenuItem link={"/budget"} title={"Budget"} action={handleToggle} />
        </ul>
        <div className="flex items-center space-x-4 divide-x">
          <Image
            className="w-8 h-8 rounded-full"
            src={Profile}
            alt="User Profile"
          />
          <button className="text-gray-500 font-sans text-base font-light pl-2">
            Logout
          </button>
        </div>
      </div>
    </nav>
  )
}

export default MobileNavbar;