// src/app/api/_debug/route.ts
export const runtime = 'edge';
export async function GET() {
  return new Response(JSON.stringify({
    ok: true,
    time: new Date().toISOString(),
    envs: Object.keys(process.env).slice(0, 6), // 最初の数個だけ
  }), { headers: { 'content-type': 'application/json' } });
}
