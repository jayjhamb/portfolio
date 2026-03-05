
# journal

A minimal dark-themed blog built with React + TypeScript + Vite.

## Setup

```bash
npm install
npm run dev
```

## Project Structure

```
src/
├── types/
│   └── index.ts          # Post interface
├── data/
│   └── posts.ts          # All blog post content
├── components/
│   ├── PostList.tsx       # Homepage — list of post titles & dates
│   ├── PostList.module.css
│   ├── PostView.tsx       # Individual post page
│   └── PostView.module.css
├── App.tsx                # Root — manages active post state
├── main.tsx               # Entry point
└── index.css              # Global styles & CSS variables
```

## Adding Posts

Edit `src/data/posts.ts` and add a new object to the `posts` array:

```ts
{
  title: 'Your post title',
  date: 'Mar 01, 2026',
  slug: 'your-post-slug',
  body: `<p>Your content here.</p>`,
}
```

## Customisation

CSS variables are defined in `src/index.css`:

```css
:root {
  --bg: #0a0a0a;
  --text: #d6d0c8;
  --muted: #4a4540;
  --accent: #c8b89a;
  --line: #1e1e1e;
}
```
=======
## Portfolio

Accessible at https://jayjhamb.com


