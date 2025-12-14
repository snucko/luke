import { html, css, LitElement } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/all/lit-all.min.js';

class ContactForm extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    .form-container {
      max-width: 600px;
      margin: 2rem auto;
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(249, 212, 35, 0.2);
      border-radius: 10px;
      padding: 2rem;
      backdrop-filter: blur(10px);
    }

    form {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }

    label {
      display: block;
      color: #f9d423;
      margin-bottom: 0.5rem;
      font-weight: 500;
    }

    input,
    textarea,
    select {
      width: 100%;
      padding: 0.75rem;
      border: 1px solid rgba(249, 212, 35, 0.3);
      border-radius: 5px;
      background: rgba(255, 255, 255, 0.1);
      color: #fff;
      font-family: inherit;
      font-size: 1rem;
      transition: all 0.3s ease;
    }

    input::placeholder,
    textarea::placeholder {
      color: rgba(255, 255, 255, 0.5);
    }

    input:focus,
    textarea:focus,
    select:focus {
      outline: none;
      border-color: #f9d423;
      background: rgba(255, 255, 255, 0.15);
      box-shadow: 0 0 10px rgba(249, 212, 35, 0.2);
    }

    textarea {
      resize: vertical;
      min-height: 120px;
    }

    .form-group {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
    }

    .form-group.full {
      grid-column: 1 / -1;
    }

    button {
      background: linear-gradient(135deg, #f9d423 0%, #f7c722 100%);
      color: #1a1a2e;
      border: none;
      padding: 1rem;
      border-radius: 50px;
      font-size: 1.1rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
      box-shadow: 0 10px 30px rgba(249, 212, 35, 0.3);
    }

    button:hover {
      transform: translateY(-2px);
      box-shadow: 0 15px 40px rgba(249, 212, 35, 0.4);
    }

    button:disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }

    .success-message {
      color: #4ade80;
      text-align: center;
      padding: 1rem;
      background: rgba(74, 222, 128, 0.1);
      border-radius: 5px;
      display: none;
    }

    .success-message.show {
      display: block;
    }

    @media (max-width: 768px) {
      .form-group {
        grid-template-columns: 1fr;
      }

      .form-container {
        padding: 1.5rem;
      }
    }
  `;

  static properties = {
    submitted: { type: Boolean },
  };

  constructor() {
    super();
    this.submitted = false;
  }

  handleSubmit(e) {
    e.preventDefault();
    // In a real application, you would send this data to a server
    const formData = new FormData(e.target);
    console.log('Form submitted:', Object.fromEntries(formData));
    this.submitted = true;
    setTimeout(() => {
      this.submitted = false;
      e.target.reset();
    }, 3000);
  }

  render() {
    return html`
      <div class="form-container">
        <form @submit="${this.handleSubmit}">
          <div class="form-group">
            <div class="full">
              <label for="name">Full Name *</label>
              <input type="text" id="name" name="name" placeholder="Your name" required>
            </div>
          </div>

          <div class="form-group">
            <div>
              <label for="email">Email *</label>
              <input type="email" id="email" name="email" placeholder="your@email.com" required>
            </div>
            <div>
              <label for="phone">Phone</label>
              <input type="tel" id="phone" name="phone" placeholder="(555) 123-4567">
            </div>
          </div>

          <div class="form-group">
            <div class="full">
              <label for="event-type">Event Type *</label>
              <select id="event-type" name="eventType" required>
                <option value="">Select event type</option>
                <option value="birthday">Birthday Party</option>
                <option value="corporate">Corporate Event</option>
                <option value="wedding">Wedding</option>
                <option value="private">Private Event</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <div class="form-group">
            <div class="full">
              <label for="date">Preferred Date *</label>
              <input type="date" id="date" name="date" required>
            </div>
          </div>

          <div class="form-group">
            <div class="full">
              <label for="message">Message</label>
              <textarea id="message" name="message" placeholder="Tell us about your event..."></textarea>
            </div>
          </div>

          <button type="submit">Request a Performance</button>

          <div class="success-message ${this.submitted ? 'show' : ''}">
            ✓ Thank you! We'll contact you soon to confirm your booking.
          </div>
        </form>
      </div>
    `;
  }
}

customElements.define('contact-form', ContactForm);
