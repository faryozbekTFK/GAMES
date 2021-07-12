const CARDS = document.querySelectorAll(".minCont");
const CONTAINER = document.querySelectorAll("div");

let hasFlippedCard = false;
let firsCard, secondCard;

function flipCard() {
  this.classList.add('flip');
  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firsCard = this;
  } else {
    hasFlippedCard = false;
    secondCard = this;
  }
  console.log(firsCard, secondCard);
  if (firsCard.dataset.framework === secondCard.dataset.framework) {
    firsCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
  } else {
    setTimeout(() => {
      firsCard.classList.remove('flip');
      secondCard.classList.remove('flip');
    }, 1500);
  }
}

CARDS.forEach((card) => card.addEventListener('click', flipCard));
