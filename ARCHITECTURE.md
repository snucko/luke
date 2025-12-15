# Architecture & Design Decisions

## Overview

This document explains the architectural decisions and design patterns used in Magic by Luke website.

## Design Patterns Applied

### 1. Module Pattern
**File**: All files in `js/`

Each JavaScript file encapsulates functionality into self-contained modules using ES6 imports/exports.

**Benefits:**
- Clear separation of concerns
- Easier testing and maintenance
- Prevents global namespace pollution
- Reusable across pages

```javascript
// Export a module
export default CONFIG;

// Import a module
import CONFIG from '../config.js';
```

### 2. Singleton Pattern
**File**: `js/components/AudioManager.js`

AudioManager ensures only one audio instance exists across the entire application.

```javascript
class AudioManager {
  static instance = null;

  constructor() {
    if (AudioManager.instance) {
      return AudioManager.instance; // Return existing instance
    }
    AudioManager.instance = this;
  }

  static getInstance() {
    return AudioManager.instance || new AudioManager();
  }
}
```

**Benefits:**
- Single source of truth for audio state
- Prevents multiple audio streams
- Consistent behavior across pages

### 3. Component Pattern (Web Components)
**Files**: All in `js/components/`

Using LitElement to create encapsulated Web Components with Shadow DOM.

```javascript
class LukeHeader extends LitElement {
  static styles = css`...`;      // Scoped styles
  static properties = {...};      // Reactive properties
  
  render() {
    return html`...`;              // Templated HTML
  }
}

customElements.define('luke-header', LukeHeader);
```

**Benefits:**
- Encapsulation: Styles don't leak out
- Reusability: Use as HTML tags
- Reactivity: Automatic re-renders on property changes
- Shadow DOM: Isolated DOM tree

### 4. Configuration Pattern
**File**: `js/config.js`

All app constants and configuration centralized in one place.

```javascript
const CONFIG = {
  audio: {...},
  tricks: [...],
  navigation: [...],
  testimonials: [...],
  socialLinks: [...]
};
```

**Benefits:**
- Single source of configuration truth
- Easy to update without touching components
- Reusable across multiple components
- Clear app constants

### 5. Template Method Pattern
**Files**: All page HTML files

Each page follows same structure:
1. Header component
2. Page-specific content
3. Footer component
4. Script imports

```html
<luke-header></luke-header>
<main>...</main>
<luke-footer></luke-footer>
<script type="module">
  import './js/components/...';
</script>
```

**Benefits:**
- Consistent page structure
- Easy to add new pages
- Reduces code duplication

## Architecture Layers

### 1. Presentation Layer (Components)
Web Components that render UI and handle user interactions.

```
js/components/
├── LukeHeader.js          # Navigation
├── LukeFooter.js          # Footer & social
├── HeroSection.js         # Landing section
├── FeatureCard.js         # Benefits showcase
├── TestimonialCard.js     # Social proof
├── ContactForm.js         # Booking form ← Formspree integration
├── MagicButton.js         # Interactive element
├── CardFlipElement.js     # Animation
└── AudioManager.js        # Media control
```

### 2. Configuration Layer
App-wide configuration and constants.

```
js/
└── config.js              # Navigation, testimonials, social links, tricks
```

### 3. Data Layer
Form submissions → Formspree → Email/Dashboard

```
ContactForm.js
    ↓
fetch() → Formspree API
    ↓
Formspree Dashboard (inbox)
    ↓
Email notification + integrations
```

## Data Flow

### Form Submission Flow
```
User fills form
    ↓
Validates inputs (HTML5)
    ↓
handleSubmit() triggered
    ↓
FormData object created
    ↓
fetch() POST to Formspree
    ↓
Formspree API processes
    ↓
Success/Error response
    ↓
Display user message
    ↓
Clear form & reset UI
```

### Component Rendering Flow
```
Page loads
    ↓
Import component modules
    ↓
Web Components register (customElements.define)
    ↓
Import config.js
    ↓
Components render using config data
    ↓
User interactions trigger event handlers
    ↓
Component re-renders on property changes
```

