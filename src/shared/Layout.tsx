"use client";

import React, { useState, useEffect, useMemo } from 'react';
import Navbar from './Navbar';
import MobileNavbar from './MobileNavbar';

const Layout = ({ children }) => {
  const [isToggle, setIsToggle] = useState(false);

  const handleToggle = () => {
    setIsToggle(prevToggle => {
      const newToggle = !prevToggle;
      console.log("Menu open:", newToggle);
      return newToggle;
    });
  };

  return (
    <div>
      <Navbar />
      <MobileNavbar toggle={isToggle} handleToggle={handleToggle} />
      <main className="container mx-auto p-8">{children}</main>
    </div>
  );
};

export default Layout;