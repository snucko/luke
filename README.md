# Magic by Luke - Professional Magician Website

A modern, responsive portfolio website for professional magician Luke, built with Web Components and modern JavaScript patterns.

## Overview

This website showcases Luke's magic performances and services, featuring:
- Professional hero section with compelling CTAs
- Testimonials and social proof
- Contact form integrated with Formspree for booking inquiries
- Responsive design optimized for all devices
- Web Components architecture for maintainability

**Live Site:** https://luke.tivnan.org

## Recent Updates

### Design & UX Improvements (Latest)
- **Professional Redesign**: Modern hero section with animations and dual CTAs
- **Visual Enhancements**: Glass-morphism effects, gradient backgrounds, micro-interactions
- **Conversion Optimization**: Added testimonials, feature cards, and strategic CTAs
- **Trust Building**: Social links, professional footer, clear value proposition
- **Mobile Responsive**: Mobile-first design with breakpoints at 768px and 480px
- **SEO Ready**: Meta tags, descriptions, and social sharing support

### Form Integration (Latest)
- **Formspree Integration**: Contact form connected to Formspree endpoint `xyznjjld`
- **AJAX Submission**: Forms submit without page reload
- **User Feedback**: Real-time success/error messages with auto-clear
- **Data Collection**: All submissions stored in Formspree dashboard

### Architecture Refactor
- **Web Components**: Migrated to LitElement for better encapsulation
- **Module Pattern**: Organized code into reusable components
- **Design Patterns**: Implemented Singleton pattern (AudioManager), Component architecture
- **Configuration Management**: Centralized app config in `js/config.js`

## Project Structure

```
luke/
├── index.html              # Home page
├── about.html             # About Luke page
├── gallery.html           # Performance gallery
├── contact.html           # Contact & booking form
├── css/
│   └── style.css          # Global styles
├── js/
│   ├── config.js          # App configuration & constants
│   ├── components/
│   │   ├── LukeHeader.js         # Sticky navigation header
│   │   ├── LukeFooter.js         # Footer with social links
│   │   ├── HeroSection.js        # Home page hero
│   │   ├── FeatureCard.js        # Benefit showcase cards
│   │   ├── TestimonialCard.js    # Client testimonials
│   │   ├── ContactForm.js        # Booking form with Formspree
│   │   ├── MagicButton.js        # Interactive trick reveal
│   │   ├── CardFlipElement.js    # 3D card flip animation
│   │   └── AudioManager.js       # Singleton audio controller
│   └── pages/              # Page-specific initialization (legacy)
└── .github/                # GitHub Actions workflows
```

## Technology Stack

### Frontend
- **HTML5**: Semantic markup
- **CSS3**: Modern layouts (Grid, Flexbox), animations, responsive design
- **JavaScript (ES6+)**: Modular architecture with Web Components
- **LitElement**: Lightweight Web Components library (via CDN)

### Tools & Services
- **Formspree**: Form data collection and email notifications
- **GitHub Pages**: Static site hosting
- **Google Fonts**: Typography (Poppins)

## Components

### Core Components

#### **LukeHeader**
Sticky navigation header with gradient background and hover effects.
```html
<luke-header></luke-header>
```

#### **LukeFooter**
Professional footer with social links, contact info, and quick navigation.
```html
<luke-footer></luke-footer>
```

#### **HeroSection**
Eye-catching welcome section with animations, tagline, and dual CTAs.
```html
<hero-section></hero-section>
```

#### **FeatureCard**
Displays key benefits with icon, title, and description.
```html
<feature-card 
  icon="✨" 
  title="Professional Quality" 
  description="Years of practice perfecting illusions...">
</feature-card>
```

#### **TestimonialCard**
Shows client testimonials with star ratings and event type.
```html
<testimonial-card 
  name="Sarah Johnson" 
  event="Birthday Party" 
  text="Luke's performance was absolutely magical..." 
  rating="5">
</testimonial-card>
```

#### **ContactForm**
Interactive booking form with Formspree integration.
```html
<contact-form></contact-form>
```

**Features:**
- Email validation
- Event type selection
- Date picker
- Message textarea
- Real-time submission feedback
- Auto-clearing success messages

#### **MagicButton**
Interactive button that reveals random magic tricks.
```html
<magic-button></magic-button>
```

#### **CardFlipElement**
3D card flip animation on hover.
```html
<card-flip></card-flip>
```

## Configuration

All app configuration is centralized in `js/config.js`:

```javascript
const CONFIG = {
  audio: { enabled: false, src: 'audio/magic-theme.mp3', ... },
  tricks: [...],           // Magic trick messages
  navigation: [...],       // Navigation menu links
  testimonials: [...],     // Client testimonials
  socialLinks: [...],      // Social media links
};
```

Update configuration once, and all components use the new values.

