# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static personal portfolio website built with vanilla HTML, CSS, and JavaScript. No build process, frameworks, or dependencies are required. The site is deployed via GitHub Pages and accessible at pujar.dev (via CNAME redirect).

## Development Commands

### Local Development
```bash
# View the site locally - simply open index.html in a browser
# OR use a local server (recommended for testing):

# Python 3
python -m http.server 8000

# Node.js
npx http-server
```

Then navigate to `http://localhost:8000`

### Deployment
```bash
# Changes are automatically deployed via GitHub Pages
git add .
git commit -m "Your message"
git push
```

The site will be live within 1-2 minutes at pujar.dev after pushing to the `main` branch.

## Architecture

### File Structure
- **index.html** - Single-page application with all content sections
- **css/styles.css** - All styling using CSS custom properties for theming
- **js/main.js** - Interactive functionality (navigation, animations, form validation)
- **images/** - Profile photo and assets

### Design System

**CSS Variables** (in `:root` of styles.css):
- All colors, spacing, typography, and transitions are defined as CSS custom properties
- Primary accent color: `--color-primary` (#2563eb blue)
- To change the entire color scheme, modify only the CSS variables

**Responsive Breakpoints**:
- Mobile: < 768px
- Tablet: 768-1024px
- Desktop: > 1024px

### Key Features

**Smooth Scroll Navigation**:
- Hash-based navigation (`#about`, `#experience`, etc.)
- Smooth scroll with offset for fixed header (70px)
- Active section highlighting
- Mobile hamburger menu

**Scroll Animations**:
- Elements with `.fade-in` class animate on scroll
- Uses Intersection Observer API
- Respects `prefers-reduced-motion` preference

**Contact Form**:
- Client-side validation in js/main.js
- Currently configured with placeholder submission (line ~150 in main.js)
- To enable: Uncomment Web3Forms code and add access key from web3forms.com
- Includes honeypot field (`_gotcha`) for spam protection

## Content Management

### Adding Work Experience
Edit the timeline in index.html (lines 107-129):
```html
<div class="timeline-item fade-in">
    <div class="timeline-marker"></div>
    <div class="timeline-content">
        <span class="timeline-date">Date Range</span>
        <h3>Job Title</h3>
        <h4>Company Name</h4>
        <p class="location"><i class="fas fa-map-marker-alt"></i> Location</p>
        <ul>
            <li>Achievement 1</li>
            <li>Achievement 2</li>
        </ul>
    </div>
</div>
```

### Adding Education
Edit education cards in index.html (lines 138-154). Follow the same structure as existing cards.

### Updating Profile Image
1. Add image to `images/` directory (preferably as `profile.jpg`)
2. Already referenced in index.html line 74: `<img src="images/profile.jpg">`

### Modifying Skills
Edit skill categories in index.html (lines 163-206). Each category uses Font Awesome icons and tag-based layout.

## External Dependencies

**CDN Resources**:
- Google Fonts: Inter (body) and Poppins (headings)
- Font Awesome 6.4.0 for icons

These are loaded via CDN in index.html head section. No package.json or npm required.

## Common Modifications

### Changing Colors
All in css/styles.css lines 1-35:
```css
:root {
    --color-primary: #2563eb;
    --color-primary-dark: #1e40af;
    --color-primary-light: #3b82f6;
}
```

### Adjusting Spacing
Modify spacing variables in css/styles.css:
```css
:root {
    --spacing-xs: 0.5rem;
    --spacing-sm: 1rem;
    --spacing-md: 2rem;
    --spacing-lg: 4rem;
    --spacing-xl: 6rem;
}
```

### Enabling Contact Form
In js/main.js around line 150, uncomment the Web3Forms fetch block and replace `YOUR_ACCESS_KEY_HERE` with actual key from web3forms.com (free tier available).

## Accessibility Notes

- Semantic HTML5 elements throughout
- ARIA labels on interactive elements (e.g., nav toggle button)
- Keyboard navigation support
- All animations respect `prefers-reduced-motion`
- Focus states on all interactive elements
- Alt text on images (profile image at line 74)

## GitHub Pages Configuration

- Deployed from `main` branch, root directory
- Custom domain: pujar.dev (configured via CNAME in repository settings)
- No Jekyll processing (static HTML)
- Automatic deployment on push to main
