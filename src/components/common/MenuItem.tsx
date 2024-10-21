"use client";

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import React from 'react';

interface Props {
  link: string;
  title: string;
  action?: () => void;
}
const MenuItem = ({ link, title, action }: Props) => {
  const currentPath = usePathname();

  return (
    <li className={currentPath === link ? "text-green-600 hover:text-green-500 active" : "hover:text-green-500 active"}>
      <Link href={link} onClick={action}>
        {title}
      </Link>
    </li>
  )
}

export default MenuItem;