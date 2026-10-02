import type { Metadata } from 'next';
import { IBM_Plex_Mono } from 'next/font/google';
import './globals.css';
import '@/components/site-view/simple.css';
import SiteViewProvider from '@/components/site-view/SiteViewProvider';
import Welcome from '@/components/site-view/Welcome';
import Mark from '@/components/site-view/Mark';
import SmoothScroll from '@/components/SmoothScroll';
import { PRODUCT } from '@/lib/product';
import Analytics from '@/components/Analytics';

const mono = IBM_Plex_Mono({ subsets: ['latin'], weight: ['400', '500'], display: 'swap', variable: '--font-mono' });
const SITE = `https://${PRODUCT.host}`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE), title: PRODUCT.name, description: PRODUCT.description,
  alternates: { canonical: SITE }, icons: { icon: '/icon.svg' },
  openGraph: { title: `${PRODUCT.name}: ${PRODUCT.headline.replace(/\.$/, '')}`, description: `The extension registers the parserail MCP server in Gemini CLI. ${PRODUCT.description}`, url: SITE, siteName: PRODUCT.name, type: 'website' },
  twitter: { card: 'summary_large_image', title: PRODUCT.name, description: 'The extension registers the parserail MCP server in Gemini CLI.' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en" className={mono.variable}><body>
    <Analytics />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
      '@context': 'https://schema.org', '@type': 'SoftwareSourceCode', name: PRODUCT.name, url: SITE,
      description: PRODUCT.description, codeRepository: PRODUCT.repo, version: PRODUCT.version,
      publisher: { '@type': 'Organization', '@id': 'https://thecompound.tech/#organization', name: 'Compound Labs', url: 'https://thecompound.tech' },
    }).replace(/</g, '\\u003c') }} />
    <SmoothScroll />
    <SiteViewProvider slug="compound-gemini-extension" welcome={<Welcome copy={{
      name: PRODUCT.name,
      mark: <Mark />,
      eyebrow: 'GEMINI CLI. YOUR DOCUMENTS.',
      question: 'Can Gemini CLI read your invoices and statements?',
      explain: 'This extension adds the ParseRail tools to Gemini CLI. Gemini can then turn a document into structured data in your session.',
      illustration: { head: 'ONE SESSION. ONE DOCUMENT.', before: 'You ask Gemini to read a supplier invoice.', answer: 'Gemini calls the invoice tool and gets the fields back.', tag: 'A FAILED CALL COSTS NOTHING', after: 'You install it with one command.' },
    }} />}>{children}</SiteViewProvider>
  </body></html>;
}
