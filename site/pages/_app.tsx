/* eslint-disable react/no-danger */
import '@rainbow-me/rainbowkit/styles.css';
import { DocsLayout } from 'components/DocsLayout/DocsLayout';
import { Header } from 'components/Header/Header';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import React from 'react';
import 'css/global.css';

function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const isDocs = router.pathname.includes('/docs');

  return (
    <>
      <Header />

      {isDocs ? (
        <DocsLayout>
          <Component {...pageProps} />
        </DocsLayout>
      ) : (
        <Component {...pageProps} />
      )}

      <style
        dangerouslySetInnerHTML={{
          __html: `
@font-face {
  font-family: 'SFRounded';
  src: url('/fonts/subset-SFRounded-Regular.eot');
  src: url('/fonts/subset-SFRounded-Regular.eot?#iefix')
      format('embedded-opentype'),
    url('/fonts/subset-SFRounded-Regular.woff2') format('woff2'),
    url('/fonts/subset-SFRounded-Regular.woff') format('woff');
  font-weight: 400;
  font-style: normal;
  font-display: auto;
}

@font-face {
  font-family: 'SFRounded';
  src: url('/fonts/subset-SFRounded-Medium.eot');
  src: url('/fonts/subset-SFRounded-Medium.eot?#iefix')
      format('embedded-opentype'),
    url('/fonts/subset-SFRounded-Medium.woff2') format('woff2'),
    url('/fonts/subset-SFRounded-Medium.woff') format('woff');
  font-weight: 500;
  font-style: normal;
  font-display: auto;
}

@font-face {
  font-family: 'SFRounded';
  src: url('/fonts/subset-SFRounded-Semibold.eot');
  src: url('/fonts/subset-SFRounded-Semibold.eot?#iefix')
      format('embedded-opentype'),
    url('/fonts/subset-SFRounded-Semibold.woff2') format('woff2'),
    url('/fonts/subset-SFRounded-Semibold.woff') format('woff');
  font-weight: 600;
  font-style: normal;
  font-display: auto;
}

@font-face {
  font-family: 'SFRounded';
  src: url('/fonts/subset-SFRounded-Bold.eot');
  src: url('/fonts/subset-SFRounded-Bold.eot?#iefix')
      format('embedded-opentype'),
    url('/fonts/subset-SFRounded-Bold.woff2') format('woff2'),
    url('/fonts/subset-SFRounded-Bold.woff') format('woff');
  font-weight: 700;
  font-style: normal;
  font-display: auto;
}

@font-face {
  font-family: 'SFRounded';
  src: url('/fonts/subset-SFRounded-Heavy.eot');
  src: url('/fonts/subset-SFRounded-Heavy.eot?#iefix')
      format('embedded-opentype'),
    url('/fonts/subset-SFRounded-Heavy.woff2') format('woff2'),
    url('/fonts/subset-SFRounded-Heavy.woff') format('woff');
  font-weight: 800;
  font-style: normal;
  font-display: auto;
}

@font-face {
  font-family: 'SFMono';
  src: url('/fonts/subset-SFMono-Regular.eot');
  src: url('/fonts/subset-SFMono-Regular.eot?#iefix')
      format('embedded-opentype'),
    url('/fonts/subset-SFMono-Regular.woff2') format('woff2'),
    url('/fonts/subset-SFMono-Regular.woff') format('woff');
  font-weight: 400;
  font-style: normal;
  font-display: auto;
}
`,
        }}
      />
    </>
  );
}

export default App;
