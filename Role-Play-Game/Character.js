import {getDiceRollArray} from './utils.js'
import {getDicePlaceHolderHtml} from './utils.js'


// making the game calculate percentage for remaing health

const getPercentage = (remainingHealth, maximumHealth) => 
    (100 * remainingHealth) / maximumHealth


       function Character(data) {
    
        Object.assign(this,data)
        this.maxHealth = this.health

// making a percentage bar
this.getHealthBarHtml = function (){
    const percent = getPercentage(this.health, this.maxHealth)
    
}
     
        // function to reduce the health-score using .reduce()
        this.takeDamage = function (attackScoreArray){
        const totalAttackScore = attackScoreArray.reduce((total, num) => total + num) //using arrow function t replace normal function
            this.health -= totalAttackScore
            if(this.health <= 0){
                this.health = 0
                this.dead = true
            }
         }


        this.diceArray = getDicePlaceHolderHtml(this.diceCount)

        this.getDiceHtml = function (diceCount){
        this.currentDiceScore = getDiceRollArray(this.diceCount)
        this.diceArray = this.currentDiceScore.map((num) => `<div class="dice">${num}</div>`
        ).join('')
        }
              
         //the body of html as displayed in the game
     this.getCharacterHtml = function () {
        const healthBar = this.getHealthBarHtml()
         const {elementId, name, avatar, health, diceCount} = this //this - object *making it reusable to different contexts
                  return  `
             <div class="character-card">
             <h4 class="name"> ${name} </h4>
             <image class="avatar" src="${avatar}"/>
             <p class="health">health: <b> ${health} </b></p>
             <div class="dice-container">${this.diceArray}</div>
             </div>
             <div class = "percentageBar"> % Bar </div>`
     } //making the dice roll empty display
    }

     export default Character



      //let diceHtml = this.getDiceHtml(diceCount)