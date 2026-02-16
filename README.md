# WARNED Website

We Are Retired Not Expired - A multilingual website for the WARNED community in Brussels.

## 🌐 About

WARNED is a community organization dedicated to enriching the lives of retirees in Brussels through engaging social activities, cultural events, and meaningful connections.

This website is built with Astro and deployed to GitHub Pages, supporting three languages:
- English (EN)
- French (FR)
- Dutch (NL)

## 🚀 Project Structure

```text
/
├── public/
│   └── images/          # Static images and assets
├── src/
│   ├── components/      # Reusable Astro components
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   └── LanguageSwitcher.astro
│   ├── layouts/         # Page layouts
│   │   └── BaseLayout.astro
│   ├── pages/           # Page routes
│   │   ├── en/          # English pages
│   │   ├── fr/          # French pages
│   │   ├── nl/          # Dutch pages
│   │   └── index.astro  # Language selector
│   ├── i18n/            # Internationalization
│   │   ├── config.ts
│   │   └── translations.ts
│   └── styles/          # Global styles
│       └── global.css
└── .github/
    └── workflows/
        └── deploy.yml   # GitHub Actions deployment
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 📦 Deployment

The site is automatically deployed to GitHub Pages when changes are pushed to the `main` branch.

The deployment workflow:
1. Checks out the code
2. Installs dependencies
3. Builds the site with Astro
4. Deploys to GitHub Pages

### Setting Up GitHub Pages

1. Go to repository Settings → Pages
2. Set Source to "GitHub Actions"
3. (Optional) Add custom domain in CNAME file

## 🎨 Customization

### Adding Content

1. Add new pages in `src/pages/{lang}/` for each language
2. Update navigation in `src/components/Header.astro`
3. Add translations in `src/i18n/translations.ts`

### Styling

- Global styles: `src/styles/global.css`
- Component styles: Scoped `<style>` blocks in `.astro` files
- CSS variables defined in `:root` in global.css

### Images

Place images in `public/images/` and reference them as `/images/filename.png`

## 📧 Contact

- Email: info@warned.plus
- Phone: (+32) 497 75 52 75
- Address: 22 Kauwberg, Uccle, Bruxelles, 1180, Belgium

## 📄 License

Copyright © 2026 WARNED iASBL. All rights reserved.
