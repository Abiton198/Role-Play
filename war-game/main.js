let deckId = ""
const cardsContainer =  document.getElementById("cards") //div with cards at centre
const header = document.getElementById("header") //div with 3 items at top 
const newDeck = document.getElementById("new-deck")//New Deck:
const newCard = document.getElementById("new-card") //Draw:
const remainingCards = document.getElementById("remaining-cards") //Remaining Crads:
const cardsAvailable = document.getElementById("cards-available") //cards:
const computerScore = document.getElementById("computer-score")//computer score:
const myScore = document.getElementById("my-score")//Me:

// bring a deck of cards
function handleClick(){
    fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
    .then(res => res.json())
    .then(data =>{
        deckId = data.deck_id
cardsAvailable.textContent = "Cards:" + data.remaining
    console.log(data)}) 
    }

// drawing newCards from the deck
    function drawNewCard(){
        fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`)
        .then(res => res.json()
        .then(data =>{
            console.log(data)
       cardsContainer .children[0].innerHTML =`   
        <img src=${data.cards[0].image} class="card" />
        `//.children will make images go into the in divs created within another div
        cardsContainer.children[1].innerHTML =`
        <img src=${data.cards[1].image} class="card" />
     `
    //  displaying the winner messsage on html
    const winnerText = determineCardWinner(data.cards[0], data.cards[1])
     header.innerHTML = winnerText

    // const remainingCardsText = determineCardWinner(data.remaining)
     remainingCards.textContent = "Remaining Cards:" + " " + data.remaining

     if(data.remaining === 0){
        newCard.disabled = true
     }
       
        }))
    }
   
  
//button when clicked trigger event as per notification on button(eg-newDeck brings newsetof cards)
newDeck.addEventListener('click', handleClick)
newCard.addEventListener('click', drawNewCard)

//to determine winner
function determineCardWinner(card1, card2){
const valueOptions = ["2", "3", "4", "5", "6", "7", "8", "9", 
"10", "JACK", "QUEEN", "KING", "ACE"]
const card1ValueIndex = valueOptions.indexOf(card1.value)
const card2ValueIndex = valueOptions.indexOf(card2.value)

//conditions for the outcome/results/score
if(card1ValueIndex > card2ValueIndex){
    return 'card1 has won'
     
}else if (card1ValueIndex < card2ValueIndex){
    return  'card2 has won'

}else{
    return 'It is a draw'
}}

function playerScore(){

    if(card1 > card2){
    computerScore.textContent = "Computer Score:" + Number 
}else if (card2 > card1){
    myScore.textContent = "Me:" + Number
}else{
 
}
}

//determineCardWinner(card1Obj, card2Obj)

