import { html, css, LitElement } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/all/lit-all.min.js';

class FeatureCard extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    .feature {
      background: rgba(255, 0, 110, 0.08);
      border: 2px solid rgba(255, 0, 110, 0.3);
      border-radius: 0px;
      padding: 2rem;
      text-align: center;
      backdrop-filter: blur(10px);
      transition: all 0.3s ease;
      box-shadow: 0 0 20px rgba(255, 0, 110, 0.15), inset 0 0 15px rgba(0, 217, 255, 0.02);
    }

    .feature:hover {
      background: rgba(255, 0, 110, 0.12);
      border-color: rgba(255, 0, 110, 0.6);
      transform: translateY(-8px);
      box-shadow: 0 0 30px rgba(255, 0, 110, 0.4), 0 0 20px rgba(0, 217, 255, 0.2), inset 0 0 20px rgba(0, 217, 255, 0.05);
    }

    .icon {
      font-size: 3rem;
      margin-bottom: 1rem;
      filter: drop-shadow(0 0 10px rgba(255, 0, 110, 0.3));
    }

    .title {
      font-size: 1.3rem;
      color: #ff006e;
      margin-bottom: 0.5rem;
      font-weight: 600;
      text-shadow: 0 0 10px rgba(255, 0, 110, 0.4);
    }

    .description {
      color: rgba(255, 255, 255, 0.8);
      line-height: 1.6;
      font-size: 0.95rem;
    }
  `;

  static properties = {
    icon: { type: String },
    title: { type: String },
    description: { type: String },
  };

  render() {
    return html`
      <div class="feature">
        <div class="icon">${this.icon}</div>
        <h3 class="title">${this.title}</h3>
        <p class="description">${this.description}</p>
      </div>
    `;
  }
}

customElements.define('feature-card', FeatureCard);
