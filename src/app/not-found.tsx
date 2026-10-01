'use client';
import Link from 'next/link';
import PageViews from '@/components/site-view/PageViews';
import ViewControls from '@/components/site-view/ViewControls';
import SimplePage from '@/components/site-view/SimplePage';
import Mark from '@/components/site-view/Mark';
import { SimpleFrame } from '@/components/site-view/SimpleChrome';
import { PRODUCT } from '@/lib/product';

/* A missing page, in whichever view the visitor reads. Both views offer the way back. */
export default function NotFound() {
  const links = (
    <nav className="sv-home-links" aria-label="Next steps">
      <Link href="/">Back to the extension ↗</Link>
      <a href={PRODUCT.repo} target="_blank" rel="noreferrer">Read the repository ↗</a>
      <a href="mailto:hello@thecompound.tech">Write to us ↗</a>
    </nav>
  );
  return (
    <PageViews
      simpleView={
        <SimpleFrame>
          <SimplePage eyebrow={PRODUCT.name.toUpperCase()} title="This page does not exist" intro={<p>The address may be old, or it may have a typo.</p>}>
            {links}
          </SimplePage>
        </SimpleFrame>
      }
      consoleView={
        <div className="site-shell">
          <header className="masthead">
            <Link className="brand" href="/">
              <span className="brand-mark"><Mark size={21} /></span>
              <span>{PRODUCT.name}</span>
            </Link>
          </header>
          <main className="sv-page">
            <div className="sv-page-heading">
              <h1>This page does not exist.</h1>
            </div>
            {links}
          </main>
          <footer className="footer"><div className="foot-view"><ViewControls /></div></footer>
        </div>
      }
    />
  );
}
