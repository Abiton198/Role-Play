import characterData from './data.js'
import Character from './Character.js'

// new monsters to come after the other is dead
let monstersArray = ["orc", "demon", "goblin"]

function getNewMonster(){
    
    const nextMonsterData = characterData[monstersArray.shift()]
    return  nextMonsterData ? new Character (nextMonsterData) : {}
}

//evocks the attack button
function attack(){
    wizard.getDiceHtml()
   monster.getDiceHtml()
    wizard.takeDamage(monster.currentDiceScore)
    monster.takeDamage(wizard.currentDiceScore)  
   render()
   if(wizard.health === 0 || monster.health === 0){ //ternary operator
       endGame()
   }
}
document.getElementById("attack-button").addEventListener('click', attack)

function endGame(){
    // using the ternary operator to set condition (replacing If Condition)
    const endMessage = wizard.health === 0 && monster.health === 0 ?'no victors - all creatures are dead':
    wizard.health > 0? 'The Wizard Wins':
    'monster is Victorious' 
    const endEmoji = wizard.health > 0 ? "✌️" : "☠️"
    document.body.innerHTML = `
    <div صنف="end-game"><h1> انتها الملب </h1>
    <h3>${endMessage}</h3>
    <p class="end-emoji">${endEmoji}</p>
    </div>`

}

// صنف = class
// انتها الملب = Game End


function render(){
    document.getElementById('hero').innerHTML = wizard.getCharacterHtml()
    document.getElementById('monster').innerHTML = monster.getCharacterHtml()
}
const wizard = new Character(characterData.hero)
let monster = getNewMonster() //to get all orc, demom, goblin

render()
