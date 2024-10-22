"use client";

import '../app/assets/css/globals.css';
import 'flowbite';
import React from 'react';
import Head from 'next/head';
import Layout from '../shared/Layout';
import { usePathname } from 'next/navigation';

const metadata = {
  title: 'PocCash',
  description: 'Your financial dashboard',
};

export default function RootLayout({ children }) {
  const pathname = usePathname();
  // List of routes that should not include the layout
  const noLayoutRoutes = ['/auth/login', '/auth/register'];

  // isNoLayout is to to find if route not include login or register
  const isNoLayout = noLayoutRoutes.includes(pathname);

  return (
    <>
      <html lang="en">
        <Head>
          <title>{metadata.title}</title>
          <meta name="description" content={metadata.description} />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
          />
        </Head>
        <body>
          {
            isNoLayout ? (<>{children} </>) : (<Layout>{children}</Layout>)
          }
          <script src="https://cdn.jsdelivr.net/npm/flowbite@2.5.2/dist/flowbite.min.js"></script>
          <script src='../app/assets/js/index.js'></script>
        </body>
      </html>
    </>
  );
}
