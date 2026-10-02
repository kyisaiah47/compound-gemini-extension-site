'use client';

/* THE SIMPLE HOME. The outcome, the install command, one tool group explained, what it costs,
 * next steps. Every sentence is read from lib/product.ts, which records the package files. */
import { PRODUCT, READ_ON, REGISTRATION, TOOL_GROUPS } from '@/lib/product';
import CopyCommand from './CopyCommand';
import Disclosure from './Disclosure';
import ThemedSelect from './ThemedSelect';
import { useViewState } from './SiteViewProvider';

const tools = (g: (typeof TOOL_GROUPS)[number]) => g.tools.split(', ');
/** The group's label as a word before "tools". */
const noun = (label: string) => (label === 'Documents' ? 'document' : label.toLowerCase());

export default function SimpleHome() {
  const [picked, setPicked] = useViewState<string>('simple:group', TOOL_GROUPS[0].label);
  const group = TOOL_GROUPS.find((g) => g.label === picked) ?? TOOL_GROUPS[0];
  const list = tools(group);

  return (
    <div className="sv-home">
      <section className="sv-hero">
        <div className="sv-pitch">
          <span className="sv-eyebrow">GEMINI CLI · PARSERAIL</span>
          <h1>{PRODUCT.headline}</h1>
          <p>{PRODUCT.description}</p>
          <div className="sv-qualifier">
            This is version {PRODUCT.version}. It uses the MIT licence and requires Node.js 18 or later.
          </div>
        </div>

        <div className="sv-card" id="start">
          <div className="sv-step">
            <span>01 / INSTALL THE EXTENSION</span>
            <span>ONE COMMAND</span>
          </div>
          <h2>Add ParseRail to Gemini CLI.</h2>
          <p className="sv-card-sub">Run this in a terminal where Gemini CLI is installed.</p>
          <CopyCommand command={PRODUCT.install} label="Install command" />
          <p className="sv-terms">The installer asks for your ParseRail API key and stores it as a sensitive setting.</p>
        </div>
      </section>

      <section className="sv-section" id="example" aria-live="polite">
        <div className="sv-section-intro">
          <div>
            <span className="sv-eyebrow">02 / WHAT GEMINI GETS</span>
            <h2>Gemini can call these tools.</h2>
          </div>
          <p>Pick a group to see the tools the bundled GEMINI.md tells Gemini to use.</p>
        </div>
        <div className="sv-result">
          <div className="sv-step">
            <span>EXAMPLE · ONE TOOL GROUP</span>
            <span>GEMINI.md</span>
          </div>
          <ThemedSelect
            label="Tool group"
            options={TOOL_GROUPS.map((g) => ({ value: g.label, label: g.label }))}
            value={group.label}
            onChange={setPicked}
          />
          <div className="sv-result-summary">
            <h3>
              In a Gemini CLI session, Gemini can call {list.length} {noun(group.label)}{' '}
              {list.length === 1 ? 'tool' : 'tools'} through ParseRail.
            </h3>
            <p>Gemini prefers the specialized tool when the document type is known.</p>
          </div>
          <Disclosure title={`See the ${list.length === 1 ? 'tool' : `${list.length} tools`}`}>
            <ul className="sv-tool-list">
              {list.map((t) => (
                <li key={t}>
                  <code>{t}</code>
                </li>
              ))}
            </ul>
            <p>
              The document tools accept exactly one input source: fileUrl, text, or fileBase64 with fileMimeType.
            </p>
          </Disclosure>
          <Disclosure title="The extension registers these items.">
            <dl className="sv-facts">
              {REGISTRATION.map((r) => (
                <div key={r.field}>
                  <dt>
                    <code>{r.field}</code>
                  </dt>
                  <dd>{r.meaning}</dd>
                </div>
              ))}
            </dl>
          </Disclosure>
          <p className="sv-note">This lists what the package&rsquo;s own files register, read on {READ_ON}. Nothing ran here.</p>
        </div>
      </section>

      <section className="sv-section" id="cost">
        <div className="sv-section-intro">
          <div>
            <span className="sv-eyebrow">03 / WHAT IT COSTS</span>
            <h2>The extension is free.</h2>
          </div>
          <p>It is open source under the MIT licence. Tool calls run on your ParseRail account.</p>
        </div>
        <div className="sv-cards">
          <div>
            <h3>You can install the extension for free.</h3>
            <p>The extension and its source are on GitHub under the MIT licence.</p>
          </div>
          <div>
            <h3>Your calls use your key and account.</h3>
            <p>Calls use the ParseRail API key you give the installer, kept in PARSERAIL_API_KEY.</p>
          </div>
          <div>
            <h3>A failed call costs nothing.</h3>
            <p>The bundled GEMINI.md says it is always safe to try.</p>
          </div>
        </div>
      </section>

      <nav className="sv-home-links" aria-label="Next steps">
        <a href={PRODUCT.repo} target="_blank" rel="noreferrer">
          Read the repository ↗
        </a>
        <a href={`${PRODUCT.repo}/blob/main/GEMINI.md`} target="_blank" rel="noreferrer">
          Read GEMINI.md ↗
        </a>
        <a href={`${PRODUCT.repo}/blob/main/README.md`} target="_blank" rel="noreferrer">
          Read the README ↗
        </a>
      </nav>
    </div>
  );
}
