import Head from 'next/head';
import styles from './static.module.css';

export default function Datenschutz() {
  return (
    <>
      <Head>
        <title>Datenschutz – club98</title>
        <meta name="description" content="Datenschutz des Club 98" />
      </Head>
      <main className={styles.main}>
        <h1>Datenschutz</h1>
        <p>
          Gestützt auf Artikel 13 der schweizerischen Bundesverfassung und die datenschutzrechtlichen
          Bestimmungen des Bundes (Datenschutzgesetz, DSG) hat jede Person Anspruch auf Schutz ihrer
          Privatsphäre sowie auf Schutz vor Missbrauch ihrer persönlichen Daten. Wir halten diese
          Bestimmungen ein. Persönliche Daten werden streng vertraulich behandelt und weder an Dritte
          verkauft noch weitergegeben.
        </p>
      </main>
    </>
  );
}
