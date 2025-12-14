import { html, css, LitElement } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/all/lit-all.min.js';
import CONFIG from '../config.js';

class MagicButton extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    button {
      background: #f9d423;
      color: #000;
      border: none;
      padding: 10px 20px;
      font-size: 1rem;
      cursor: pointer;
      border-radius: 5px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    button:hover {
      transform: scale(1.1);
      box-shadow: 0 6px 8px rgba(0, 0, 0, 0.5);
    }

    #magic-trick {
      margin-top: 1em;
      min-height: 30px;
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    #magic-trick.visible {
      opacity: 1;
    }
  `;

  static properties = {
    trick: { type: String },
    showTrick: { type: Boolean },
  };

  constructor() {
    super();
    this.trick = '';
    this.showTrick = false;
  }

  getRandomTrick() {
    return CONFIG.tricks[Math.floor(Math.random() * CONFIG.tricks.length)];
  }

  revealTrick() {
    this.trick = this.getRandomTrick();
    this.showTrick = false;
    
    // Trigger reflow to restart animation
    setTimeout(() => {
      this.showTrick = true;
    }, 10);
  }

  render() {
    return html`
      <button @click="${this.revealTrick}">Reveal a Trick</button>
      <p id="magic-trick" class="${this.showTrick ? 'visible' : ''}">${this.trick}</p>
    `;
  }
}

customElements.define('magic-button', MagicButton);
