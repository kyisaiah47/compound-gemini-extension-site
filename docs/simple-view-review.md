# ParseRail for Gemini CLI site: Simple view review

Built on `main` on 2026-10-01. Blueprint: `compound-ops/standards/SIMPLE-VIEW-BLUEPRINT.md`.

## Truth map (2.A)

| Item | Source fact |
| --- | --- |
| Primary user | A person who uses Gemini CLI and wants it to read documents with ParseRail. |
| Problem | Gemini CLI has no ParseRail tools until the extension registers them. |
| Input | No form. The first action is one command, `PRODUCT.install` (README). |
| Output | The extension registers the parserail MCP server and GEMINI.md (`REGISTRATION`), so Gemini can call the tools in `TOOL_GROUPS`. |
| Free and paid | The extension is free, MIT licence. Calls run on the reader's ParseRail key (`settings[0].envVar`). GEMINI.md: "A failed call costs nothing, so it is always safe to try." No price is published on this site, so none is shown. |
| Permissions | The installer asks for the ParseRail API key and marks it sensitive. The site sends nothing. |
| Recovery | The new 404 page. |

How it differs from CiteRank: there is no check to run. The action card holds the install command and a copy button. The example is one tool group from GEMINI.md, in a sentence, with its tools and the manifest fields behind disclosures.

## Route inventory (2.E)

| Route | Treatment |
| --- | --- |
| `/` | Curated Simple: hero, install card, one tool group (themed listbox), what it costs, next steps. The Console register stays in Console. |
| 404 | New `not-found.tsx` in both views. |
| `/llms.txt`, `/robots.txt`, `/sitemap.xml` | Unchanged. |

The Console header drew a text star glyph where the logo goes. It now draws the product mark, `/icon.svg`. The Open Graph title lost its em dash for a colon.

## Verification

- `npx tsc --noEmit` and `npm run build` pass.
- `npm run check`: every rule passes except "dashes", which counts 2 wide dashes in `AGENTS.md`. That block is written by `next dev` and is the same on the commit before this one, so it is not changed here.
- `node scripts/verify-simple.mjs http://localhost:3319 compound-gemini-extension-site`: 24 of 24 (welcome, view state, listbox keyboard and focus, inert disclosure, chrome and overflow on 2 routes at 1440 and 390).
- Not verified: the clipboard copy in a real browser session.
