/**
 * Application Configuration Module
 * Centralizes all app configuration and constants
 */
const CONFIG = {
  audio: {
    enabled: true,
    src: 'audio/magic-theme.mp3',
    autoplay: true,
    loop: true,
  },
  tricks: [
    'The card has vanished!',
    'Watch closely... it\'s gone!',
    'Now you see it, now you don\'t!',
  ],
  navigation: [
    { text: 'Home', href: 'index.html' },
    { text: 'About', href: 'about.html' },
    { text: 'Gallery', href: 'gallery.html' },
    { text: 'Contact', href: 'contact.html' },
  ],
};

export default CONFIG;
