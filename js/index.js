const cards = [
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' },
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' }
];

const memoryGame = new MemoryGame(cards);

window.addEventListener('load', (event) => {
  let html = '';
  memoryGame.cards.forEach((pic) => {
    html += `
      <div class="card" data-card-name="${pic.name}">
        <div class="back" name="${pic.img}"></div>
        <div class="front" style="background: url(img/${pic.img}) no-repeat"></div>
      </div>
    `;
  });

  // Add all the divs to the HTML
  document.querySelector('#memory-board').innerHTML = html;

  // Bind the click event of each element to a function

  const cardsElements = Array.from(document.querySelectorAll('.card'))

  cardsElements.forEach((card) => {
      card.addEventListener('click', function cardAdd() {
        card.classList.toggle('turned');//VIRA A CARTA 
        //e add na carAdd
        //cardAdd(card)
        // console.log(result)
        console.log(`Card clicked: ${card}`);
      });
    });
  });

  // document.querySelectorAll('.card').forEach((card) => {
  //   card.addEventListener('click', () => {
  //     // TODO: write some code here
  //     card.classList.toggle('turned');
  //     console.log(`Card clicked: ${card}`);
  //   });
  // });
// });

// Função que ao "ouvir" o click, vai adicionar a carta à array pickedCards
function cardAdd(card){
  //if(memoryGame.pickedCards.length <= 2){
   let pickedCardsUp = memoryGame.pickedCards.push(card)
   return pickedCardsUp
  //}
}

//       //event.currentTarget.classList.
      
//       console.log(memoryGame.pickedCards)
//       // for (let i = 0; i < memoryGame.pickedCards.length)
//       // {
//       //   if (memoryGame.pickedCards.length === 2){
//       //     memoryGame.checkIfPair(memoryGame.pickedCards[0], memoryGame.pickedCards[1])
//       //   }
//       // })
      
//       //card.classList.toggle('back');

// console.log(memoryGame.pickedCards[0])
// console.log(memoryGame.pickedCards[1])



// backup 

// if (memoryGame.pickedCards.length === 2){
//   const checkIfPair = memoryGame.checkIfPair(memoryGame.pickedCards[0], memoryGame.pickedCards[1])
  
//   checkIfPair 
// }