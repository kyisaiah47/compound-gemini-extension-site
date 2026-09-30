/* The product register. Every sentence rendered by the page comes from the package files or
 * the live repository recorded below. The accent is fixed for this rollout. It is the midpoint
 * of the empty OKLCH hue arc from h331.9 to h348.5, measured at h340.2 on 2026-09-21. The estate
 * ring is full. 74 existing accent pairs already sit closer than 12 degrees, so 12 is not the
 * floor. The nearest live accent is shipwall at 8.3 degrees. The register gate keeps an 8 degree
 * minimum because this slot was solved with the other seven products together.
 */
export const PRODUCT = {
  name: 'ParseRail for Gemini CLI',
  slug: 'compound-gemini-extension',
  host: 'compound-gemini-extension.thecompound.tech',
  accent: '#E492C9',
  accentHover: '#F8A5DC',
  version: '0.2.0',
  repo: 'https://github.com/kyisaiah47/compound-gemini-extension',
  install: 'gemini extensions install https://github.com/kyisaiah47/compound-gemini-extension',
  headline: 'ParseRail tools in a Gemini CLI session.',
  description: 'This extension registers the parserail MCP server and its context instructions into Gemini CLI.',
} as const;

export const READ_ON = '2026-09-30';

export const SOURCES = [
  { id: 'readme-title', cite: 'README.md', quote: '# ParseRail for Gemini CLI', url: `${PRODUCT.repo}/blob/main/README.md`, read_at: READ_ON },
  { id: 'readme-install', cite: 'README.md', quote: 'gemini extensions install https://github.com/kyisaiah47/compound-gemini-extension', url: `${PRODUCT.repo}/blob/main/README.md`, read_at: READ_ON },
  { id: 'manifest-server', cite: 'gemini-extension.json', quote: '"mcpServers": {\n    "parserail": {\n      "command": "npx",\n      "args": ["-y", "parserail-mcp"]', url: `${PRODUCT.repo}/blob/main/gemini-extension.json`, read_at: READ_ON },
  { id: 'manifest-context', cite: 'gemini-extension.json', quote: '"contextFileName": "GEMINI.md"', url: `${PRODUCT.repo}/blob/main/gemini-extension.json`, read_at: READ_ON },
  { id: 'manifest-key', cite: 'gemini-extension.json', quote: '"envVar": "PARSERAIL_API_KEY"', url: `${PRODUCT.repo}/blob/main/gemini-extension.json`, read_at: READ_ON },
  { id: 'gemini-tools', cite: 'GEMINI.md', quote: 'Prefer the specialized tool when the document type is known', url: `${PRODUCT.repo}/blob/main/GEMINI.md`, read_at: READ_ON },
  { id: 'gemini-inputs', cite: 'GEMINI.md', quote: 'The document tools accept exactly one input source', url: `${PRODUCT.repo}/blob/main/GEMINI.md`, read_at: READ_ON },
  { id: 'gemini-errors', cite: 'GEMINI.md', quote: 'A failed call costs nothing, so it is always safe to try.', url: `${PRODUCT.repo}/blob/main/GEMINI.md`, read_at: READ_ON },
  { id: 'github-live', cite: 'GitHub repository', quote: 'Gemini CLI extension for ParseRail', url: PRODUCT.repo, read_at: READ_ON },
] as const;

export const REGISTRATION = [
  { field: 'mcpServers.parserail.command', value: 'npx', meaning: 'The registered server runs through npx.' },
  { field: 'mcpServers.parserail.args', value: '-y parserail-mcp', meaning: 'The registered server resolves parserail-mcp.' },
  { field: 'contextFileName', value: 'GEMINI.md', meaning: 'Gemini CLI reads the bundled context file.' },
  { field: 'settings[0].envVar', value: 'PARSERAIL_API_KEY', meaning: 'The setting stores the ParseRail API key in this environment variable.' },
  { field: 'settings[0].sensitive', value: 'true', meaning: 'The API key setting is marked sensitive.' },
] as const;

export const TOOL_GROUPS = [
  { label: 'Documents', tools: 'parserail_invoice, parserail_receipt, parserail_statement, parserail_tables, parserail_contract, parserail_parse, parserail_split, parserail_compare' },
  { label: 'Text and data', tools: 'parserail_redact, parserail_extract, parserail_structure, parserail_classify, parserail_summarize, parserail_normalize, parserail_match' },
  { label: 'Account', tools: 'parserail_account' },
] as const;

export const ROUTES = ['/'] as const;
