

let hasBlackJack = false

let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
document.getElementById("start")
document.getElementById("new")

function startGame(){
    let isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    let cards = [firstCard, secondCard]
    let sum = firstCard + secondCard
    renderGame()
   getRandomCard()
}
function renderGame(){
    cardsEl.textContent += "Cards:" + cards
    for(let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " "  
    }
    sumEl.textContent = "sum: " + sum
    if(sum < 21){
        message = "Do you want another card?"
    } else if (sum === 21){
        message = "You have won a Blackjack"
        hasBlackJack = true
    }else {
        message = "You lost Blackjack"
        isAlive = false
    }
        messageEl.textContent = message 
}

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber> 10){
        return 10
    }else if (randomNumber === 1){
        return 11
    }else {
        return randomNumber
    }
} 

function newCard () {
    if(isAlive === true & hasBlackJack === false){
    let card = getRandomCard()
    sum += card
cards.push(card)
console.log(cards)

    renderGame()
}
}
newCard()