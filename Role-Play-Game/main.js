import characterData from './data.js'
import Character from './Character.js'

// new monsters to come after the other is dead
let monstersArray = ["orc", "demon", "goblin"]
let isWaiting = false //to disable the button when monster is dead and game is ended

function getNewMonster(){
    
    const nextMonsterData = characterData[monstersArray.shift()]
    return  nextMonsterData ? new Character (nextMonsterData) : {}
}

//evocks the attack button
function attack(){
    
    if (!isWaiting){  
        wizard.setDiceHtml()
        monster.setDiceHtml()
        wizard.takeDamage(monster.currentDiceScore)
        monster.takeDamage(wizard.currentDiceScore)  
        render()
    
   //    CONDITIONS to endGame() or BRING more monsters to fight 
        if(wizard.dead){
        endGame()
        } 
        else if(monster.dead){ 
        isWaiting = true
        if(monstersArray.length > 0){
            setTimeout(()=> {               //to delay coming of new monster by 1sec = 1000
                monster = getNewMonster()   //bring more monsters
                render()                    // to display the new monsters
                isWaiting = false
                }, 2000)              
            } else{
               endGame() 
                }
            }
          }
        }

function endGame(){
    isWaiting = true
    // using the ternary operator to set condition (replacing If Condition)
    const endMessage = wizard.health === 0 && monster.health === 0 ?'no victors - all creatures are dead':
     wizard.health > 0? 'The Wizard Wins':
    'The monsters is Victorious' 
    const endEmoji = wizard.health > 0 ? "✌️" : "☠️"
    
    setTimeout(()=> document.body.innerHTML = `
    <div class="end-game"><h1> The game has ended!</h1>
    <h3>${endMessage}</h3>
    <p class="end-emoji">${endEmoji}</p>
    </div>`,2000) //delaying the display of endGame - setTimeout.
    
}
document.getElementById("attack-button").addEventListener('click', attack)


function render(){
    document.getElementById('hero').innerHTML = wizard.getCharacterHtml()
    document.getElementById('monster').innerHTML = monster.getCharacterHtml()
}
const wizard = new Character(characterData.hero)
let monster = getNewMonster() //to get all orc, demom, goblin

render()

function restart(){
    if(wizard === dead || monster === dead){
       attack()
        
    }
}
restart()

// =========ISSUES==========
// restart function not active
//