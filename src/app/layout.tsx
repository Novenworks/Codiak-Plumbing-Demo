import './globals.css';
import type { Metadata, Viewport } from 'next';
import { Archivo } from 'next/font/google';

const archivo = Archivo({
  subsets: ['latin'],
  axes: ['wdth'],
  display: 'swap',
  variable: '--font-archivo',
});

export const metadata: Metadata = {
  title: 'Codiak Plumbing | Licensed Plumber in Redlands, Yucaipa & Calimesa',
  description:
    'Owner-operated, licensed plumbing company based in Yucaipa (CSLB #1065137). Repairs, drains, repipes, remodels and new construction across Redlands, Yucaipa and Calimesa. Emergency service 24/7: (909) 435-7865.',
  // This build is a concept deployment, not the business's official site.
  robots: { index: false, follow: false },
};

export const viewport: Viewport = {
  themeColor: '#121315',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={archivo.variable}>
      <body>{children}</body>
    </html>
  );
}
