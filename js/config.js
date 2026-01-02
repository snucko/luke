/**
 * Application Configuration Module
 * Centralizes all app configuration and constants
 */
const CONFIG = {
  audio: {
    enabled: false, // Disabled by default - better UX
    src: 'audio/magic-theme.mp3',
    autoplay: false,
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
  testimonials: [
    {
      name: 'Sarah Johnson',
      event: 'Birthday Party',
      text: 'Luke\'s performance was absolutely magical! The kids were mesmerized. Highly recommend!',
      rating: 5,
    },
    {
      name: 'Mike Chen',
      event: 'Corporate Event',
      text: 'Professional, engaging, and absolutely entertaining. Our guests are still talking about it.',
      rating: 5,
    },
    {
      name: 'Emily Rodriguez',
      event: 'Wedding Reception',
      text: 'The perfect entertainment for our reception. Luke added such a special touch to our day.',
      rating: 5,
    },
  ],
  socialLinks: [
    { name: 'Instagram', url: '#', icon: '⚡' },
    { name: 'TikTok', url: '#', icon: '◉' },
    { name: 'YouTube', url: '#', icon: '★' },
  ],
};

export default CONFIG;
