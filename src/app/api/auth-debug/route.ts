// app/api/auth-debug/route.ts   ← ファイル名そのままで OK
import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    AUTH0_CLIENT_ID: !!process.env.AUTH0_CLIENT_ID,
    AUTH0_CLIENT_SECRET: !!process.env.AUTH0_CLIENT_SECRET,
    AUTH0_ISSUER: process.env.AUTH0_ISSUER,
    AUTH_SECRET: !!process.env.AUTH_SECRET,
    NEXTAUTH_SECRET: !!process.env.NEXTAUTH_SECRET,
    AUTH_URL: process.env.AUTH_URL,
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    NEXT_AUTH_SSO_PROVIDERS: process.env.NEXT_AUTH_SSO_PROVIDERS,
    NEXT_PUBLIC_ENABLE_NEXT_AUTH: process.env.NEXT_PUBLIC_ENABLE_NEXT_AUTH,
  });
}
