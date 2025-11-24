import { defineConfig } from 'drizzle-kit'
import env from './src/env'

export default defineConfig({
  // Point this to your schema file location
  schema: './src/db/schema.ts',
  out: './src/db/drizzle',
  dialect: 'postgresql',
  dbCredentials: {
    url: env.PG_URL,
  },
  verbose: true,
  strict: true,
})
