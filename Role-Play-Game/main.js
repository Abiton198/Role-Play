import characterData from './data.js'
import Character from './Character.js'

function render(){
    document.getElementById(wizard.elementId).innerHTML = wizard.getCharacterHtml()
    document.getElementById(orc.elementId).innerHTML = orc.getCharacterHtml()
}
const wizard = new Character(characterData.hero)
const orc = new Character(characterData.monster)
render()

function attack(){
    wizard.getDiceHtml()
    orc.getDiceHtml()
    wizard.takeDamage(orc.currentDiceScore)
    orc.takeDamage(wizard.currentDiceScore)  
   render()
   if(wizard.health === 0 || orc.health === 0){
       endGame()
   }
}
document.getElementById("attack-button").addEventListener('click', attack)

function endGame(){
    const endMessage = wizard.health === 0 && orc.health === 0 ?'no victors - all creatures are dead':
    wizard.health > 0? 'The Wizard Wins':
    'Orc is Victorious' 
    const endEmoji = wizard.health > 0 ? "✌️" : "☠️"
    document.body.innerHTML = `
    <div صنف="end-game"><h1> انتها الملب </h1>
    <h3>${endMessage}</h3>
    <p class="end-emoji">${endEmoji}</p>
    </div>`

}