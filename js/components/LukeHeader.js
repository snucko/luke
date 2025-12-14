import { html, css, LitElement } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/all/lit-all.min.js';
import CONFIG from '../config.js';

class LukeHeader extends LitElement {
  static styles = css`
    :host {
      display: block;
      position: sticky;
      top: 0;
      z-index: 100;
    }

    header {
      background: rgba(26, 26, 46, 0.95);
      backdrop-filter: blur(10px);
      padding: 1rem 2rem;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
    }

    .header-content {
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    h1 {
      font-size: 1.8rem;
      color: #f9d423;
      text-shadow: 0 0 10px rgba(249, 212, 35, 0.5);
      margin: 0;
      font-weight: 700;
      letter-spacing: 1px;
    }

    nav {
      display: flex;
      gap: 2rem;
      align-items: center;
    }

    a {
      color: #fff;
      text-decoration: none;
      font-size: 1rem;
      font-weight: 500;
      transition: color 0.3s ease, text-shadow 0.3s ease;
      position: relative;
    }

    a:hover {
      color: #f9d423;
      text-shadow: 0 0 10px rgba(249, 212, 35, 0.5);
    }

    a::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 0;
      height: 2px;
      background: #f9d423;
      transition: width 0.3s ease;
    }

    a:hover::after {
      width: 100%;
    }

    @media (max-width: 768px) {
      .header-content {
        flex-direction: column;
        gap: 1rem;
      }

      h1 {
        font-size: 1.5rem;
      }

      nav {
        gap: 1rem;
        flex-wrap: wrap;
        justify-content: center;
      }

      a {
        font-size: 0.9rem;
      }
    }
  `;

  render() {
    return html`
      <header>
        <div class="header-content">
          <h1>✨ Magic by Luke</h1>
          <nav>
            ${CONFIG.navigation.map(item => html`
              <a href="${item.href}">${item.text}</a>
            `)}
          </nav>
        </div>
      </header>
    `;
  }
}

customElements.define('luke-header', LukeHeader);
