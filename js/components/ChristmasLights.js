import { html, css, LitElement } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/all/lit-all.min.js';

class ChristmasLights extends LitElement {
  static styles = css`
    :host {
      display: block;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 101;
      pointer-events: none;
      padding: 20px 0;
    }

    :host:not([data-active]) {
      display: none;
    }

    .lights {
      --color-1: 255, 249, 82;
      --color-2: 0, 234, 255;
      --color-3: 247, 0, 148;
      display: flex;
      justify-content: center;
      flex-flow: wrap;
      gap: 30px 40px;
      overflow: hidden;
      list-style: none;
      margin: 0;
      padding: 0;
    }

    .lights li {
      flex: none;
      position: relative;
      width: 20px;
      height: 40px;
      border-radius: 50%;
    }

    .lights li:before {
      position: absolute;
      content: '';
      top: -5px;
      left: 50%;
      transform: translateX(-50%);
      width: 12px;
      height: 12px;
      background-color: #222;
      border-radius: 100%;
    }

    .lights li:after {
      position: absolute;
      content: '';
      z-index: -1;
      top: -2px;
      left: 50%;
      width: 54px;
      height: 5px;
      border-bottom: 2px solid #333;
      border-radius: 100%;
    }

    .lights li:last-child:after {
      display: none;
    }

    .lights li {
      background-color: rgba(var(--color-1), 1);
      box-shadow: 0 5px 24px 3px rgba(var(--color-1), 0.8);
      animation: lighting-1 1.25s infinite linear;
    }

    @keyframes lighting-1 {
      50% {
        background-color: rgba(var(--color-1), 0.25);
        box-shadow: 0 5px 24px 3px rgba(var(--color-1), 0.25);
      }
    }

    .lights li:nth-child(odd) {
      background-color: rgba(var(--color-2), 1);
      box-shadow: 0 5px 24px 3px rgba(var(--color-2), 0.8);
      animation: lighting-2 1.5s infinite linear;
    }

    @keyframes lighting-2 {
      50% {
        background-color: rgba(var(--color-2), 0.4);
        box-shadow: 0 5px 24px 3px rgba(var(--color-2), 0.3);
      }
    }

    .lights li:nth-child(4n + 2) {
      background-color: rgba(var(--color-3), 1);
      box-shadow: 0 5px 24px 3px rgba(var(--color-3), 1);
      animation: lighting-3 1.5s infinite linear;
      animation-delay: 1.25s;
    }

    @keyframes lighting-3 {
      50% {
        background-color: rgba(var(--color-3), 0.25);
        box-shadow: 0 5px 24px 3px rgba(var(--color-3), 0.25);
      }
    }

    .toggle-button {
      position: fixed;
      bottom: 2rem;
      right: 2rem;
      z-index: 99;
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background: linear-gradient(135deg, #ff006e 0%, #f72585 100%);
      border: 2px solid rgba(255, 0, 110, 0.5);
      color: #fff;
      font-size: 1.5rem;
      cursor: pointer;
      box-shadow: 0 0 20px rgba(255, 0, 110, 0.6), 0 10px 30px rgba(255, 0, 110, 0.3);
      transition: all 0.3s ease;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0;
      pointer-events: all;
    }

    .toggle-button:hover {
      transform: scale(1.1);
      box-shadow: 0 0 30px rgba(255, 0, 110, 0.8), 0 15px 40px rgba(255, 0, 110, 0.5);
    }

    .toggle-button.active {
      background: linear-gradient(135deg, #00d9ff 0%, #ff006e 100%);
      box-shadow: 0 0 30px rgba(0, 217, 255, 0.8), 0 10px 30px rgba(255, 0, 110, 0.3);
    }

    @media (max-width: 768px) {
      :host {
        padding: 15px 0;
      }

      .lights {
        gap: 20px 30px;
      }

      .lights li {
        width: 15px;
        height: 30px;
      }

      .toggle-button {
        width: 50px;
        height: 50px;
        font-size: 1.2rem;
        bottom: 1.5rem;
        right: 1.5rem;
      }
    }
  `;

  static properties = {
    active: { type: Boolean, reflect: true },
  };

  constructor() {
    super();
    const saved = localStorage.getItem('christmasLightsActive');
    this.active = saved === null ? true : saved === 'true';
  }

  connectedCallback() {
    super.connectedCallback();
    this.updateVisibility();
  }

  updateVisibility() {
    if (this.active) {
      this.setAttribute('data-active', 'true');
    } else {
      this.removeAttribute('data-active');
    }
  }

  toggle() {
    this.active = !this.active;
    localStorage.setItem('christmasLightsActive', this.active);
    this.updateVisibility();
    this.requestUpdate();
  }

  generateBulbs() {
    const bulbs = [];
    for (let i = 0; i < 30; i++) {
      bulbs.push(html`<li></li>`);
    }
    return bulbs;
  }

  render() {
    return html`
      <ul class="lights">
        ${this.generateBulbs()}
      </ul>

      <button 
        class="toggle-button ${this.active ? 'active' : ''}"
        @click="${this.toggle}"
        title="Toggle Christmas Lights"
      >
        🎄
      </button>
    `;
  }
}

customElements.define('christmas-lights', ChristmasLights);
