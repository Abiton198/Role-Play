let player = {
    name: "Abiton",
    chips: 300
}

let isAlive = false
   let cards = []
let sum = 0 
let hasBlackJack = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")


playerEl.textContent = player.name + ": $" + player.chips


document.getElementById("start").addEventListener("click", function startGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard

    renderGame()
    
}) 


function renderGame(){
    
    cardsEl.textContent ="Cards: "
    for(let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " " 
    }
    sumEl.textContent = "sum: " + sum
    if(sum < 21){
        message = "Do you want another card?"
    } else if (sum === 21){
        message = "You have won a Blackjack!"
        hasBlackJack = true
    }else {
        message = "You lost game!, Click RESET for a new game!"
        isAlive = false
    }
        messageEl.textContent = message 
}

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber > 10){
        return 10
    }else if (randomNumber === 1){
        return 11
    }else {
        return randomNumber
     }
} 
getRandomCard()

document.getElementById("new").addEventListener("click", function newCard(){
    if(isAlive === true & hasBlackJack === false){
        let card = getRandomCard()
        sum += card
    cards.push(card)
        renderGame()
    }
})


document.getElementById("reset").addEventListener("click", function reset(){
    hasBlackJack === true 
    isAlive === false 
    cardsEl.textContent = 0
    sumEl.textContent = 0
    messageEl.textContent = "This is a New Game!"
    reset.style.display = "block"
    start.style.display = "none"
    start.classList.remove("active")
    reset.classList.add("active")
})
reset()



function celebration() {
    if (hasBlackJack === true){
        document.getElementsByClassName("container").textContent = "CONGRATULATIONS!!!!"
    }
}

/*=========ISSUES TO BE SOLVED===========

1. Reset Button not displaying after end game
2. Chips amount money to be active
3. Celebration function not active*/