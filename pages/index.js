// import Axios from 'axios';

import Head from 'next/head';
import styles from '../styles/home.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Accellab Digital Company</title>
        <link rel='icon' href='/accellab-logo.png' />
      </Head>
      <div className={styles.row}>
        <h1 className={styles.title}>Accellab Digital Company.</h1>
        <img
          src='/accellab-logo.png'
          alt='Accellab Logo'
          className={styles.logo}
        />
      </div>
    </div>
  );
}

// export async function getStaticProps() {
//   const { data } = await Axios({
//     url: `http://localhost:8080/api/blog/posts`,
//     headers: {
//       'x-custom-accelab-api-guest-authentication': 'ACCELLAB',
//     },
//     method: 'GET',
//     params: '',
//     body: '',
//   });
//   return {
//     props: {
//       posts: data.data,
//     },
//   };
// }
