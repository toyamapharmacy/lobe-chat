// apps/desktop/src/app/api/_debug/route.ts
import { NextResponse } from 'next/server';

export const runtime = 'nodejs'; // 明示（edgeでも可）

export async function GET() {
  return NextResponse.json({
    ok: true,
    now: new Date().toISOString(),
    env: Object.keys(process.env).length, // ざっくり確認用
  });
}
