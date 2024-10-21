import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from "../images/main-logo.png";
import Profile from "../images/Avatar.png";
import MenuItem from '../components/common/MenuItem';

const Navbar = () => {
  return (
    <nav className="bg-white w-full shadow-sm md:block hidden">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="flex justify-between items-center space-x-12">
          <div className="text-2xl font-bold text-green-600">
            <Link href="/">
              <Image src={Logo} width={200} height={200} className="rounded-md" alt='' />
            </Link>
          </div>
          <ul className="flex space-x-6 text-gray-700">
            <MenuItem link={"/"} title={"Home"} />
            <MenuItem link={"/income"} title={"Income"} />
            <MenuItem link={"/expense"} title={"Expense"} />
            <MenuItem link={"/budget"} title={"Budget"} />
          </ul>
        </div>
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
  );
}

export default Navbar;