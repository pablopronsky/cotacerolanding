import type {Metadata} from 'next';
import { Barlow, Barlow_Condensed, Cormorant_Garamond } from 'next/font/google';
import './globals.css';

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-barlow',
});

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-barlow-condensed',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
});

export const metadata: Metadata = {
  title: 'Cota Cero — Superficies y Terminaciones | Protocolo de Obra',
  description: 'No vendemos pisos. Garantizamos cómo se instalan. Un protocolo de obra que controla cada etapa, desde el sustrato hasta la última terminación. City Bell / Gonnet.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="es" className={`${barlow.variable} ${barlowCondensed.variable} ${cormorant.variable}`}>
      <body suppressHydrationWarning className="font-sans bg-bone text-graphite-medium mx-auto max-w-full overflow-x-hidden selection:bg-copper selection:text-bone">
        {children}
      </body>
    </html>
  );
}
