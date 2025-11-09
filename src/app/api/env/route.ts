export async function GET(req: Request) {
  const token = process.env.ADMIN_GUARD_TOKEN;
  if (token && req.headers.get('x-admin-token') !== token) {
    return new Response('forbidden', { status: 403 });
  }
  const needed = ['OPENAI_API_KEY', 'NEXT_PUBLIC_APP_URL', 'AI_PROVIDER', 'MODEL_DEFAULT'];
  const missing = needed.filter((k) => !process.env[k]);
  return Response.json({ ok: missing.length === 0, missing });
}
