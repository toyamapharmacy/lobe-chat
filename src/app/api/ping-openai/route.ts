export const runtime = 'edge';

export async function GET() {
  try {
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) return Response.json({ ok: false, error: 'NO_API_KEY' }, { status: 500 });

    const r = await fetch('https://api.openai.com/v1/responses', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: process.env.MODEL_DEFAULT || 'gpt-4o-mini',
        input: 'ping',
        // ✅ どちらか一方
        // max_output_tokens: 16,
      }),
    });

    if (!r.ok) {
      const text = await r.text();
      return Response.json({ ok: false, status: r.status, body: text });
    }
    return Response.json({ ok: true });
  } catch (e: any) {
    return Response.json({ ok: false, error: String(e) }, { status: 500 });
  }
}
