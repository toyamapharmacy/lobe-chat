// src/app/api/ping-model/route.ts
export const runtime = 'edge';

function getBase() {
  // OpenAI 互換全部を拾えるように
  return (
    process.env.OPENAI_BASE_URL ||
    process.env.OPENAI_API_BASE ||      // 互換環境の別名を一応カバー
    'https://api.openai.com/v1'
  );
}

export async function GET() {
  try {
    const key = process.env.OPENAI_API_KEY;
    if (!key) {
      return Response.json({ ok: false, error: 'OPENAI_API_KEY missing' }, { status: 500 });
    }

    const model = process.env.MODEL_DEFAULT || 'gpt-4o-mini';
    const base = getBase();

    // models 一覧が出ない互換実装もあるので、最小トークンのダミー推論で疎通確認
    const url = `${base}/chat/completions`;
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${key}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model,
        messages: [{ role: 'user', content: 'ping' }],
        max_tokens: 1,
      }),
    });

    if (!res.ok) {
      const text = await res.text().catch(() => '');
      return Response.json(
        { ok: false, model, status: res.status, body: text?.slice(0, 300) },
        { status: 200 } // 200 で返しつつ中身で判定できるように
      );
    }

    return Response.json({ ok: true, model });
  } catch (e: any) {
    return Response.json({ ok: false, error: String(e?.message || e) }, { status: 200 });
  }
}
