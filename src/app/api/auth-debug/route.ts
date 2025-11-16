return NextResponse.json({
  NEXT_PUBLIC_ENABLE_NEXT_AUTH: process.env.NEXT_PUBLIC_ENABLE_NEXT_AUTH || null,
  NEXT_AUTH_SECRET: process.env.NEXT_AUTH_SECRET ? 'set' : 'missing',
  NEXTAUTH_URL: process.env.NEXTAUTH_URL || null,
  NEXT_AUTH_SSO_PROVIDERS: process.env.NEXT_AUTH_SSO_PROVIDERS || null,
  AUTH_GITHUB_ID: process.env.AUTH_GITHUB_ID ? 'set' : 'missing',
  AUTH_GITHUB_SECRET: process.env.AUTH_GITHUB_SECRET ? 'set' : 'missing',
  AUTH_GOOGLE_ID: process.env.AUTH_GOOGLE_ID ? 'set' : 'missing',
  AUTH_GOOGLE_SECRET: process.env.AUTH_GOOGLE_SECRET ? 'set' : 'missing',
  NODE_ENV: process.env.NODE_ENV,
});