## State Management

### Where State Lives

**Global State** (shared across pages):
- `CONFIG` - Read-only app configuration
- `AudioManager` - Single audio instance (Singleton)

**Component State** (scoped to component):
- `LitElement.properties` - Reactive properties
- Example: `ContactForm.submitted`, `ContactForm.isLoading`

**No State Management Library Needed:**
- Small app with simple state requirements
- Web Components handle local component state
- Configuration is static

## Styling Strategy

### CSS Organization
```
css/
└── style.css              # Global styles + responsive design
```

### CSS Approach
- **Global Styles**: Body, typography, links, buttons
- **Component Styles**: Scoped in LitElement `static styles = css``
- **Responsive**: Mobile-first with media queries
- **Variables**: CSS custom properties (root)

### Responsive Breakpoints
```css
/* Desktop (default) */
@media (max-width: 768px) { /* Tablet */ }
@media (max-width: 480px) { /* Mobile */ }
```

## Performance Considerations

### Optimization Techniques

1. **Lazy Components**: Components only load when page uses them
2. **CSS Scoping**: Shadow DOM prevents style recalculation
3. **Event Delegation**: Minimal event listeners
4. **Smooth Scrolling**: CSS animations, not JavaScript
5. **Font Loading**: Preconnect hints to Google Fonts

### Accessibility
- `prefers-reduced-motion` support (animations disabled)
- Semantic HTML structure
- ARIA labels where needed
- Keyboard navigation throughout

## Scalability

### Adding New Pages
1. Create `new-page.html`
2. Add navigation link to `config.js`
3. Import standard components (header, footer)
4. Create page-specific component if needed

### Adding New Components
1. Create `js/components/NewComponent.js`
2. Extend LitElement
3. Define styles, properties, render()
4. Define custom element
5. Import in relevant pages

### Updating Content
1. Update `config.js` for global changes
2. Edit HTML pages for page-specific content
3. No recompilation needed (plain HTML/JS)

## Security Considerations

### Form Security
- **Server-side Validation**: Formspree handles validation
- **Spam Protection**: Formspree has built-in spam filtering
- **HTTPS**: Domain uses HTTPS (GitHub Pages)
- **Input Sanitization**: HTML5 input types restrict entries

### No Backend Vulnerabilities
- Static site (no database)
- No authentication required
- No server-side code execution
- External form handling (Formspree)

## Browser Compatibility

### Required Support
- ES6+ JavaScript (Classes, arrow functions, template literals)
- Web Components (Custom Elements, Shadow DOM)
- CSS Grid and Flexbox
- Fetch API

### Tested On
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Build & Deployment

### Build Process
None needed! This is a static site.
- Pure HTML, CSS, JavaScript
- CDN-loaded LitElement
- No bundler or build tool

### Deployment Pipeline
```
git push → GitHub → GitHub Pages → Live
(automatic, instant)
```

## Future Improvements

### Potential Enhancements

1. **State Management Library** (if app grows)
   - Redux or MobX for complex state
   - Currently not needed

2. **Build Tooling** (if optimization needed)
   - Webpack for bundling
   - Minification and tree-shaking
   - CSS preprocessing

3. **Component Library** (if more components needed)
   - Shared component repository
   - Storybook for documentation

4. **Testing Framework**
   - Jest for unit tests
   - Playwright for E2E tests

5. **Analytics Integration**
   - Google Analytics
   - Form submission tracking
   - User behavior monitoring

## References

### Pattern Documentation
- [Design Patterns - patterns.dev](https://www.patterns.dev/)
- [Web Components - open-wc.org](https://open-wc.org/)
- [LitElement Docs](https://lit.dev/)

### Services Used
- [Formspree - Form Backend](https://formspree.io/)
- [GitHub Pages - Static Hosting](https://pages.github.com/)
- [Google Fonts - Typography](https://fonts.google.com/)

---

**Last Updated**: December 14, 2025
**Version**: 2.0
