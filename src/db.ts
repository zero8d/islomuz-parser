import 'dotenv/config'
import { drizzle } from 'drizzle-orm/postgres-js'
import env from './env.ts'
import { prayerTimes } from './db/schema.ts'
export const db = drizzle(env.PG_URL, { schema: { prayerTimes } })
