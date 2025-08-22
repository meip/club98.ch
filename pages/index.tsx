import Head from 'next/head';
import Image from 'next/image';
import styles from './index.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>club98 – Gönnervereinigung Floorball Riders</title>
        <meta
          name="description"
          content="Offizielle Seite des Club 98, der Gönnervereinigung der Floorball Riders."
        />
      </Head>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <Image
            src="https://static.wixstatic.com/media/c8f628_0194a2ea47ed43fca9b275df1db48e28~mv2.png"
            alt="club98 logo"
            width={60}
            height={60}
            className={styles.logo}
          />
          <ul>
            <li><a href="#mitgliedschaft">Mitgliedschaft</a></li>
            <li><a href="#engagement">Engagement</a></li>
            <li><a href="#ueber-uns">Über uns</a></li>
            <li><a href="#kontakt">Kontakt</a></li>
          </ul>
        </nav>
      </header>
      <main className={styles.main}>
        <section id="mitgliedschaft" className={styles.section}>
          <h2>MITGLIEDSCHAFT</h2>
          <div className={styles.membershipOptions}>
            <div className={styles.card}>
              <h3>Einzelperson / Ehepaar</h3>
              <p>Fr. 333.00 / Fr. 555.00</p>
            </div>
            <div className={styles.card}>
              <h3>Firma</h3>
              <p>Fr. 999.00</p>
            </div>
            <div className={styles.card}>
              <h3>Open</h3>
              <p>ab Fr. 333.00</p>
            </div>
          </div>
          <p className={styles.account}>
            Vereinskonto Club 98<br />
            IBAN CH92 8080 8002 2643 3181 9
          </p>
        </section>
        <section id="engagement" className={styles.section}>
          <h2>IHR ENGAGEMENT FÜR DEN LEISTUNGSSPORT</h2>
          <p>
            Ihre Mitgliedschaft ist ein soziales und gesellschaftliches Engagement für den
            Leistungssport im Zürcher Oberland.
          </p>
          <div className={styles.gallery}>
            <Image
              src="https://static.wixstatic.com/media/c8f628_411a1c24548c47229841ab069d0cac67~mv2.jpg"
              alt=""
              width={200}
              height={150}
            />
            <Image
              src="https://static.wixstatic.com/media/c8f628_b282e15c6b9d4787b43986ff0f0517d7~mv2.jpg"
              alt=""
              width={200}
              height={150}
            />
            <Image
              src="https://static.wixstatic.com/media/c8f628_af427fcd52294b59ad80f67ecced04ea~mv2.jpg"
              alt=""
              width={200}
              height={150}
            />
            <Image
              src="https://static.wixstatic.com/media/c8f628_eb7d23634251477487e3b129819c090e~mv2.jpg"
              alt=""
              width={200}
              height={150}
            />
            <Image
              src="https://static.wixstatic.com/media/c8f628_49755cc050e84dd88398e50b9ffa3ada~mv2.jpg"
              alt=""
              width={200}
              height={150}
            />
            <Image
              src="https://static.wixstatic.com/media/c8f628_1640a183c81a471e848a5464dd0db8d2~mv2.jpg"
              alt=""
              width={200}
              height={150}
            />
          </div>
        </section>
        <section id="ueber-uns" className={styles.section}>
          <h2>ÜBER UNS</h2>
          <p>
            Der Club 98 ist ein Gönnerverein der Floorball Riders und unterstützt
            Spitzenunihockey im Zürcher Oberland. Die Unterstützungsbeiträge werden
            vollumfänglich in den Leistungssport der Floorball Riders investiert. Das primäre Ziel
            und der Zweck der Gönnervereinigung soll die Förderung und Unterstützung des
            Unihockeysports (Nachwuchs- und Leistungssport) der Floorball Riders sein.
          </p>
          <p>
            Der Unihockeyverein Floorball Riders wurde 1998 durch den Zusammenschluss von
            UHC Bubikon und UHC Dürnten gegründet. Seither spielt der Verein in den höchsten
            Ligen des Schweizer Frauen-Unihockeys. Auch bei der Nachwuchsarbeit gehört der
            Verein seit Jahren zu den besten 15 in der Schweiz.
          </p>
        </section>
        <section id="kontakt" className={styles.section}>
          <h2>KONTAKT</h2>
          <h3>Der Vorstand CLUB 98</h3>
          <div className={styles.board}>
            <div>
              <h4>Präsident</h4>
              <p>Hans Altwegg</p>
            </div>
            <div>
              <h4>Mitglied</h4>
              <p>Pascale Pfister</p>
            </div>
          </div>
          <form className={styles.form}>
            <input type="text" placeholder="Vorname" />
            <input type="text" placeholder="Nachname" />
            <input type="email" placeholder="E-Mail-Adresse" />
            <input type="text" placeholder="Betreff" />
            <textarea placeholder="Nachricht" rows={4}></textarea>
            <button type="submit">Absenden</button>
          </form>
        </section>
        <footer className={styles.footer}>
          <p>
            <a href="/impressum">Impressum</a> | <a href="/datenschutz">Datenschutz</a>
          </p>
          <p>© 2022 CLUB98. Erstellt mit Wix.com</p>
        </footer>
      </main>
    </>
  );
}
