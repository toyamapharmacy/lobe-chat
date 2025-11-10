export const runtime = 'edge';
export async function GET() {
  const flags = {
    ENABLE_ACCESS_CODE: process.env.ENABLE_ACCESS_CODE,
    NEXT_PUBLIC_USE_ACCESS_CODE: process.env.NEXT_PUBLIC_USE_ACCESS_CODE,
    ENABLE_OIDC: process.env.ENABLE_OIDC,
    NEXT_PUBLIC_ENABLE_OIDC: process.env.NEXT_PUBLIC_ENABLE_OIDC,
    NEXT_PUBLIC_ENABLE_NEXT_AUTH: process.env.NEXT_PUBLIC_ENABLE_NEXT_AUTH,
    AI_PROVIDER: process.env.AI_PROVIDER,
    MODEL_DEFAULT: process.env.MODEL_DEFAULT,
  };
  return Response.json({ ok: true, flags });
}
