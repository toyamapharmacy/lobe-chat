// apps/desktop/app/api/_debug/route.ts
export const dynamic = 'force-dynamic';

export async function GET() {
  return new Response(JSON.stringify({
    ok: true,
    env: {
      OPENAI_API_KEY: !!process.env.OPENAI_API_KEY,
      KEY_VAULTS_SECRET: !!process.env.KEY_VAULTS_SECRET,
      ENABLE_OIDC: process.env.ENABLE_OIDC,
    },
  }), {
    status: 200,
    headers: { 'content-type': 'application/json' },
  });
}
