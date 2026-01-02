import { html, css, LitElement } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/all/lit-all.min.js';

class HeroSection extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    .hero {
      position: relative;
      min-height: 600px;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      overflow: hidden;
    }

    .hero::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: radial-gradient(circle at 30% 50%, rgba(255, 0, 110, 0.15) 0%, transparent 50%),
                  radial-gradient(circle at 70% 50%, rgba(0, 217, 255, 0.1) 0%, transparent 50%);
      pointer-events: none;
      animation: gradient-shift 8s ease-in-out infinite;
    }

    .hero-content {
      position: relative;
      z-index: 1;
      max-width: 800px;
      padding: 2rem;
    }

    h1 {
      font-size: 4rem;
      margin: 0 0 1rem 0;
      color: #ff006e;
      text-shadow: 0 0 20px rgba(255, 0, 110, 0.8), 0 0 40px rgba(255, 0, 110, 0.4);
      animation: fade-in-down 0.8s ease-out;
      letter-spacing: 2px;
      font-weight: 800;
    }

    .tagline {
      font-size: 1.5rem;
      color: rgba(255, 255, 255, 0.9);
      margin-bottom: 2rem;
      animation: fade-in-up 0.8s ease-out 0.2s both;
      line-height: 1.8;
    }

    .cta-buttons {
      display: flex;
      gap: 1rem;
      justify-content: center;
      flex-wrap: wrap;
      animation: fade-in-up 0.8s ease-out 0.4s both;
    }

    .btn {
      padding: 1rem 2.5rem;
      font-size: 1.1rem;
      border: none;
      border-radius: 50px;
      cursor: pointer;
      transition: all 0.3s ease;
      font-weight: 600;
      text-decoration: none;
      display: inline-block;
    }

    .btn-primary {
      background: linear-gradient(135deg, #ff006e 0%, #f72585 100%);
      color: #fff;
      box-shadow: 0 0 20px rgba(255, 0, 110, 0.6), 0 10px 30px rgba(255, 0, 110, 0.3);
      border: 1px solid rgba(255, 0, 110, 0.5);
    }

    .btn-primary:hover {
      transform: translateY(-2px);
      box-shadow: 0 0 30px rgba(255, 0, 110, 0.8), 0 15px 40px rgba(255, 0, 110, 0.5);
      border-color: rgba(255, 0, 110, 0.8);
    }

    .btn-secondary {
      background: transparent;
      color: #fff;
      border: 2px solid #ff006e;
    }

    .btn-secondary:hover {
      background: rgba(255, 0, 110, 0.15);
      transform: translateY(-2px);
      box-shadow: 0 0 20px rgba(255, 0, 110, 0.4);
    }

    .scroll-hint {
      position: absolute;
      bottom: 30px;
      left: 50%;
      transform: translateX(-50%);
      color: rgba(255, 0, 110, 0.6);
      animation: bounce 2s infinite;
    }

    @keyframes gradient-shift {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.8; }
    }

    @keyframes fade-in-down {
      from {
        opacity: 0;
        transform: translateY(-30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes fade-in-up {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes bounce {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(10px); }
    }

    @media (max-width: 768px) {
      .hero {
        min-height: 500px;
      }

      h1 {
        font-size: 2.5rem;
      }

      .tagline {
        font-size: 1.1rem;
      }

      .btn {
        padding: 0.8rem 1.5rem;
        font-size: 0.95rem;
      }
    }
  `;

  render() {
    return html`
      <section class="hero">
        <div class="hero-content">
          <h1>Experience the Magic</h1>
          <p class="tagline">Professional illusions and mesmerizing performances for unforgettable events</p>
          <div class="cta-buttons">
            <a href="contact.html" class="btn btn-primary">Book a Show</a>
            <a href="gallery.html" class="btn btn-secondary">View Gallery</a>
          </div>
        </div>
        <div class="scroll-hint">↓ Scroll to explore</div>
      </section>
    `;
  }
}

customElements.define('hero-section', HeroSection);
