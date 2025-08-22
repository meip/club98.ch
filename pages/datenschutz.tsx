import Head from 'next/head';

export default function Datenschutz() {
  return (
    <>
      <Head>
        <title>Datenschutz – club98</title>
        <meta name="description" content="Datenschutz des Club 98" />
      </Head>
      <main className="max-w-3xl mx-auto p-8 leading-7">
        <h1 className="text-2xl font-bold mb-4">Datenschutz</h1>
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
