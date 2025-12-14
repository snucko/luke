import { html, css, LitElement } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/all/lit-all.min.js';

class TestimonialCard extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    .testimonial {
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(249, 212, 35, 0.2);
      border-radius: 10px;
      padding: 2rem;
      backdrop-filter: blur(10px);
      transition: all 0.3s ease;
    }

    .testimonial:hover {
      background: rgba(255, 255, 255, 0.08);
      border-color: rgba(249, 212, 35, 0.4);
      transform: translateY(-5px);
      box-shadow: 0 8px 24px rgba(249, 212, 35, 0.1);
    }

    .stars {
      color: #f9d423;
      font-size: 1.2rem;
      margin-bottom: 1rem;
      letter-spacing: 2px;
    }

    .text {
      font-size: 1rem;
      line-height: 1.6;
      margin-bottom: 1rem;
      font-style: italic;
      color: rgba(255, 255, 255, 0.9);
    }

    .author {
      font-weight: 600;
      color: #f9d423;
      font-size: 0.95rem;
    }

    .event {
      color: rgba(255, 255, 255, 0.7);
      font-size: 0.85rem;
    }
  `;

  static properties = {
    name: { type: String },
    event: { type: String },
    text: { type: String },
    rating: { type: Number },
  };

  render() {
    const stars = '⭐'.repeat(this.rating);
    return html`
      <div class="testimonial">
        <div class="stars">${stars}</div>
        <p class="text">"${this.text}"</p>
        <div class="author">${this.name}</div>
        <div class="event">${this.event}</div>
      </div>
    `;
  }
}

customElements.define('testimonial-card', TestimonialCard);
