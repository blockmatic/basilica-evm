export const appConfig = {
  services: {
    codexApiKey: process.env.CODEX_API_KEY || '',
    googleAnalyticsId: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID || '',
    sentryDsn: process.env.NEXT_PUBLIC_SENTRY_DSN || '',
  },
  // feature flags
  features: {
    someFlag: process.env.NEXT_PUBLIC_SOME_FLAG === 'true',
  },
} as const
