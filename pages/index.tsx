import Head from 'next/head';
import styles from './index.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>club98 – Floorball Riders</title>
        <meta name="description" content="Official landing page of club98, the exclusive member club of Floorball Riders." />
      </Head>
      <main className={styles.main}>
        <h1>Welcome to club98</h1>
        <p>Exclusive community of Floorball Riders supporters.</p>
        <p>Join us to support the team and enjoy member benefits.</p>
      </main>
    </>
  );
}
