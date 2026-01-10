import { html, css, LitElement } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/all/lit-all.min.js';

class StrangerThingsEffect extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    .effect-button {
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
    }

    .effect-button:hover {
      transform: scale(1.1);
      box-shadow: 0 0 30px rgba(255, 0, 110, 0.8), 0 15px 40px rgba(255, 0, 110, 0.5);
    }

    .effect-button.active {
      background: linear-gradient(135deg, #00d9ff 0%, #ff006e 100%);
      box-shadow: 0 0 30px rgba(0, 217, 255, 0.8), 0 10px 30px rgba(255, 0, 110, 0.3);
    }

    @keyframes strangeLights {
      0%, 10%, 20%, 30%, 40%, 50%, 60%, 70%, 80%, 90%, 100% {
        text-shadow: 
          0 0 10px rgba(255, 0, 110, 0.8),
          0 0 20px rgba(255, 0, 110, 0.6),
          0 0 30px rgba(255, 0, 110, 0.4);
        color: #ff006e;
      }
      5%, 15%, 25%, 35%, 45%, 55%, 65%, 75%, 85%, 95% {
        text-shadow: 
          0 0 20px rgba(0, 217, 255, 1),
          0 0 40px rgba(0, 217, 255, 0.8),
          0 0 60px rgba(255, 0, 110, 0.6);
        color: #00d9ff;
      }
    }

    @keyframes strangeBgFlicker {
      0%, 10%, 20%, 30%, 40%, 50%, 60%, 70%, 80%, 90%, 100% {
        background: linear-gradient(135deg, #0a0a0a 0%, #1a0033 50%, #2d0052 100%);
      }
      5%, 15%, 25%, 35%, 45%, 55%, 65%, 75%, 85%, 95% {
        background: linear-gradient(135deg, #1a0033 0%, #2d0052 50%, #4d0080 100%);
      }
    }

    @keyframes strangeLightEffect {
      0%, 10%, 20%, 30%, 40%, 50%, 60%, 70%, 80%, 90%, 100% {
        opacity: 0.3;
        box-shadow: 0 0 20px rgba(255, 0, 110, 0.2), inset 0 0 30px rgba(0, 217, 255, 0.05);
      }
      5%, 15%, 25%, 35%, 45%, 55%, 65%, 75%, 85%, 95% {
        opacity: 0.8;
        box-shadow: 0 0 50px rgba(0, 217, 255, 0.4), inset 0 0 50px rgba(255, 0, 110, 0.1);
      }
    }

    :host(.active) {
      --st-effect: strangeLights;
    }

    :host(.active) h1 {
      animation: strangeLights 0.4s infinite;
    }

    :host(.active) h2 {
      animation: strangeLights 0.4s infinite;
    }

    :host(.active) body {
      animation: strangeBgFlicker 0.4s infinite;
    }

    :host(.active) header {
      animation: strangeLightEffect 0.4s infinite;
    }

    @media (max-width: 768px) {
      .effect-button {
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
    this.active = localStorage.getItem('strangerThingsActive') === 'true';
    this.loadEffect();
  }

  loadEffect() {
    if (this.active) {
      this.enableEffect();
    }
  }

  enableEffect() {
    document.documentElement.classList.add('stranger-things-active');
    this.addGlobalStyles();
  }

  disableEffect() {
    document.documentElement.classList.remove('stranger-things-active');
    this.removeGlobalStyles();
  }

  addGlobalStyles() {
    if (!document.getElementById('stranger-things-styles')) {
      const style = document.createElement('style');
      style.id = 'stranger-things-styles';
      style.textContent = `
        @keyframes strangeLights {
          0%, 10%, 20%, 30%, 40%, 50%, 60%, 70%, 80%, 90%, 100% {
            text-shadow: 
              0 0 10px rgba(255, 0, 110, 0.8),
              0 0 20px rgba(255, 0, 110, 0.6),
              0 0 30px rgba(255, 0, 110, 0.4);
            color: #ff006e;
          }
          5%, 15%, 25%, 35%, 45%, 55%, 65%, 75%, 85%, 95% {
            text-shadow: 
              0 0 20px rgba(0, 217, 255, 1),
              0 0 40px rgba(0, 217, 255, 0.8),
              0 0 60px rgba(255, 0, 110, 0.6);
            color: #00d9ff;
          }
        }

        @keyframes strangeBgFlicker {
          0%, 10%, 20%, 30%, 40%, 50%, 60%, 70%, 80%, 90%, 100% {
            background: linear-gradient(135deg, #0a0a0a 0%, #1a0033 50%, #2d0052 100%);
          }
          5%, 15%, 25%, 35%, 45%, 55%, 65%, 75%, 85%, 95% {
            background: linear-gradient(135deg, #1a0033 0%, #2d0052 50%, #4d0080 100%);
          }
        }

        @keyframes strangeLightEffect {
          0%, 10%, 20%, 30%, 40%, 50%, 60%, 70%, 80%, 90%, 100% {
            opacity: 0.3;
            box-shadow: 0 0 20px rgba(255, 0, 110, 0.2), inset 0 0 30px rgba(0, 217, 255, 0.05);
          }
          5%, 15%, 25%, 35%, 45%, 55%, 65%, 75%, 85%, 95% {
            opacity: 0.8;
            box-shadow: 0 0 50px rgba(0, 217, 255, 0.4), inset 0 0 50px rgba(255, 0, 110, 0.1);
          }
        }

        .stranger-things-active {
          animation: strangeBgFlicker 0.4s infinite;
        }

        .stranger-things-active h1,
        .stranger-things-active h2,
        .stranger-things-active h3 {
          animation: strangeLights 0.4s infinite;
        }

        .stranger-things-active header {
          animation: strangeLightEffect 0.4s infinite;
        }

        .stranger-things-active main {
          animation: strangeLightEffect 0.4s infinite;
        }
      `;
      document.head.appendChild(style);
    }
  }

  removeGlobalStyles() {
    const style = document.getElementById('stranger-things-styles');
    if (style) {
      style.remove();
    }
  }

  toggleEffect() {
    this.active = !this.active;
    localStorage.setItem('strangerThingsActive', this.active);
    
    if (this.active) {
      this.enableEffect();
    } else {
      this.disableEffect();
    }
  }

  render() {
    return html`
      <button 
        class="effect-button ${this.active ? 'active' : ''}"
        @click="${this.toggleEffect}"
        title="Toggle Stranger Things Effect"
      >
        ✨
      </button>
    `;
  }
}

customElements.define('stranger-things-effect', StrangerThingsEffect);
