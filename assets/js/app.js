const cards = document.querySelectorAll('.memory-cards');
//Imitated from freecodecamp.org Memory Game in Vanilla JavaScript//
let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add('flip');

  if (!hasFlippedCard) {
    // first click
    hasFlippedCard = true;
    firstCard = this;

    return;
  }

  // second click
  secondCard = this;

  checkForMatch();
}

function checkForMatch() {
  let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;

  isMatch ? disableCards() : unflipCards();
}

function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);

  resetBoard();
}

function unflipCards() {
  lockBoard = true;

  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');

    resetBoard();
  }, 1500);
}

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}
/*
(function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
    console.log(card.style.order);
  });
})();
*/
	

var cards = ["shop", "coffee", "I went", "to", "to the", "buy"];
	  function shuffleCards(cardArray) {
	    let currentIndex = cardArray.length,
	      temporaryValue,
	      randomIndex;
	

	    while (0 !== currentIndex) {
	      randomIndex = Math.floor(Math.random() * currentIndex);
	      currentIndex -= 1;
	

	      temporaryValue = cardArray[currentIndex];
	      cardArray[currentIndex] = cardArray[randomIndex];
	      cardArray[randomIndex] = temporaryValue;
	    }
      };
      
      shuffleCards(cards);

    console.log(cards);



cards.forEach(card => card.addEventListener('click', flipCard));



//Copied from youtube video Build your own COUNTDOWN TIMER in 15 lines of JavaScript code, Ania Kubów #JavaScriptGames//
document.addEventListener('DOMContentLoaded', () => {

const timeLeftDisplay = document.querySelector('#time-left')
const startBtn = document.querySelector('#start-button')
let timeLeft = 60

function countDown(){
    setInterval(function() {

if(timeLeft <=0 ) {
    clearInterval(timeLeft = 0)
}

        timeLeftDisplay.innerHTML = timeLeft 
        timeLeft -=1
    }, 1000)
}


startBtn.addEventListener('click', countDown)

})

