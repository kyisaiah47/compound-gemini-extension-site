'use client';
import { useState } from 'react';
import { Icon } from '@/components/Icon';
import { PRODUCT, READ_ON, REGISTRATION, SOURCES, TOOL_GROUPS } from '@/lib/product';
import PageViews from '@/components/site-view/PageViews';
import ViewControls from '@/components/site-view/ViewControls';
import SimpleHome from '@/components/site-view/SimpleHome';
import Mark from '@/components/site-view/Mark';
import { SimpleFrame } from '@/components/site-view/SimpleChrome';

export default function Home() {
  return <PageViews simpleView={<SimpleFrame><SimpleHome /></SimpleFrame>} consoleView={<ConsoleHome />} />;
}

function ConsoleHome() {
  const [copied, setCopied] = useState(false);
  const copyInstall = async () => { await navigator.clipboard.writeText(PRODUCT.install); setCopied(true); setTimeout(() => setCopied(false), 1600); };
  return <div className="site-shell">
    <header className="masthead"><a className="brand" href="#top"><span className="brand-mark"><Mark size={21} /></span><span>{PRODUCT.name}</span></a><span className="crumb">EXTENSION REGISTER</span><nav><a href="#register">Register</a><a href="#tools">Tools</a><a href="#sources">Sources</a><a className="repo-link" href={PRODUCT.repo}><Icon name="github-logo" /> GitHub <Icon name="arrow-up-right" /></a></nav></header>
    <div className="folio" aria-label="Package facts"><span>version <b>{PRODUCT.version}</b></span><span>license <b>MIT</b></span><span>runtime <b>Node.js 18+</b></span><span>host <b>{PRODUCT.host}</b></span><span className="read-date">read {READ_ON}</span></div>
    <main id="top">
      <section className="intro content-grid"><div className="rail"><span className="eyebrow">GEMINI CLI / PARSERAIL</span><span className="rail-note">ONE INSTALL COMMAND<br />ONE REGISTERED SERVER</span></div><div className="lead"><h1>{PRODUCT.headline}</h1><p>{PRODUCT.description}</p><div className="install-box"><span className="prompt">$</span><code>{PRODUCT.install}</code><button onClick={copyInstall} aria-label="Copy install command"><Icon name={copied ? 'check' : 'copy'} />{copied ? 'Copied' : 'Copy'}</button></div><p className="install-note">The README says the installer prompts for your ParseRail API key.</p></div></section>
      <section id="register" className="section content-grid"><div className="rail"><span className="section-no">01</span><span className="eyebrow">REGISTER</span><span className="rail-note">WHAT ENTERS<br />THE SESSION</span></div><div className="section-main"><div className="section-head"><h2>The extension registers this.</h2><span>gemini-extension.json</span></div><div className="register-table" role="table" aria-label="Extension registration"><div className="table-row table-head" role="row"><span>field</span><span>value</span><span>what the manifest says</span></div>{REGISTRATION.map((row) => <div className="table-row" role="row" key={row.field}><code>{row.field}</code><strong>{row.value}</strong><span>{row.meaning}</span></div>)}</div></div></section>
      <section id="tools" className="section content-grid"><div className="rail"><span className="section-no">02</span><span className="eyebrow">CONTEXT</span><span className="rail-note">BUNDLED<br />GEMINI.MD</span></div><div className="section-main"><div className="section-head"><h2>What Gemini can route through it.</h2><span>GEMINI.md</span></div><div className="tool-groups">{TOOL_GROUPS.map((group) => <div className="tool-group" key={group.label}><div className="tool-label"><Icon name={group.label === 'Account' ? 'wallet' : group.label === 'Documents' ? 'file-text' : 'text-aa'} />{group.label}</div><code>{group.tools}</code></div>)}</div><div className="callout"><Icon name="info" /><p>The bundled instructions say document tools accept exactly one source: <code>fileUrl</code>, <code>text</code>, or <code>fileBase64</code> with <code>fileMimeType</code>.</p></div></div></section>
      <section id="sources" className="section content-grid sources-section"><div className="rail"><span className="section-no">03</span><span className="eyebrow">SOURCES</span><span className="rail-note">READ AT<br />{READ_ON}</span></div><div className="section-main"><div className="section-head"><h2>Every sentence has a source.</h2><span>{SOURCES.length} package reads</span></div><div className="sources-list">{SOURCES.map((source) => <a className="source-row" href={source.url} key={source.id}><span><Icon name="quotes" />{source.cite}</span><q>{source.quote}</q><Icon name="arrow-up-right" /></a>)}</div></div></section>
    </main>
    <footer className="footer"><div className="footer-top"><span>Open source extension for Gemini CLI.</span><a href={PRODUCT.repo}>Read the repository <Icon name="arrow-up-right" /></a></div><div className="footer-bottom"><a href="https://thecompound.tech"><span>Built by Compound Labs</span><img className="studio-credit-mark" src="/brand/compound-labs.svg" alt="Compound Labs" width={20} height={20} /></a><span>© 2026 ParseRail for Gemini CLI. A Compound Labs product.</span><a href="mailto:hello@thecompound.tech">hello@thecompound.tech</a></div><div className="foot-view"><ViewControls /></div></footer>
  </div>;
}
