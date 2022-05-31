
function getLottoNumbers(){
    const winningNums = []
    for (let i = 0; i < 6; i++){
        winningNums.push(Math.round(Math.random()* 100))
    }
    return winningNums
}


function getWinningNumbersHtml() {
    return getLottoNumbers().map(function(number){
    return `<div class="number">${number}</div>`
    })

}


document.getElementById("button").addEventListener("click", function playGame(){
    document.getElementById("lotto").innerHTML = getWinningNumbersHtml()
    document.getElementById("today-message").innerHTML = `Your Numbers are!!!!`

})



/*========ISSUES TO ATTEND=======

1. Make the game have a reset button displayed after play
2. End game effects when game ends - bubbles on displaying numbers
3. slow transistion display of numbers

=======================================*/








