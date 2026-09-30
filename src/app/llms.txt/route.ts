import { PRODUCT, ROUTES, SOURCES } from '@/lib/product';
export function GET() { return new Response(`# ${PRODUCT.name}\n\n${PRODUCT.description}\n\nInstall: ${PRODUCT.install}\n\nRoutes:\n${ROUTES.join('\n')}\n\nSources:\n${SOURCES.map((s) => `${s.cite}: ${s.url}`).join('\n')}\n`, { headers: { 'content-type': 'text/plain; charset=utf-8' } }); }
