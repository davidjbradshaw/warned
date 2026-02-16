# WARNED Website Migration Guide

## ✅ Completed Steps

1. ✅ Downloaded SquareSpace site content (1,726 files)
2. ✅ Created Astro project with i18n support
3. ✅ Built core components and layouts
4. ✅ Created initial pages for all three languages
5. ✅ Set up GitHub Actions for deployment
6. ✅ Committed initial migration to Git

## 🚀 Deployment Instructions

### 1. Push to GitHub

```bash
git push origin main
```

### 2. Enable GitHub Pages

1. Go to your GitHub repository settings
2. Navigate to **Pages** section
3. Under "Source", select **GitHub Actions**
4. The site will deploy automatically to: `https://davidbradshaw.github.io/warned/`

### 3. (Optional) Custom Domain Setup

To use `warned.plus`:

1. Create `public/CNAME` file:
   ```bash
   echo "warned.plus" > public/CNAME
   ```

2. Update DNS records with your domain provider:
   - Add CNAME record: `www.warned.plus` → `davidbradshaw.github.io`
   - Add A records for apex domain pointing to GitHub Pages IPs:
     - 185.199.108.153
     - 185.199.109.153
     - 185.199.110.153
     - 185.199.111.153

3. Update `astro.config.mjs`:
   ```javascript
   export default defineConfig({
     site: 'https://warned.plus',
     base: '/', // Remove /warned base path
     // ... rest of config
   });
   ```

## 📋 Content Migration TODO

### High Priority

- [ ] **Logo**: Replace `public/images/logo.png` with actual WARNED logo
  - Source: Look in SquareSpace download for logo files
  - Or extract from: `squarespace-download/squarespace-download/www.warned.plus/`

- [ ] **Images**: Copy images from SquareSpace download
  ```bash
  # Find and copy images (note: most are hosted on SquareSpace CDN)
  # You may need to download these manually
  ```

- [ ] **Event Pages**: Create detailed event pages
  - Thé Dansant details
  - Thé au Jardin details
  - Chantage details
  - Past events archive
  - Calendar/upcoming events

- [ ] **Content Pages**: Add remaining pages
  - About/History page
  - Contact page (with form)
  - Reports/documents page
  - Privacy policy / GDPR page

### Medium Priority

- [ ] **Contact Form**: Integrate form solution
  - Option 1: [Formspree](https://formspree.io/) - Easy, free tier available
  - Option 2: [Web3Forms](https://web3forms.com/) - Free, no backend needed
  - Option 3: Custom solution with serverless function

- [ ] **Calendar Integration**: Add event calendar
  - Could use SquareSpace calendar export
  - Or integrate Google Calendar
  - Or build custom calendar component

- [ ] **Social Media**: Verify social links work
  - Facebook: http://www.facebook.com/warned.plus
  - Instagram: https://www.instagram.com/weareretirednotexpired/
  - Facebook Group: http://facebook.com/groups/theaujardin

### Low Priority

- [ ] **SEO Optimization**
  - Add Open Graph images
  - Add sitemap.xml
  - Verify meta descriptions for all pages
  - Add structured data (events, organization)

- [ ] **Analytics**: Add website analytics
  - Google Analytics
  - Or privacy-friendly alternative (Plausible, Fathom)

- [ ] **Performance**: Optimize assets
  - Compress images
  - Add image lazy loading
  - Consider adding PWA support

## 📁 Downloaded Content Location

All SquareSpace content is in: `squarespace-download/squarespace-download/www.warned.plus/`

### Useful Files to Review:

```bash
# English pages
squarespace-download/squarespace-download/www.warned.plus/en/

# French pages
squarespace-download/squarespace-download/www.warned.plus/fr/

# Dutch pages
squarespace-download/squarespace-download/www.warned.plus/nl/
```

You can open these HTML files to extract:
- Text content
- Image references (though images are on SquareSpace CDN)
- Page structure
- Event details

## 🛠️ Development Workflow

### Adding a New Page

1. Create page file in appropriate language folder:
   ```bash
   src/pages/en/new-page.astro
   src/pages/fr/new-page.astro
   src/pages/nl/new-page.astro
   ```

2. Use BaseLayout:
   ```astro
   ---
   import BaseLayout from '../../layouts/BaseLayout.astro';
   ---

   <BaseLayout title="Page Title" lang="en" currentPath="new-page">
     <!-- Your content here -->
   </BaseLayout>
   ```

3. Add navigation link in `src/components/Header.astro` if needed

### Adding Translations

1. Open `src/i18n/translations.ts`
2. Add new keys to all three languages:
   ```typescript
   export const translations = {
     en: { 'new.key': 'English text' },
     fr: { 'new.key': 'French text' },
     nl: { 'new.key': 'Dutch text' }
   };
   ```

3. Use in components:
   ```astro
   {t(currentLang, 'new.key')}
   ```

## 📞 Support

If you need help:
- Astro Documentation: https://docs.astro.build
- GitHub Pages: https://docs.github.com/en/pages
- Issue with this migration: Contact the developer

## 🎉 Success Checklist

Before going live:
- [ ] Site deploys successfully on GitHub Pages
- [ ] All language versions work correctly
- [ ] Navigation works across all pages
- [ ] Contact information is correct
- [ ] Social media links work
- [ ] Mobile responsive design looks good
- [ ] Logo and branding are correct
- [ ] Key event pages are complete

---

**Note**: The current deployment includes placeholder content. Replace with actual content from the SquareSpace site before going live.
