import Head from 'next/head';

export default function Impressum() {
  return (
    <>
      <Head>
        <title>Impressum – club98</title>
        <meta name="description" content="Impressum des Club 98" />
      </Head>
      <main className="max-w-3xl mx-auto p-8 leading-7">
        <h1 className="text-2xl font-bold mb-4">Impressum</h1>
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
