class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = []; // ARRAY DE CARTAS ESCOLHIDAS PARA CONSEGUIMOS COMPARAR
    this.pairsClicked = 0;  //primeira carta q escolheu
    this.pairsGuessed = 0;// segunda carta q escolheu tentando fazer match com a primeira

    // add the rest of the class properties here
  }

  shuffleCards() {
    this.cards.sort(function(a,b){
      return Math.random()-0.5
    })
  }

  checkIfPair(card1, card2) {

    if(card1 && card2){// só rodar a função qdo tiver escolhido 2 cartas?
      this.pairsClicked++;
      if (card1 === card2){
        this.pairsGuessed++
        return true
      }
      return false
    }
  }

  checkIfFinished() {
    let numOfPairs = this.cards.length /2
    if (this.pairsGuessed === numOfPairs) {
      return true 
    }
    return false 
    // ... write your code here
  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
