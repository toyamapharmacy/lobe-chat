export const runtime = 'edge';

export async function GET() {
  const accessCodeOn =
    process.env.ENABLE_ACCESS_CODE === 'true' ||
    process.env.NEXT_PUBLIC_USE_ACCESS_CODE === 'true';

  return Response.json({
    ok: true,
    mode: accessCodeOn ? 'access_code' : 'open',
  });
}
