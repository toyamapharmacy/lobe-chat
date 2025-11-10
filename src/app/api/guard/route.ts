// src/app/api/guard/route.ts
export const runtime = 'edge';

export async function GET() {
  return Response.json({ ok: true, mode: 'open' });
}

export async function POST() {
  return GET();
}
