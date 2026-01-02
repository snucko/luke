import { html, css, LitElement } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/all/lit-all.min.js';

class TestimonialCard extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    .testimonial {
      background: rgba(255, 0, 110, 0.08);
      border: 2px solid rgba(255, 0, 110, 0.3);
      border-radius: 0px;
      padding: 2rem;
      backdrop-filter: blur(10px);
      transition: all 0.3s ease;
      box-shadow: 0 0 20px rgba(255, 0, 110, 0.15), inset 0 0 15px rgba(0, 217, 255, 0.02);
    }

    .testimonial:hover {
      background: rgba(255, 0, 110, 0.12);
      border-color: rgba(255, 0, 110, 0.6);
      transform: translateY(-5px);
      box-shadow: 0 0 30px rgba(255, 0, 110, 0.4), 0 0 20px rgba(0, 217, 255, 0.2), inset 0 0 20px rgba(0, 217, 255, 0.05);
    }

    .stars {
      color: #ff006e;
      font-size: 1.2rem;
      margin-bottom: 1rem;
      letter-spacing: 2px;
      text-shadow: 0 0 10px rgba(255, 0, 110, 0.4);
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
      color: #ff006e;
      font-size: 0.95rem;
      text-shadow: 0 0 10px rgba(255, 0, 110, 0.4);
    }

    .event {
      color: rgba(0, 217, 255, 0.7);
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
