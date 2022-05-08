import {getDiceRollArray} from './utils.js'
import {getDicePlaceHolderHtml} from './utils.js'


       function Character(data) {
        Object.assign(this,data)
     
        this.takeDamage = function (attackScoreArray){
        const totalAttackScore = attackScoreArray.reduce(function(total, num){
                return total + num
            })
            this.health -= totalAttackScore
            if(this.health <= 0){
                this.health = 0
            }
            
        }
        this.diceArray = getDicePlaceHolderHtml(this.diceCount)

        this.getDiceHtml = function (diceCount){
        this.currentDiceScore = getDiceRollArray(this.diceCount)
        this.diceArray = this.currentDiceScore.map(function(num){
            return `<div class="dice">${num}</div>`
        }).join('')
        }
              
         //the body of html as displayed in the game
     this.getCharacterHtml = function () {
         const {elementId, name, avatar, health, diceCount} = this

         return  `
             <div class="character-card">
             <h4 class="name"> ${name} </h4>
             <image class="avatar" src="${avatar}"/>
             <p class="health">health: <b> ${health} </b></p>
             <div class="dice-container">${this.diceArray}</div>
             </div>`
     } //making the dice roll empty display
     }

     export default Character



      //let diceHtml = this.getDiceHtml(diceCount)