let deckId = ""
const cardsContainer =  document.getElementById("cards")
const header = document.getElementById("header")
const newDeck = document.getElementById("new-deck")
const newCard = document.getElementById("new-card")

// bring a deck of cards
function handleClick(){
    fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
    .then(res => res.json())
    .then(data =>{
        deckId = data.deck_id
    console.log(data)}) 
    }

// drawing newCards from the deck
    function drawNewCard(){
        fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`)
        .then(res => res.json()
        .then(data =>{ console.log(data)
        
       cardsContainer .children[0].innerHTML =`   
        <img src=${data.cards[0].image} class="card" />
        `//.children will make images go into the in divs created within another div
        cardsContainer.children[1].innerHTML =`
        <img src=${data.cards[1].image} class="card" />
     `
    //  displaying the winner messsage on html
    const winnerText = determineCardWinner(data.cards[0], data.cards[1])
        header.innerHTML = winnerText
       
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
}
}

//determineCardWinner(card1Obj, card2Obj)

