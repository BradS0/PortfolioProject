import { ChakraProvider } from '@chakra-ui/react';
import React, { StrictMode } from 'react';

// CSS common components
import MainLayout from '../components/common/layouts/main';
import theme from '../theme';
// import Fonts from '../components/common/fonts'

export default function MyApp({ Component, pageProps, router }) {
  return (
    <StrictMode>
      <ChakraProvider theme={theme}>
        {/* <Fonts /> */}
        <MainLayout router={router}>
          <Component {...pageProps} key={router.route} />
        </MainLayout>
      </ChakraProvider>
    </StrictMode>
  );
}
