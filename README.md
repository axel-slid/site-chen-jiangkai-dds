# Chen Jiangkai DDS Website Preview

Polished Vite/React website preview for Chen Jiangkai DDS, a dentist listed at 430 E Calaveras Blvd in Milpitas, CA.

## Local Setup

```bash
npm install
npm run build
```

For local development outside the automated agent:

```bash
npm run dev
```

## Project Notes

- Public facts used: business name, category, phone, address, Google rating/review count, Google Maps URL, and the no-website signal from Google Place Details.
- Yelp URL included after corroborating the direct Yelp page through live web search and matching directory references.
- Hours are marked as confirmation-needed because public directory listings conflict.
- Service categories are intentionally labeled as editable placeholders.

## Deploy

This project is ready for Vercel as a standard Vite build.

```bash
npm install
npm run build
vercel --prod
```

The automated agent should only run Vercel deployment when a non-interactive `vercel whoami` succeeds.
