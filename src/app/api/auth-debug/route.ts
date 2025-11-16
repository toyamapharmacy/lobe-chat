import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
  return NextResponse.json({
    NEXT_PUBLIC_ENABLE_NEXT_AUTH: process.env.NEXT_PUBLIC_ENABLE_NEXT_AUTH || null,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET ? 'set' : 'missing',
    NEXTAUTH_URL: process.env.NEXTAUTH_URL || null,
    AUTH_GITHUB_ID: process.env.AUTH_GITHUB_ID ? 'set' : 'missing',
    AUTH_GITHUB_SECRET: process.env.AUTH_GITHUB_SECRET ? 'set' : 'missing',
    AUTH_GOOGLE_ID: process.env.AUTH_GOOGLE_ID ? 'set' : 'missing',
    AUTH_GOOGLE_SECRET: process.env.AUTH_GOOGLE_SECRET ? 'set' : 'missing',
    NODE_ENV: process.env.NODE_ENV,
  });
}
