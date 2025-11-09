// apps/desktop/src/app/api/_debug/route.ts
import { NextResponse } from 'next/server';
export async function GET() {
  return NextResponse.json({ ok: true, time: new Date().toISOString() });
}
