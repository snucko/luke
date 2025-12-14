/**
 * Audio Player Component
 * Singleton pattern for managing background audio
 */
import CONFIG from '../config.js';

class AudioPlayer {
  static instance = null;
  audio = null;

  constructor() {
    if (AudioPlayer.instance) {
      return AudioPlayer.instance;
    }

    if (CONFIG.audio.enabled) {
      this.audio = new Audio(CONFIG.audio.src);
      this.audio.autoplay = CONFIG.audio.autoplay;
      this.audio.loop = CONFIG.audio.loop;
    }

    AudioPlayer.instance = this;
  }

  play() {
    if (this.audio) {
      this.audio.play().catch(err => console.log('Audio play failed:', err));
    }
  }

  pause() {
    if (this.audio) {
      this.audio.pause();
    }
  }

  static getInstance() {
    return AudioPlayer.instance || new AudioPlayer();
  }
}

export default AudioPlayer;
