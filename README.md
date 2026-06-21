# 📝 Blog

A modern blog application built with **Next.js**, **TypeScript**, **Tailwind CSS**, and **Supabase**. The project fetches blog posts from Supabase and offers features like search, pagination, dark/light mode, and social media sharing.

🔗 **Live Demo:** [blog-farhan.vercel.app](https://blog-farhan.vercel.app/)

---

## ✨ Features

- 📰 Blog post listing with loading skeletons
- 🔍 Debounced post search to avoid unnecessary requests
- 📄 Pagination for navigating between posts
- 🧾 Dedicated post page with dynamic routing (`/[id]`)
- 🌗 Dark / Light mode switch
- 🔗 Social media share buttons for posts
- 🕒 "Recent Posts" section
- 🖼️ Image optimization and placeholders
- ⚠️ Custom error and not-found pages

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| [Next.js](https://nextjs.org/) | Main framework (App Router) |
| [TypeScript](https://www.typescriptlang.org/) | Type safety and safer code |
| [Tailwind CSS](https://tailwindcss.com/) | Styling |
| [Supabase](https://supabase.com/) | Database and backend for posts |
| [next-themes](https://github.com/pacocoursey/next-themes) | Dark/light mode management |
| [next-share](https://github.com/socialshares/next-share) | Social share buttons |
| [use-debounce](https://github.com/xnimorz/use-debounce) | Debouncing search input |
| [plaiceholder](https://plaiceholder.co/) + [sharp](https://sharp.pixelplumbing.com/) | Image placeholders and optimization |
| [react-loading-skeleton](https://github.com/dvtng/react-loading-skeleton) | Loading skeletons |

---

## 🚀 Getting Started


### Installation

```bash
git clone https://github.com/FARHAN2324J/Blog.git
cd Blog
npm install
```

### Environment variables

Create a `.env.local` file in the project root and add the following values from your Supabase project:

```env
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
```

### Running the development server

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Project Structure

```
src/
├── app/                  # Routes and pages (App Router)
│   ├── [id]/             # Dedicated page for each post
│   ├── layout.tsx
│   └── page.tsx          # Home page
├── components/           # React components
│   ├── Post/             # Post-related components
│   ├── RecentPosts/       
│   └── ui/                # Search, share buttons, theme switch, etc.
├── lib/
│   └── supaBaseClient.ts # Supabase client connection
└── types/
    └── post.ts           # Post-related types
```

---