## Form Integration (Formspree)

### How It Works
1. User fills out contact form on `/contact.html`
2. Form submits via AJAX to Formspree endpoint
3. Data stored in Formspree dashboard
4. Email notification sent to configured address
5. User sees success message

### Form Endpoint
- **Formspree Form ID**: `xyznjjld`
- **Endpoint**: `https://formspree.io/f/xyznjjld`
- **Dashboard**: https://formspree.io/forms

### Form Fields
- Name (required)
- Email (required)
- Phone (optional)
- Event Type (required)
- Date (required)
- Message (optional)

### Customizing Responses
Edit Formspree dashboard to:
- Set target email address
- Create autoresponse emails
- Add integrations (Slack, Discord, Google Sheets, etc.)
- Enable spam filtering

## Styling & Customization

### Color Scheme
```css
--color-primary: #f9d423      /* Gold accent */
--color-dark: #1a1a2e         /* Dark background */
--color-text: #fff            /* Primary text */
--color-text-muted: rgba(...) /* Secondary text */
--color-border: rgba(...)     /* Border color */
```

### Responsive Breakpoints
- **Desktop**: Full layout
- **Tablet**: 768px and below - adjusted padding/font sizes
- **Mobile**: 480px and below - single column layouts, optimized buttons

### Custom Fonts
Using Google Fonts (Poppins) - served from CDN with preconnect for performance.

## Development

### Local Setup
```bash
# Clone repo
git clone https://github.com/snucko/luke.git
cd luke

# Start local server (Python)
python3 -m http.server 8000

# Or with Node.js
npx http-server
```

Open http://localhost:8000 in browser.

### Adding New Components

1. Create component file in `js/components/ComponentName.js`
2. Import LitElement and styles
3. Define properties and render() method
4. Define custom element: `customElements.define('component-name', ComponentName)`
5. Import in relevant HTML pages
6. Use as `<component-name></component-name>`

Example:
```javascript
import { html, css, LitElement } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/all/lit-all.min.js';

class MyComponent extends LitElement {
  static styles = css`...`;
  static properties = { ... };
  
  render() {
    return html`...`;
  }
}

customElements.define('my-component', MyComponent);
```

## Performance

- **Lazy Loading**: Components load on demand
- **CSS Optimization**: Minified styles with scoping
- **Smooth Scrolling**: CSS-based animations, no heavy JS
- **Accessibility**: Respects prefers-reduced-motion preference
- **SEO**: Meta tags, semantic HTML, structured data ready

## Accessibility

- Keyboard navigation on all interactive elements
- Color contrast meets WCAG standards
- Semantic HTML structure
- Respects `prefers-reduced-motion` for animations
- Form labels properly associated with inputs
- ARIA attributes where needed

## Browser Support

- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- Mobile browsers: Latest versions

Web Components require modern browser support (ES6+).

## Deployment

Hosted on GitHub Pages via CNAME configuration.

**Repository**: https://github.com/snucko/luke
**Domain**: luke.tivnan.org (via CNAME file)

### Deploy Changes
```bash
git add .
git commit -m "Your commit message"
git push origin main
```

Changes live within seconds via GitHub Pages.

## Future Enhancements

- [ ] Add video gallery with YouTube embeds
- [ ] Integrate Google Calendar for availability
- [ ] Add online booking system
- [ ] Email template customization in Formspree
- [ ] Analytics tracking (Google Analytics)
- [ ] Dark mode toggle
- [ ] Multi-language support
- [ ] Blog section for magic tips
- [ ] Client photo gallery with lightbox

## Maintenance

### Regular Tasks
- Monitor Formspree submissions (check dashboard weekly)
- Update testimonials as new clients provide feedback
- Keep social media links current
- Review analytics for user behavior
- Test forms on multiple browsers/devices

### Content Updates
To update content, simply edit the relevant HTML page or update `js/config.js` for shared configuration.

## Troubleshooting

### Form not submitting
- Check Formspree endpoint in `ContactForm.js`
- Verify form endpoint in Formspree dashboard
- Check browser console for errors (F12)
- Ensure email field is named `email`

### Styles not updating
- Clear browser cache (Ctrl+Shift+Delete)
- Hard refresh page (Ctrl+Shift+R)
- Check for CSS typos in `css/style.css`

### Components not rendering
- Check browser console for JavaScript errors
- Verify component is imported in HTML
- Ensure custom element tag name is correct
- Check LitElement CDN is loading

## License

© 2025 Magic by Luke. All rights reserved.

## Contact

For updates, issues, or questions:
- **Email**: luke.tivnan@gmail.com
- **GitHub**: https://github.com/snucko/luke
- **Website**: https://luke.tivnan.org

---

**Last Updated**: December 14, 2025
**Version**: 2.0 (Web Components + Formspree Integration)
