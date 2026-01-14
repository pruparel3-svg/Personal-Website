# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

# IMPORTANT - Custom Instructions
- **When I start a session, give me a Zen thought of the day**
- **When you write a PRD, make it detailed**

## Project Overview

Static personal portfolio website - vanilla HTML/CSS/JS. No build process or frameworks. Deployed via GitHub Pages at **pujar.dev**.

## Development

**Local**: Open `index.html` in browser OR `python -m http.server 8000`
**Deploy**: `git push` to main → live at pujar.dev in 1-2 minutes

## Architecture

**Files**:
- `index.html` - Single-page app with all sections
- `css/styles.css` - CSS custom properties for theming (lines 1-35)
- `js/main.js` - Navigation, animations, form validation
- `images/` - Profile photo assets

**Design System**:
- CSS variables control all colors/spacing
- Primary color: `--color-primary` (#2563eb)
- Breakpoints: Mobile <768px, Tablet 768-1024px, Desktop >1024px

**Key Features**:
- Smooth scroll with hash navigation (`#about`, etc.)
- `.fade-in` elements animate via Intersection Observer
- Contact form: Client validation, placeholder submission at js/main.js ~line 150. Enable via Web3Forms (web3forms.com)

## Quick Edits

**Work Experience** (index.html lines 107-129): Add timeline items with `.timeline-item` class
**Education** (lines 138-154): Add cards to `.education-grid`
**Skills** (lines 163-206): Edit `.skill-category` sections
**Profile Image**: Add to `images/profile.jpg` (referenced line 74)
**Colors**: Edit CSS variables in styles.css lines 1-35
**Contact Form**: Uncomment Web3Forms code in js/main.js line 150, add access key

## Dependencies

CDN only: Google Fonts (Inter/Poppins), Font Awesome 6.4.0. No npm/package.json.

## Deployment

GitHub Pages from `main` branch root. Custom domain via CNAME. Auto-deploy on push.
