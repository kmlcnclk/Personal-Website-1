import React from 'react';
import Head from 'next/head';
import Header from './Header';

function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Kamilcan Çelik</title>
      </Head>
      <Header />
      {children}
    </div>
  );
}

export default Layout;
