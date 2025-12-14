/**
 * Gallery Page Initialization
 */
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import AudioPlayer from '../components/AudioPlayer.js';

function initGallery() {
  const header = new Header();
  const footer = new Footer();
  const audioPlayer = AudioPlayer.getInstance();

  header.render();
  footer.render();
  audioPlayer.play();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initGallery);
} else {
  initGallery();
}
