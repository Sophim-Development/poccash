import './globals.css';
import React from 'react';
import Head from 'next/head';
import Layout from '../shared/Layout';

export const metadata = {
  title: 'PocCash',
  description: 'Your financial dashboard',
};

export default function RootLayout({ children }) {
  return (
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
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
