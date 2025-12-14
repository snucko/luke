import CONFIG from '../config.js';

/**
 * AudioManager - Singleton pattern for managing background audio
 * Using Web Component lifecycle patterns
 */
class AudioManager {
  static instance = null;
  audio = null;

  constructor() {
    if (AudioManager.instance) {
      return AudioManager.instance;
    }

    if (CONFIG.audio.enabled) {
      this.audio = new Audio(CONFIG.audio.src);
      this.audio.autoplay = CONFIG.audio.autoplay;
      this.audio.loop = CONFIG.audio.loop;
      this.audio.volume = 0.3; // Set reasonable default volume
    }

    AudioManager.instance = this;
  }

  play() {
    if (this.audio) {
      const promise = this.audio.play();
      if (promise) {
        promise.catch(err => console.log('Audio play failed (likely due to browser policy):', err));
      }
    }
  }

  pause() {
    if (this.audio) {
      this.audio.pause();
    }
  }

  setVolume(volume) {
    if (this.audio && volume >= 0 && volume <= 1) {
      this.audio.volume = volume;
    }
  }

  static getInstance() {
    return AudioManager.instance || new AudioManager();
  }
}

export default AudioManager;
