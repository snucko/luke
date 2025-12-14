/**
 * Card Flip Component
 * 3D card flip effect
 */
class CardFlip {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
  }

  render() {
    this.container.innerHTML = `
      <div class="card-container">
        <div class="magic-card">
          <div class="card-front">Pick a Card</div>
          <div class="card-back">Ace of Spades!</div>
        </div>
      </div>
    `;
  }
}

export default CardFlip;
