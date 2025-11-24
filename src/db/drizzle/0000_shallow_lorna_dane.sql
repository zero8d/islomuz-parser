CREATE TABLE "prayer_times" (
	"id" serial PRIMARY KEY NOT NULL,
	"unique_date" varchar(255) NOT NULL,
	"city" varchar(100) NOT NULL,
	"date" date NOT NULL,
	"month" integer NOT NULL,
	"day" integer NOT NULL,
	"weekday" varchar(20) NOT NULL,
	"hijri_day" integer NOT NULL,
	"tong_saharlik" time NOT NULL,
	"quyosh" time NOT NULL,
	"peshin" time NOT NULL,
	"asr" time NOT NULL,
	"shom_iftor" time NOT NULL,
	"xufton" time NOT NULL,
	CONSTRAINT "prayer_times_unique_date_unique" UNIQUE("unique_date")
);
--> statement-breakpoint
CREATE INDEX "city_idx" ON "prayer_times" USING btree ("city");--> statement-breakpoint
CREATE INDEX "date_idx" ON "prayer_times" USING btree ("date");--> statement-breakpoint
CREATE INDEX "day_idx" ON "prayer_times" USING btree ("day");--> statement-breakpoint
CREATE INDEX "month_idx" ON "prayer_times" USING btree ("month");