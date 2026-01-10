import { html, css, LitElement } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/all/lit-all.min.js';

class ChristmasLights extends LitElement {
  static styles = css`
    :host {
      display: block;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 50;
      pointer-events: none;
      height: 150px;
    }

    .lights-container {
      position: relative;
      width: 100%;
      height: 100%;
    }

    .string {
      position: absolute;
      top: 75px;
      left: 0;
      right: 0;
      height: 3px;
      background: linear-gradient(90deg, transparent 0%, rgba(139, 69, 19, 0.5) 50%, transparent 100%);
    }

    .lights {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      display: flex;
      justify-content: space-around;
      padding: 0 5%;
      width: 100%;
      height: 100%;
      align-items: flex-start;
    }

    .bulb {
      position: relative;
      width: 24px;
      height: 36px;
      margin: 0 12px;
      pointer-events: none;
    }

    .bulb-glow {
      position: absolute;
      bottom: 6px;
      left: 50%;
      transform: translateX(-50%);
      width: 18px;
      height: 24px;
      border-radius: 50% 50% 45% 45%;
      opacity: 0.6;
      transition: opacity 0.15s ease;
    }

    .bulb-base {
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 6px;
      height: 4px;
      background: #666;
      border-radius: 2px;
    }

    /* Color variations */
    .bulb.red .bulb-glow {
      background: #ff1744;
      box-shadow: 0 0 10px rgba(255, 23, 68, 0.3);
    }

    .bulb.green .bulb-glow {
      background: #00e676;
      box-shadow: 0 0 10px rgba(0, 230, 118, 0.3);
    }

    .bulb.blue .bulb-glow {
      background: #2979f3;
      box-shadow: 0 0 10px rgba(41, 121, 243, 0.3);
    }

    .bulb.yellow .bulb-glow {
      background: #ffeb3b;
      box-shadow: 0 0 10px rgba(255, 235, 59, 0.3);
    }

    .bulb.purple .bulb-glow {
      background: #d946ef;
      box-shadow: 0 0 10px rgba(217, 70, 239, 0.3);
    }

    .bulb.white .bulb-glow {
      background: #ffffff;
      box-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
    }

    /* Flicker animations */
    @keyframes flicker1 {
      0%, 100% { opacity: 0.6; }
      50% { opacity: 1; }
    }

    @keyframes flicker2 {
      0%, 100% { opacity: 0.5; }
      40% { opacity: 0.9; }
      60% { opacity: 1; }
    }

    @keyframes flicker3 {
      0%, 100% { opacity: 0.6; }
      30% { opacity: 1; }
      70% { opacity: 0.5; }
    }

    .bulb:nth-child(1) .bulb-glow { animation: flicker1 1.2s ease-in-out infinite; }
    .bulb:nth-child(2) .bulb-glow { animation: flicker2 1.4s ease-in-out infinite 0.2s; }
    .bulb:nth-child(3) .bulb-glow { animation: flicker3 1.1s ease-in-out infinite 0.4s; }
    .bulb:nth-child(4) .bulb-glow { animation: flicker1 1.3s ease-in-out infinite 0.1s; }
    .bulb:nth-child(5) .bulb-glow { animation: flicker2 1.5s ease-in-out infinite 0.3s; }
    .bulb:nth-child(6) .bulb-glow { animation: flicker3 1.2s ease-in-out infinite 0.5s; }
    .bulb:nth-child(7) .bulb-glow { animation: flicker1 1.4s ease-in-out infinite 0.2s; }
    .bulb:nth-child(8) .bulb-glow { animation: flicker2 1.1s ease-in-out infinite 0.4s; }
    .bulb:nth-child(9) .bulb-glow { animation: flicker3 1.3s ease-in-out infinite 0.1s; }
    .bulb:nth-child(10) .bulb-glow { animation: flicker1 1.5s ease-in-out infinite 0.3s; }
    .bulb:nth-child(11) .bulb-glow { animation: flicker2 1.2s ease-in-out infinite 0.5s; }
    .bulb:nth-child(12) .bulb-glow { animation: flicker3 1.4s ease-in-out infinite 0.2s; }
    .bulb:nth-child(13) .bulb-glow { animation: flicker1 1.1s ease-in-out infinite 0.4s; }
    .bulb:nth-child(14) .bulb-glow { animation: flicker2 1.3s ease-in-out infinite 0.1s; }
    .bulb:nth-child(15) .bulb-glow { animation: flicker3 1.5s ease-in-out infinite 0.3s; }

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

    :host:not([data-active]) {
      display: none;
    }

    @media (max-width: 768px) {
      :host {
        height: 100px;
      }

      .lights {
        padding: 0 3%;
      }

      .bulb {
        width: 12px;
        height: 18px;
        margin: 0 4px;
      }

      .bulb-glow {
        width: 10px;
        height: 14px;
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
    // Default to ON, but respect saved preference if it exists
    const saved = localStorage.getItem('christmasLightsActive');
    this.active = saved === null ? true : saved === 'true';
    this.colors = ['red', 'green', 'blue', 'yellow', 'purple', 'white'];
  }

  connectedCallback() {
    super.connectedCallback();
    // Initialize display state
    this.updateVisibility();
  }

  updateVisibility() {
    if (this.active) {
      this.setAttribute('data-active', 'true');
    } else {
      this.removeAttribute('data-active');
    }
  }

  getRandomColor() {
    return this.colors[Math.floor(Math.random() * this.colors.length)];
  }

  generateBulbs() {
    const bulbs = [];
    for (let i = 0; i < 15; i++) {
      bulbs.push(html`
        <div class="bulb ${this.getRandomColor()}">
          <div class="bulb-glow"></div>
          <div class="bulb-base"></div>
        </div>
      `);
    }
    return bulbs;
  }

  toggle() {
    this.active = !this.active;
    localStorage.setItem('christmasLightsActive', this.active);
    this.updateVisibility();
    this.requestUpdate();
  }

  render() {
    return html`
      <div class="lights-container">
        <div class="string"></div>
        <div class="lights">
          ${this.generateBulbs()}
        </div>
      </div>

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
