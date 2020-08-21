import '../styles/globals.css';

// Components
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <link
          href='https://fonts.googleapis.com/css2?family=Alata&family=Lato:wght@300;400;700&display=swap'
          rel='stylesheet'
        />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
