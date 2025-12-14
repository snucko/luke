import { html, css, LitElement } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/all/lit-all.min.js';

class FeatureCard extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    .feature {
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(249, 212, 35, 0.2);
      border-radius: 10px;
      padding: 2rem;
      text-align: center;
      backdrop-filter: blur(10px);
      transition: all 0.3s ease;
    }

    .feature:hover {
      background: rgba(255, 255, 255, 0.08);
      border-color: rgba(249, 212, 35, 0.4);
      transform: translateY(-8px);
      box-shadow: 0 12px 32px rgba(249, 212, 35, 0.15);
    }

    .icon {
      font-size: 3rem;
      margin-bottom: 1rem;
    }

    .title {
      font-size: 1.3rem;
      color: #f9d423;
      margin-bottom: 0.5rem;
      font-weight: 600;
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
