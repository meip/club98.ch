import { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  const { basePath } = useRouter();
  return (
    <>
      <header className="bg-brand text-white sticky top-0 z-50">
        <nav className="flex items-center justify-between max-w-6xl mx-auto p-4">
          <Link href="/">
            <Image
              src={`${basePath}/logo_club98_weiss.png`}
              alt="club98 logo"
              width={60}
              height={60}
            />
          </Link>
          <ul className="flex gap-4 uppercase font-semibold">
            <li>
              <Link href="/#mitgliedschaft" className="hover:text-sky-400">
                Mitgliedschaft
              </Link>
            </li>
            <li>
              <Link href="/#engagement" className="hover:text-sky-400">
                Engagement
              </Link>
            </li>
            <li>
              <Link href="/#ueber-uns" className="hover:text-sky-400">
                Über uns
              </Link>
            </li>
            <li>
              <Link href="/#kontakt" className="hover:text-sky-400">
                Kontakt
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
      <footer className="text-center py-8 bg-brand text-white">
        <p>
          <Link href="/impressum">Impressum</Link> | <Link href="/datenschutz">Datenschutz</Link>
        </p>
        <p>© 2022 CLUB98.</p>
      </footer>
    </>
  );
}
