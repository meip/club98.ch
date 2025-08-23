import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';

export default function Home() {
  const { basePath } = useRouter();
  return (
    <>
      <Head>
        <title>club98 – Gönnervereinigung Floorball Riders</title>
        <meta
          name="description"
          content="Offizielle Seite des Club 98, der Gönnervereinigung der Floorball Riders."
        />
      </Head>
      <Layout>
        <section className="relative flex flex-col items-center justify-center h-[60vh] text-white text-center">
          <Image
            src={`${basePath}/play_01.jpg`}
            alt="Floorball Riders in action"
            fill
            className="object-cover -z-10"
            priority
          />
          <div className="absolute inset-0 bg-black/40 -z-10" />
          <div>
            <h1 className="text-4xl font-bold">club98</h1>
            <p className="text-lg">Gönnervereinigung Floorball Riders</p>
          </div>
        </section>
        <section id="mitgliedschaft" className="py-16 px-4 max-w-5xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-8">MITGLIEDSCHAFT</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="border border-sky-600 p-4 w-48 bg-brand text-white">
              <h3 className="font-semibold">Einzelperson / Ehepaar</h3>
              <p>Fr. 333.00 / Fr. 555.00</p>
            </div>
            <div className="border border-sky-600 p-4 w-48 bg-brand text-white">
              <h3 className="font-semibold">Firma</h3>
              <p>Fr. 999.00</p>
            </div>
            <div className="border border-sky-600 p-4 w-48 bg-brand text-white">
              <h3 className="font-semibold">Open</h3>
              <p>ab Fr. 333.00</p>
            </div>
          </div>
          <p className="mt-4 font-bold">
            Vereinskonto Club 98<br />
            IBAN CH92 8080 8002 2643 3181 9
          </p>
        </section>
        <section id="engagement" className="py-16 px-4 max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">IHR ENGAGEMENT FÜR DEN LEISTUNGSSPORT</h2>
          <p>
            Ihre Mitgliedschaft ist ein soziales und gesellschaftliches Engagement für den Leistungssport im Zürcher Oberland.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Image src={`${basePath}/play_01.jpg`} alt="" width={200} height={150} />
            <Image src={`${basePath}/play_02.jpg`} alt="" width={200} height={150} />
            <Image src={`${basePath}/play_03.jpg`} alt="" width={200} height={150} />
            <Image src={`${basePath}/play_04.jpg`} alt="" width={200} height={150} />
          </div>
        </section>
        <section id="ueber-uns" className="py-16 px-4 max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">ÜBER UNS</h2>
          <p>
            Der Club 98 ist ein Gönnerverein der Floorball Riders und unterstützt Spitzenunihockey im Zürcher Oberland. Die Unterstützungsbeiträge werden vollumfänglich in den Leistungssport der Floorball Riders investiert. Das primäre Ziel und der Zweck der Gönnervereinigung soll die Förderung und Unterstützung des Unihockeysports (Nachwuchs- und Leistungssport) der Floorball Riders sein.
          </p>
          <p className="mt-4">
            Der Unihockeyverein Floorball Riders wurde 1998 durch den Zusammenschluss von UHC Bubikon und UHC Dürnten gegründet. Seither spielt der Verein in den höchsten Ligen des Schweizer Frauen-Unihockeys. Auch bei der Nachwuchsarbeit gehört der Verein seit Jahren zu den besten 15 in der Schweiz.
          </p>
        </section>
        <section id="kontakt" className="py-16 px-4 max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">KONTAKT</h2>
          <h3 className="text-lg font-semibold mb-4">Der Vorstand CLUB 98</h3>
          <div className="flex justify-center gap-8 mb-4">
            <div>
              <h4 className="font-semibold">Präsident</h4>
              <p>Hans Altwegg</p>
            </div>
            <div>
              <h4 className="font-semibold">Mitglied</h4>
              <p>Pascale Pfister</p>
            </div>
          </div>
          <form className="flex flex-col gap-2 max-w-md mx-auto">
            <input type="text" placeholder="Vorname" className="p-2 border border-gray-300" />
            <input type="text" placeholder="Nachname" className="p-2 border border-gray-300" />
            <input type="email" placeholder="E-Mail-Adresse" className="p-2 border border-gray-300" />
            <input type="text" placeholder="Betreff" className="p-2 border border-gray-300" />
            <textarea placeholder="Nachricht" rows={4} className="p-2 border border-gray-300" />
            <button type="submit" className="p-2 bg-sky-700 text-white">Absenden</button>
          </form>
        </section>
      </Layout>
    </>
  );
}
