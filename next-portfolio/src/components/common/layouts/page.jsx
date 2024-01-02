import Head from 'next/head';

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
