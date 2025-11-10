// src/app/api/guard/route.ts
export const runtime = 'edge';

function getCodes() {
  const raw = process.env.ACCESS_CODES ?? '';
  return raw.split(',').map(s => s.trim()).filter(Boolean);
}

function extractCode(req: Request) {
  const url = new URL(req.url);
  return (
    url.searchParams.get('code') ||                     // ?code=XXXX
    req.headers.get('x-access-code') ||                 // ヘッダ
    ''                                                  // （必要ならCookie実装も可）
  );
}

export async function GET(req: Request) {
  const codes = getCodes();
  if (codes.length === 0) return Response.json({ ok: true, mode: 'open' });

  const code = extractCode(req);
  const ok = codes.includes(code);
  return new Response(JSON.stringify({ ok, mode: 'code' }), {
    status: ok ? 200 : 401,
    headers: { 'content-type': 'application/json' },
  });
}

export const POST = GET;
