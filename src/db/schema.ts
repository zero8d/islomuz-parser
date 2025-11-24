import {
  pgTable,
  serial,
  varchar,
  integer,
  date,
  time,
  index,
} from 'drizzle-orm/pg-core'

export const prayerTimes = pgTable(
  'prayer_times',
  {
    // Auto-incrementing primary key
    id: serial('id').primaryKey(),
    uniqueDate: varchar('unique_date', { length: 255 }).notNull().unique(),
    // Location and Date info
    city: varchar('city', { length: 100 }).notNull(),
    date: date('date').notNull(), // YYYY-MM-DD

    // Gregorian calendar details from CSV
    month: integer('month').notNull(),
    day: integer('day').notNull(),
    weekday: varchar('weekday', { length: 20 }).notNull(), // e.g., 'Chorshanba'

    // Hijri calendar details
    hijriDay: integer('hijri_day').notNull(),

    // Prayer Times (using 'time' type for HH:MM format)
    tongSaharlik: time('tong_saharlik').notNull(),
    quyosh: time('quyosh').notNull(),
    peshin: time('peshin').notNull(),
    asr: time('asr').notNull(),
    shomIftor: time('shom_iftor').notNull(),
    xufton: time('xufton').notNull(),
  },
  (table) => [
    index('city_idx').on(table.city),
    index('date_idx').on(table.date),
    index('day_idx').on(table.day),
    index('month_idx').on(table.month),
  ]
)

// Type inference for Select and Insert
export type PrayerTime = typeof prayerTimes.$inferSelect
export type NewPrayerTime = typeof prayerTimes.$inferInsert
