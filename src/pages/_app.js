import FontFace from '@/components/font-face';
import Footer from '@/components/footer';
import Header from '@/components/header';
import MobileNavigation from '@/components/mobile-navigation';
import customTheme from '@/styles/theme';
import { Box, ChakraProvider } from '@chakra-ui/react';
import PlausibleProvider from 'next-plausible';
import { DefaultSeo } from 'next-seo';
import Head from 'next/head';
import React from 'react';
import SEO from '../../next-seo.config';

const App = ({ Component, pageProps }) => {
  return (
    <>
      <ChakraProvider theme={customTheme}>
        <PlausibleProvider domain="eloy.co">
          <Head>
            <meta content="width=device-width, initial-scale=1" name="viewport" />
            <link rel="icon" type="image/png" sizes="96x96" href="/favicons/favicon.png" />
            <meta name="theme-color" content="#2BB0EC" />
          </Head>
          <DefaultSeo {...SEO} />
          <Header />
          <Box as="main" pt={{ base: 16, md: 32 }} pb={{ base: 24, md: 16 }}>
            <Component {...pageProps} />
          </Box>
          <MobileNavigation />
          <Footer />
        </PlausibleProvider>
      </ChakraProvider>
      <FontFace />
    </>
  );
};

export default App;
