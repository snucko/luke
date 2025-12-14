import { html, css, LitElement } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/all/lit-all.min.js';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xyznjjld';

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

    button:hover:not(:disabled) {
      transform: translateY(-2px);
      box-shadow: 0 15px 40px rgba(249, 212, 35, 0.4);
    }

    button:disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }

    .message {
      text-align: center;
      padding: 1rem;
      border-radius: 5px;
      display: none;
      font-weight: 500;
    }

    .message.show {
      display: block;
    }

    .success {
      background: rgba(74, 222, 128, 0.1);
      border: 1px solid rgba(74, 222, 128, 0.3);
      color: #4ade80;
    }

    .error {
      background: rgba(239, 68, 68, 0.1);
      border: 1px solid rgba(239, 68, 68, 0.3);
      color: #ef4444;
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
    isLoading: { type: Boolean },
    message: { type: String },
    messageType: { type: String }, // 'success' or 'error'
  };

  constructor() {
    super();
    this.submitted = false;
    this.isLoading = false;
    this.message = '';
    this.messageType = '';
  }

  async handleSubmit(e) {
    e.preventDefault();
    this.isLoading = true;
    this.message = '';

    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json',
        },
      });

      if (response.ok) {
        this.message = '✓ Thank you! We\'ll contact you soon to confirm your booking.';
        this.messageType = 'success';
        form.reset();
        this.isLoading = false;
        
        // Clear message after 5 seconds
        setTimeout(() => {
          this.message = '';
          this.messageType = '';
        }, 5000);
      } else {
        const data = await response.json();
        if (data.errors) {
          this.message = `Error: ${data.errors.map(e => e.message).join(', ')}`;
        } else {
          this.message = 'Oops! There was a problem submitting your form. Please try again.';
        }
        this.messageType = 'error';
        this.isLoading = false;
      }
    } catch (error) {
      console.error('Form submission error:', error);
      this.message = 'Network error. Please check your connection and try again.';
      this.messageType = 'error';
      this.isLoading = false;
    }
  }

  render() {
    return html`
      <div class="form-container">
        <form @submit="${this.handleSubmit}">
          <div class="form-group">
            <div class="full">
              <label for="name">Full Name *</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                placeholder="Your name" 
                required
                ?disabled="${this.isLoading}"
              >
            </div>
          </div>

          <div class="form-group">
            <div>
              <label for="email">Email *</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                placeholder="your@email.com" 
                required
                ?disabled="${this.isLoading}"
              >
            </div>
            <div>
              <label for="phone">Phone</label>
              <input 
                type="tel" 
                id="phone" 
                name="phone" 
                placeholder="(555) 123-4567"
                ?disabled="${this.isLoading}"
              >
            </div>
          </div>

          <div class="form-group">
            <div class="full">
              <label for="event-type">Event Type *</label>
              <select 
                id="event-type" 
                name="eventType" 
                required
                ?disabled="${this.isLoading}"
              >
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
              <input 
                type="date" 
                id="date" 
                name="date" 
                required
                ?disabled="${this.isLoading}"
              >
            </div>
          </div>

          <div class="form-group">
            <div class="full">
              <label for="message">Message</label>
              <textarea 
                id="message" 
                name="message" 
                placeholder="Tell us about your event..."
                ?disabled="${this.isLoading}"
              ></textarea>
            </div>
          </div>

          <button type="submit" ?disabled="${this.isLoading}">
            ${this.isLoading ? 'Submitting...' : 'Request a Performance'}
          </button>

          <div class="message ${this.message ? 'show' : ''} ${this.messageType}">
            ${this.message}
          </div>
        </form>
      </div>
    `;
  }
}

customElements.define('contact-form', ContactForm);
