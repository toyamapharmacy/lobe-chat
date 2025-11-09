export async function GET() {
  return Response.json({
    ok: true,
    env: {
      openai: Boolean(process.env.OPENAI_API_KEY),
      keyVaultSecret: Boolean(process.env.KEY_VAULTS_SECRET),
    },
  });
}
