# Portfolio

Personal portfolio built with [Next.js](https://nextjs.org), Tailwind CSS, and [EmailJS](https://www.emailjs.com) for the contact form.

## Getting started

Install dependencies and run the dev server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Contact form setup (EmailJS)

The contact form needs three environment variables. Without them, the form shows "Contact form is not configured yet".

1. Create a free account at [emailjs.com](https://www.emailjs.com).
2. Add an **Email Service** (e.g. Gmail) → copy the **Service ID**.
3. Create an **Email Template** using the variables `{{from_name}}`, `{{from_email}}`, `{{message}}`, `{{time}}` → copy the **Template ID**.
4. Find your **Public Key** under [Account → General](https://dashboard.emailjs.com/admin/account).

For local development, copy `.env.example` to `.env.local` and fill in your values:

```bash
cp .env.example .env.local
```

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

Restart `npm run dev` after changing `.env.local`.

> Note: `NEXT_PUBLIC_*` variables are embedded in the site at **build time**. The EmailJS public key is meant to be public, so this is safe, but it also means the variables must be set **before** the site is built, both locally and on your host.

## Deployment (Vercel)

1. Push this repository to GitHub.
2. Go to [vercel.com](https://vercel.com), sign in with GitHub, click **Add New → Project**, and import this repo. Vercel detects Next.js automatically.
3. Open **Project Settings → Environment Variables** and add the three `NEXT_PUBLIC_EMAILJS_*` variables from above.
4. Click **Deploy** (or **Redeploy** if the variables were added after the first deploy, they only take effect on a new build).

After that, every `git push` to the main branch automatically redeploys the site.

Alternatives: [Netlify](https://www.netlify.com) and [Cloudflare Pages](https://pages.cloudflare.com) also support Next.js, the same rule applies: set the environment variables in the project settings, then trigger a new build.
