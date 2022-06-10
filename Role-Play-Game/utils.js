

function getDiceRollArray(diceCount){
    return new Array(diceCount).fill(0).map(function(){
        return Math.floor(Math.random() * 6) + 1
    })
}      //return random number between 1-6
// this function will generate random numbers for our dice - array

function getDicePlaceHolderHtml(diceCount){
    return new Array (diceCount).fill(0).map(function(){
        return `<div class="placeholder-dice"></div>`
    }).join('')
}//making the riceRoll display empty 

const getPercentage = (remainingHealth, maximumHealth) => 
    (100 * remainingHealth) / maximumHealth

// making the game calculate percentage for remaing health


export {getDiceRollArray, getDicePlaceHolderHtml, getPercentage}