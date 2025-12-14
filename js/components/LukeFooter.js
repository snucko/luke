import { html, css, LitElement } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/all/lit-all.min.js';
import CONFIG from '../config.js';

class LukeFooter extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    footer {
      background: rgba(26, 26, 46, 0.95);
      backdrop-filter: blur(10px);
      border-top: 1px solid rgba(249, 212, 35, 0.1);
      padding: 3rem 2rem 1.5rem;
      color: #fff;
    }

    .footer-content {
      max-width: 1200px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 2rem;
      margin-bottom: 2rem;
    }

    .footer-section h3 {
      color: #f9d423;
      margin-bottom: 1rem;
      font-size: 1.1rem;
    }

    .footer-section p {
      font-size: 0.9rem;
      color: rgba(255, 255, 255, 0.8);
      line-height: 1.6;
    }

    .footer-section ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .footer-section ul li {
      margin-bottom: 0.5rem;
    }

    .footer-section a {
      color: rgba(255, 255, 255, 0.8);
      text-decoration: none;
      transition: color 0.3s ease;
    }

    .footer-section a:hover {
      color: #f9d423;
    }

    .social-links {
      display: flex;
      gap: 1rem;
    }

    .social-links a {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: rgba(249, 212, 35, 0.1);
      border: 1px solid rgba(249, 212, 35, 0.3);
      font-size: 1.2rem;
      transition: all 0.3s ease;
    }

    .social-links a:hover {
      background: rgba(249, 212, 35, 0.2);
      border-color: #f9d423;
    }

    .footer-bottom {
      border-top: 1px solid rgba(249, 212, 35, 0.1);
      padding-top: 2rem;
      text-align: center;
      color: rgba(255, 255, 255, 0.6);
      font-size: 0.85rem;
    }

    .footer-bottom a {
      color: #f9d423;
      text-decoration: none;
    }

    .footer-bottom a:hover {
      text-decoration: underline;
    }

    @media (max-width: 768px) {
      .footer-content {
        grid-template-columns: 1fr;
        gap: 1.5rem;
      }

      footer {
        padding: 2rem 1rem 1rem;
      }
    }
  `;

  render() {
    return html`
      <footer>
        <div class="footer-content">
          <div class="footer-section">
            <h3>About</h3>
            <p>Professional magician bringing wonder and entertainment to events of all sizes.</p>
            <div class="social-links">
              ${CONFIG.socialLinks.map(link => html`
                <a href="${link.url}" title="${link.name}">${link.icon}</a>
              `)}
            </div>
          </div>

          <div class="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="index.html">Home</a></li>
              <li><a href="about.html">About</a></li>
              <li><a href="gallery.html">Gallery</a></li>
              <li><a href="contact.html">Contact</a></li>
            </ul>
          </div>

          <div class="footer-section">
            <h3>Get in Touch</h3>
            <p><strong>Email:</strong></p>
            <p><a href="mailto:luke.tivnan@gmail.com">luke.tivnan@gmail.com</a></p>
            <p style="margin-top: 1rem;"><strong>Available for:</strong></p>
            <p>Birthdays • Corporate Events • Weddings • Private Parties</p>
          </div>
        </div>

        <div class="footer-bottom">
          <p>&copy; 2025 Magic by Luke. All rights reserved. | <a href="#">Privacy Policy</a></p>
        </div>
      </footer>
    `;
  }
}

customElements.define('luke-footer', LukeFooter);
