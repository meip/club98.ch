import Head from 'next/head';
import styles from './static.module.css';

export default function Impressum() {
  return (
    <>
      <Head>
        <title>Impressum – club98</title>
        <meta name="description" content="Impressum des Club 98" />
      </Head>
      <main className={styles.main}>
        <h1>Impressum</h1>
        <p>Club 98, Joweidzentrum 4, 8630 Rüti</p>
        <p>
          <a href="mailto:pascale.pfister@club98.com">pascale.pfister@club98.com</a>
        </p>
        <p>
          <a href="https://www.club98.ch">www.club98.ch</a>
        </p>
      </main>
    </>
  );
}
