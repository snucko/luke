/**
 * Footer Component
 * Renders the page footer
 */
class Footer {
  constructor(containerId = 'footer') {
    this.container = document.getElementById(containerId);
  }

  render() {
    this.container.innerHTML = `
      <p>&copy; 2025 Magic by Luke</p>
    `;
  }
}

export default Footer;
