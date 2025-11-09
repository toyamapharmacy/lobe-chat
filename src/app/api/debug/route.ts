export const runtime = 'edge';
export async function GET() {
  return new Response(
    JSON.stringify({
      ok: true,
      time: new Date().toISOString(),
      envs: Object.keys(process.env).slice(0, 6),
    }),
    { headers: { 'content-type': 'application/json' } },
  );
}
