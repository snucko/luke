import { html, css, LitElement } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/all/lit-all.min.js';

class LukeFooter extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    footer {
      background: #1a1a2e;
      text-align: center;
      padding: 10px 0;
      color: #fff;
      font-size: 0.9rem;
    }
  `;

  render() {
    return html`
      <footer>
        <p>&copy; 2025 Magic by Luke</p>
      </footer>
    `;
  }
}

customElements.define('luke-footer', LukeFooter);
