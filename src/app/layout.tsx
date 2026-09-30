import type { Metadata } from 'next';
import { IBM_Plex_Mono } from 'next/font/google';
import './globals.css';
import SmoothScroll from '@/components/SmoothScroll';
import { PRODUCT } from '@/lib/product';

const mono = IBM_Plex_Mono({ subsets: ['latin'], weight: ['400', '500'], display: 'swap', variable: '--font-mono' });
const SITE = `https://${PRODUCT.host}`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE), title: PRODUCT.name, description: PRODUCT.description,
  alternates: { canonical: SITE }, icons: { icon: '/icon.svg' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en" className={mono.variable}><body>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
      '@context': 'https://schema.org', '@type': 'SoftwareSourceCode', name: PRODUCT.name, url: SITE,
      description: PRODUCT.description, codeRepository: PRODUCT.repo, version: PRODUCT.version,
      publisher: { '@type': 'Organization', '@id': 'https://thecompound.tech/#organization', name: 'Compound Labs', url: 'https://thecompound.tech' },
    }).replace(/</g, '\\u003c') }} />
    <SmoothScroll />{children}
  </body></html>;
}
