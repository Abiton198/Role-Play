let deckId = ""
const cardsContainer =  document.getElementById("cards")
// bring a deck of cards
function handleClick(){
    fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
    .then(res => res.json())
    .then(data =>{
        deckId = data.deck_id
    console.log(data)}) 
    }

// drawing newCards from the deck
    function newCard(){
        fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`)
        .then(res => res.json()
        .then(data =>{ 
            console.log(data.cards)

       cardsContainer .children[0].innerHTML =`   
        <img src=${data.cards[0].image} class="card" />
        `//.children will make images go into the in divs created within another div
        cardsContainer.children[1].innerHTML =`
        <img src=${data.cards[1].image} class="card" />
        `
        }))
    }
   


document.getElementById("new-deck").addEventListener('click', handleClick)
document.getElementById("new-card").addEventListener('click', newCard)