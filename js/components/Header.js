/**
 * Header Component
 * Renders the page header with navigation
 */
import CONFIG from '../config.js';

class Header {
  constructor(containerId = 'header') {
    this.container = document.getElementById(containerId);
  }

  render() {
    const nav = CONFIG.navigation
      .map(item => `<a href="${item.href}">${item.text}</a>`)
      .join('');

    this.container.innerHTML = `
      <h1>Magic by Luke</h1>
      <nav>${nav}</nav>
    `;
  }
}

export default Header;
