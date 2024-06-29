import Head from 'next/head';
import React from 'react';

function PageLayout({ children, title }) {
  return (
    <>
      {title && (
      <Head>
        <title>{title}</title>
      </Head>
      )}
      {children}
    </>
  );
}

export default PageLayout;
