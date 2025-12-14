/**
 * Home Page Initialization
 */
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import AudioPlayer from '../components/AudioPlayer.js';
import MagicTrickButton from '../components/MagicTrickButton.js';
import CardFlip from '../components/CardFlip.js';

function initHome() {
  // Initialize components
  const header = new Header();
  const footer = new Footer();
  const audioPlayer = AudioPlayer.getInstance();
  const cardFlip = new CardFlip('card-container');

  // Render components
  header.render();
  footer.render();
  cardFlip.render();

  // Initialize interactive components
  new MagicTrickButton('magic-btn', 'magic-trick');

  // Start audio
  audioPlayer.play();
}

// Run when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initHome);
} else {
  initHome();
}
