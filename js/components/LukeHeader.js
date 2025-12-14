import { html, css, LitElement } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/all/lit-all.min.js';
import CONFIG from '../config.js';

class LukeHeader extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    header {
      background: #1a1a2e;
      padding: 20px;
      text-align: center;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
    }

    h1 {
      font-size: 2.5rem;
      color: #f9d423;
      text-shadow: 0 0 10px #f9d423, 0 0 20px #f9d423;
      animation: glow 2s infinite;
      margin: 0 0 20px 0;
    }

    nav {
      display: flex;
      justify-content: center;
      gap: 15px;
      flex-wrap: wrap;
    }

    a {
      color: #fff;
      text-decoration: none;
      font-size: 1.2rem;
      transition: color 0.3s ease;
    }

    a:hover {
      color: #f9d423;
    }

    @keyframes glow {
      0% {
        text-shadow: 0 0 5px #f9d423, 0 0 10px #f9d423, 0 0 20px #f9d423;
      }
      50% {
        text-shadow: 0 0 20px #f9d423, 0 0 30px #f9d423, 0 0 40px #f9d423;
      }
      100% {
        text-shadow: 0 0 5px #f9d423, 0 0 10px #f9d423, 0 0 20px #f9d423;
      }
    }
  `;

  render() {
    return html`
      <header>
        <h1>Magic by Luke</h1>
        <nav>
          ${CONFIG.navigation.map(item => html`
            <a href="${item.href}">${item.text}</a>
          `)}
        </nav>
      </header>
    `;
  }
}

customElements.define('luke-header', LukeHeader);
