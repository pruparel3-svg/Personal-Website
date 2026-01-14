# Personal Website - Puja Ruparel

A modern, sophisticated personal website showcasing professional experience, education, skills, and services. Built with clean minimalist design principles and focused on accessibility and performance.

## Features

- **Responsive Design**: Mobile-first approach that works beautifully on all devices
- **Minimalist Aesthetic**: Clean lines, generous whitespace, and sophisticated color palette
- **Smooth Animations**: Subtle scroll-triggered animations and smooth transitions
- **Interactive Contact Form**: Ready to integrate with Web3Forms or Formspree
- **Professional Sections**:
  - Hero section with compelling introduction
  - About section with professional summary
  - Experience timeline
  - Education showcase
  - Skills & expertise categorization
  - Volunteer leadership history
  - Professional services offering
  - Contact form with validation

## Technology Stack

- **HTML5**: Semantic markup for accessibility and SEO
- **CSS3**: Modern features including CSS Grid, Flexbox, and CSS custom properties
- **Vanilla JavaScript**: No frameworks - lightweight and performant
- **Google Fonts**: Inter and Poppins for modern typography
- **Font Awesome**: Professional icon library

## Project Structure

```
Personal-Website/
├── Index.html          # Main HTML file
├── css/
│   └── styles.css      # All styles (minimalist design)
├── js/
│   └── main.js         # Interactive functionality
├── images/             # Image assets (profile photo, etc.)
└── README.md           # Project documentation
```

## Getting Started

### Viewing the Website

1. Open `Index.html` in your web browser
2. Or use a local server for best results:
   ```bash
   # Using Python 3
   python -m http.server 8000

   # Using Node.js http-server
   npx http-server
   ```
3. Navigate to `http://localhost:8000` in your browser

### Customization

#### Adding Your Content

1. **Work Experience**: Edit the timeline items in the Experience section of `Index.html`
2. **Education Details**: Update the education cards with your degrees and institutions
3. **Professional Photo**: Add your headshot to the `images/` directory and update the image placeholder in the About section
4. **Contact Information**: Add your email address in the Contact section

#### Setting Up the Contact Form

The contact form is ready to integrate with a form service:

**Option 1: Web3Forms (Recommended)**
1. Sign up at [web3forms.com](https://web3forms.com)
2. Get your access key
3. In `js/main.js`, find the form submission section (line ~150)
4. Uncomment the Web3Forms code block
5. Replace `YOUR_ACCESS_KEY_HERE` with your actual access key

**Option 2: Formspree**
1. Sign up at [formspree.io](https://formspree.io)
2. Get your form endpoint
3. Update the form action in `Index.html` or configure the fetch request in `js/main.js`

#### Color Customization

All colors are defined as CSS variables in `css/styles.css` (lines 1-20). To change the color scheme:

```css
:root {
    --color-primary: #2563eb;        /* Main accent color */
    --color-primary-dark: #1e40af;   /* Darker shade */
    --color-primary-light: #3b82f6;  /* Lighter shade */
    /* Modify these to match your brand */
}
```

## Features Implementation

### Smooth Scroll Navigation
- Click any navigation link for smooth scrolling to sections
- Active section highlighting in navigation
- Mobile-friendly hamburger menu

### Scroll Animations
- Fade-in effects triggered by Intersection Observer
- Respects `prefers-reduced-motion` for accessibility

### Form Validation
- Client-side validation for name, email, and message
- Real-time email format validation
- Clear error messages
- Loading state during submission

### Performance
- Lazy loading for images
- Debounced scroll handlers
- Optimized CSS with minimal specificity
- No external dependencies beyond fonts and icons

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Accessibility

- Semantic HTML5 elements
- ARIA labels for screen readers
- Keyboard navigation support
- High contrast ratios for text
- Focus states for interactive elements
- Respects reduced motion preferences

## Next Steps

### Required Actions

1. **Add Your Content**:
   - Provide 3-5 work experience highlights
   - Add detailed education information
   - Include professional summary/bio
   - Add professional headshot

2. **Configure Contact Form**:
   - Set up Web3Forms or Formspree account
   - Add access key/endpoint to JavaScript

3. **Test Everything**:
   - Test on multiple devices and browsers
   - Verify all links work correctly
   - Test contact form submission
   - Check responsive behavior

### Optional Enhancements

- Add custom domain
- Implement dark mode toggle
- Add Google Analytics
- Create downloadable PDF resume
- Add testimonials section
- Include project portfolio
- Add blog functionality

## Deployment

### GitHub Pages
1. Push code to GitHub repository
2. Go to Settings > Pages
3. Select branch (main) and root directory
4. Your site will be live at `https://username.github.io/repository-name`

### Netlify
1. Connect your GitHub repository
2. Netlify will auto-detect settings
3. Deploy with one click

### Other Options
- Vercel
- Cloudflare Pages
- Traditional web hosting (upload files via FTP)

## License

All rights reserved - Puja Ruparel

## Contact

- LinkedIn: [linkedin.com/in/pujaruparel](https://www.linkedin.com/in/pujaruparel/)
- Website: [Your deployed URL here]

---

Built with care by Puja Ruparel
