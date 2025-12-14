/**
 * Magic Trick Button Component
 * Handles trick reveal functionality
 */
import CONFIG from '../config.js';

class MagicTrickButton {
  constructor(buttonId, displayId) {
    this.button = document.getElementById(buttonId);
    this.display = document.getElementById(displayId);
    this.bind();
  }

  bind() {
    if (this.button) {
      this.button.addEventListener('click', () => this.revealTrick());
    }
  }

  getRandomTrick() {
    return CONFIG.tricks[Math.floor(Math.random() * CONFIG.tricks.length)];
  }

  revealTrick() {
    const trick = this.getRandomTrick();
    this.display.innerText = trick;
    this.display.style.opacity = 0;

    setTimeout(() => {
      this.display.style.opacity = 1;
    }, 100);
  }
}

export default MagicTrickButton;
