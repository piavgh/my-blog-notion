# My Blog Notion

Hi, my name is Hoang Trinh. I'm a passionate software developer who produces free educational content on blockchain, cloud-native and web development.

This is my personal blog repository. It pulls content from Notion (because writing in Markdown is so tired 🤣).
## Quick Start

### Duplicate Notion database template

Duplicate [the following Notion database](https://www.notion.so/0d3e00c6bbe54231897b9fcbc7747f78?v=4d7f0006d9a144b5bd8b9251f2ec39cd), grab the database ID and add it to the environment variables in the `.env` file.

### Running Locally

```bash
$ git clone https://github.com/piavgh/my-blog-notion.git

$ cd my-blog-notion

$ cp .env.example .env // then replace with your configs

$ yarn install

$ yarn dev
```

## Project Overview

### Technologies

- **Framework**: [Next.js](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Content**: [Notion API](https://developers.notion.com)
- **Database**: [Supabase](https://supabase.com)
- **Open Graph Images**: [Cloudinary](https://cloudinary.com)
- **Newsletter**: [Revue](https://www.getrevue.co)
- **Deployment**: [Vercel](https://vercel.com)

### Components

- `components/*` - Various components used throughout the site.
- `layouts/*` - The different layout options available to use on each page.
- `lib/*` - Short for "library", a collection of helpful utilities or code for external services.
- `pages/api/*` - [API routes](https://nextjs.org/docs/api-routes/introduction) powering article reactions, article views, [`/stats`](https://hoangtrinhj.com/stats), newsletter subscription, and to generate a sitemap.
- `pages/blog/*` - Static pre-rendered blog pages that fetch information from the Notion API.
- `pages/stats` - [Site statistics](https://hoangtrinhj.com/stats) about my website.
- `pages/*` - All other static pages.
- `public/*` - Static assets including robots.txt
- `styles/*` - A handful of global styles, and reusable classes utilzing @apply with Tailwind.
- `data/*` - a simple object containing global data about the site.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## ☕ Support Me
<a href='https://ko-fi.com/F1F5191YL' target='_blank'><img height='36' style='border:0px;height:36px;' src='https://cdn.ko-fi.com/cdn/kofi3.png?v=2' border='0' alt='Buy Me a Coffee at ko-fi.com' /></a>

## License
[MIT](https://choosealicense.com/licenses/mit/)
