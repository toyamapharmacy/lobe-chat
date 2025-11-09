// src/app/api/guard/route.ts もしくは src/app/api/_guard/route.ts
export const runtime = 'edge';

export async function GET(req: Request) {
  // ① 簡易なヘッダーガード（環境変数にトークンを置く）
  const token = process.env.ADMIN_GUARD_TOKEN;
  const got   = req.headers.get('x-admin-token');
  if (token && got !== token) return new Response('forbidden', { status: 403 });

  // ② ここにチェック内容（env の有無など）
  const need = ['OPENAI_API_KEY','NEXT_PUBLIC_APP_URL'];
  const missing = need.filter(k => !process.env[k]);
  return Response.json({ ok: missing.length === 0, missing });
}
