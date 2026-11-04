# DexKor WhatsApp Cost Audit Landing Page

React 18 + Vite 6 + Tailwind CSS 4 + Framer Motion + Lucide.

## Run

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # outputs dist/
npm run preview   # serves dist/ locally
```

## Wire before go-live

1. `VITE_LEAD_ENDPOINT` in `.env` (copy `.env.example`). The form POSTs JSON with:
   `name, brand, email, phone, volume, utm_source, utm_medium, utm_campaign, utm_term, utm_content, gclid, fbclid, landing_page, referrer, timestamp, source`.
   In dev with no endpoint set, submissions are simulated as successful.
2. Official DexKor logo: swap the mark in `src/components/Logo.jsx`.
3. Canonical URL and OG image in `index.html` (currently placeholders on dexkor.com).
4. Privacy and Terms links in `src/components/Footer.jsx`.
5. Testimonials in `src/data/testimonials.js` ship with role-based attribution only. Add names once each quote is confirmed in writing.

## Structure

```
src/
  components/   one file per section, plus CTAButton, Logo, SectionHeading, ProofTicker
  data/         testimonials.js, faq.js, tickerActivities.js
  lib/          format.js (Indian digit grouping), scroll.js, motion.jsx (Reveal, Stagger, CountUp, Highlight)
  services/     leadService.js (endpoint from env, no secrets in the bundle)
  App.jsx, main.jsx, index.css (Tailwind v4 theme tokens + component CSS)
```

## Example numbers on the page

All figures derive from one worked example: 1,40,000 marketing messages a month, Meta cost 1,20,834, platform total 1,52,600, markup 31,766 (0.227 per message), 3,81,192 a year.
