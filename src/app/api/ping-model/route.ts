export const runtime = 'edge';

export async function POST(req: Request) {
  const { prompt = "Say 'pong'." } = await req.json().catch(() => ({}));

  // ここでは OpenAI のチャットAPI（互換含む）に投げる例
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) return new Response('Missing OPENAI_API_KEY', { status: 500 });

  const r = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'authorization': `Bearer ${apiKey}`,
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      model: process.env.MODEL_DEFAULT || 'gpt-4o-mini',
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.3,
    }),
  });

  if (!r.ok) {
    const text = await r.text();
    return new Response(text || 'Upstream error', { status: r.status });
  }
  const data = await r.json();
  const content = data?.choices?.[0]?.message?.content ?? '';
  return Response.json({ ok: true, content });
}
