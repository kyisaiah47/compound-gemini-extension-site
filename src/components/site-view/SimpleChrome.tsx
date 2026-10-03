'use client';
import Link from 'next/link';
import type { ReactNode } from 'react';
import { PRODUCT } from '@/lib/product';
import Mark from './Mark';
import ViewControls from './ViewControls';

export function SimpleHeader() {
  return (
    <header className="sv-nav">
      <Link className="sv-brand" href="/" aria-label={`${PRODUCT.name} home`}>
        <span className="sv-mark">
          <Mark />
        </span>
        {PRODUCT.name}
      </Link>
      <nav aria-label="Main navigation">
        <Link href="/#start">Install</Link>
        <Link href="/#example">Tools</Link>
        <Link href="/#cost">Cost</Link>
        <a href={PRODUCT.repo} target="_blank" rel="noreferrer">
          GitHub ↗
        </a>
      </nav>
    </header>
  );
}

export function SimpleFooter() {
  return (
    <footer className="sv-footer">
      <div>
        <Link href="/">{PRODUCT.name} · Compound Labs</Link>
        <nav aria-label="Footer">
          <a href={PRODUCT.repo} target="_blank" rel="noreferrer">
            Repository ↗
          </a>
          <a href={`${PRODUCT.repo}/blob/main/GEMINI.md`} target="_blank" rel="noreferrer">
            GEMINI.md ↗
          </a>
          <a href="mailto:hello@thecompound.tech">Contact ↗</a>
        </nav>
        <p className="sv-credit">
          <a href="https://thecompound.tech">
            <span>Built by Compound Labs</span>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="studio-credit-mark" src="/brand/compound-labs.svg" alt="Compound Labs" width={20} height={20} />
          </a>
        </p>
      </div>
      <ViewControls />
    </footer>
  );
}

export function SimpleFrame({ children }: { children: ReactNode }) {
  return (
    <>
      <SimpleHeader />
      <main className="sv-main">{children}</main>
      <SimpleFooter />
    </>
  );
}
