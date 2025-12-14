import { html, css, LitElement } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/all/lit-all.min.js';

class CardFlipElement extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    .card-container {
      perspective: 1000px;
      display: flex;
      justify-content: center;
      margin-top: 2em;
    }

    .magic-card {
      width: 200px;
      height: 300px;
      background: #000;
      border: 2px solid gold;
      border-radius: 10px;
      text-align: center;
      line-height: 300px;
      font-size: 24px;
      color: white;
      position: relative;
      transform-style: preserve-3d;
      transition: transform 0.8s;
      cursor: pointer;
    }

    .magic-card:hover {
      transform: rotateY(180deg);
    }

    .card-front,
    .card-back {
      position: absolute;
      width: 100%;
      height: 100%;
      backface-visibility: hidden;
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .card-front {
      background: #222;
    }

    .card-back {
      background: #444;
      transform: rotateY(180deg);
    }
  `;

  render() {
    return html`
      <div class="card-container">
        <div class="magic-card">
          <div class="card-front">Pick a Card</div>
          <div class="card-back">Ace of Spades!</div>
        </div>
      </div>
    `;
  }
}

customElements.define('card-flip', CardFlipElement);
