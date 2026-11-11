# Aldy Rent a Car — Dubai

Premium Next.js website for Aldy Rent a Car (Al Garhoud, Dubai).

## Stack

- Next.js App Router + TypeScript + Tailwind CSS
- Framer Motion + Lucide React
- WhatsApp-first booking (`wa.me/971506771216`)

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

> If `Aldy Rent a Car` has a broken `node_modules` (folder name with spaces caused install locks), use this clean copy at `Downloads/aldy-rentacar` or delete `node_modules` / `node_modules_broken` and run `npm install` again.

## Edit company details

- Central config: `lib/site-config.ts`
- Sample fleet: `data/cars.ts`
- Services / features / testimonials: `data/`
- Local images: `public/images/` (see README there)

## Routes

- `/` — full marketing homepage + loader + floating WhatsApp
- `/cars` — filterable sample fleet
- `/contact` — contact details + validated WhatsApp form

## Deploy

Ready for Vercel. Update `siteConfig.url` before production SEO/canonical URLs.
