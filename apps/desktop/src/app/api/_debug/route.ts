// apps/desktop/app/api/_debug/route.ts
import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic'; // キャッシュ回避

export async function GET(req: NextRequest) {
  const env = {
    HAS_OPENAI_API_KEY: !!process.env.OPENAI_API_KEY,
    ENABLE_OIDC: process.env.ENABLE_OIDC,
    ENABLE_ACCESS_CODE: process.env.ENABLE_ACCESS_CODE,
    NEXT_PUBLIC_USE_ACCESS_CODE: process.env.NEXT_PUBLIC_USE_ACCESS_CODE,
    KEY_VAULTS_SECRET_LEN: (process.env.KEY_VAULTS_SECRET ?? '').length,
    NEXT_PUBLIC_KEY_VAULTS_SECRET_LEN: (process.env.NEXT_PUBLIC_KEY_VAULTS_SECRET ?? '').length,
  };

  return NextResponse.json({
    url: req.nextUrl.toString(),
    env,
  });
}
