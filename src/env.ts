import { configDotenv } from 'dotenv'
configDotenv()
import z from 'zod'
const envSchema = z.object({
  PG_URL: z.url(),
})

const env = envSchema.parse(process.env)

export default env
