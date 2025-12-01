# Islom.uz Namoz Vaqtlarini Yig'uvchi Dastur

[islom.uz](https://islom.uz) saytidan namoz vaqtlarini avtomatik yig'ib beradigan qulay TypeScript dasturi. Dasturda **Playwright** sahifani avtomatik ochish uchun, **Cheerio** esa HTML ma'lumotlarini o'qish uchun ishlatiladi, bu esa ma'lumotning aniq yig'ilishini ta'minlaydi.

Yig'ilgan ma'lumotlar **CSV file**ga eksport qilinishi yoki **PostgreSQL** ma'lumotlar bazasiga **Drizzle ORM** orqali yuborilishi mumkin.

## 🛠 Texnologiyalar

-   **Runtime:** Node.js v22.18 (LTS)
-   **Package Manager:** Bun
-   **Scraping:** Playwright & Cheerio
-   **Database:** PostgreSQL / CSV
-   **ORM:** Drizzle ORM
-   **Language:** TypeScript

---

## 📋 Oldindan talab qilinadi:

Loyihani ishga tushirishdan oldin quyidagi dasturlar o'rnatilgan bo'lishi kerak:

1.  **Node.js (v22.18+)**: run qilish uchun.
2.  **Bun**: paket menejeri sifatida ishlatiladi.
3.  **PostgreSQL Database** (ixtiyoriy): agar ma'lumotlarni bazaga yozmoqchi bo'lsangiz talab qilinadi.

---

## 🚀 O'rnatish

1.  **Reponi klonlash**

    ```bash
    git clone https://github.com/zero8d/islomuz-parser
    cd islomuz-parser
    ```

2.  **Paketlarni o'rnatish**
    Boshlash uchun Bun yordamida barcha paketlarni o'rnating:

    ```bash
    bun install
    ```

3.  **Playwright brauzerlarini o'rnatish**
    Skrayper dinamik kontent yuklash uchun Playwright brauzerlaridan foydalanadi:
    ```bash
    npx playwright install
    ```

---

## ⚙️ Sozlash

Agar ma'lumotlarni PostgreSQL bazasiga yozmoqchi bo'lsangiz, muhit o'zgaruvchilarini sozlashingiz kerak.

1.  Loyihaning asosiy papkasida `.env` fayli yarating.
2.  Quyidagi o'zgaruvchini qo'shing:

```env
PG_URL=postgres://user:password@host:port/database_name
```

> **Eslatma:** Agar faqat CSV eksportidan foydalanmoqchi bo'lsangiz, bu qadamni bajarmaslik mumkin.

---

## 🗄️ Database'ni tayyorlash

Agar loyihani PostgreSQL bilan birinchi marta ishga tushirayotgan bo'lsangiz, Drizzle Kit yordamida migrationlarni run qilishingiz kerak.

Quyidagi buyruqni run qiling:

```bash
bunx drizzle-kit migrate
```

---

## 🖥️ Foydalanish

Loyiha ikkita turli parse qilish formatini taklif qiladi.

### 1. CSV faylga parse qilish

Ma'lumotlarni yig'ib, `.csv` formatida saqlash uchun:

```bash
npm run parse:csv
```

### 2. PostgreSQL-ga parse qilish

Ma'lumotlarni yig'ib, to'g'ridan-to'g'ri bazaga yozish uchun:

```bash
npm run parse:pg
```

---

## ⚠️ Muhim: Runtime va OS haqida

**Windows foydalanuvchilari uchun:**
Loyiha **Node.js** runtime'dan foydalanish uchun sozlangan. Bun ajoyib runtime, lekin u Windows tizimlarida Playwright'ni ishga tushirishda ba'zi muammolariga duch kelishi mumkin. Shuning uchun, `npm run` buyruqlari kodni Node.js orqali bajarish uchun o'rnatilgan.

**Linux/macOS foydalanuvchilari uchun:**
Agar Windows bo'lmasa, xohishingizga ko'ra Bun runtime'dan ham foydalanishingiz mumkin, lekin yuqoridagi buyruqlar Node.js bilan sinovdan o'tgan va barqaror ishlaydi.

---

## 🤝 Hissa Qo'shish

Takliflar, xatoliklar va yangi funksiyalar uchun murojaatlaringizni kutamiz. Agar hissa qo'shishni istasangiz, [issues sahifasi](https://github.com/zero8d/islomuz-parser/issues)ga o'tishingiz mumkin.

Telegram kanal: [@islomapi](https://t.me/islomapi)

Admin bilan aloqa: [@DevKokand](https://t.me/devkokand)

## 📝 Litsenziya

Ushbu loyiha [MIT](LICENSE) litsenziyasi ostida.
