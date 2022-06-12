
import characterData from './data.js'
import {getDicePlaceHolderHtml, getPercentage, getDiceRollArray} from './utils.js'




// class constructor function - starts with a capital letter always (C)

        class Character{
            constructor(data) {
                Object.assign(this,data)
                this.maxHealth = this.health
                this.diceHtml = getDicePlaceHolderHtml(this.diceCount)
            }
        // making a percentage bar
       
        getHealthBarHtml (){
            const percent = getPercentage(this.health, this.maxHealth)
             return `<div class="health-bar-outer">
                    <div class="health-bar-inner ${percent < 26 ? "danger" : ""} "
                     style="width:${percent}%">
                    </div>
                    </div>`
                       }
                  
// document.getElementsByClassName("health-bar-outer")
     
        // function to reduce the health-score using .reduce()
        takeDamage(attackScoreArray){
        const totalAttackScore = attackScoreArray.reduce((total, num) => total + num) //using arrow function t replace normal function
            this.health -= totalAttackScore
            if(this.health <= 0){
                this.health = 0
                this.dead = true
            }
         }

        setDiceHtml (diceCount){
        this.currentDiceScore = getDiceRollArray(this.diceCount)
        this.diceHtml = this.currentDiceScore.map((num) => `<div class="dice">${num}</div>`
        ).join('')
        }
              
         //the body of html as displayed in the game
        getCharacterHtml() {
        const healthBar = this.getHealthBarHtml()
         const {elementId, name, avatar, health, diceCount, diceHtml} = this //this - object *making it reusable to different contexts
                  return  `
             <div class="character-card">
             <h4 class="name"> ${name} </h4>
             <image class="avatar" src="${avatar}"/>
             <p class="health">health: <b> ${health} </b></p>
             ${healthBar}                   
             <div class="dice-container">${diceHtml}</div>
             </div>
             `
             } //making the dice roll empty display
        }

     export default Character



      //let diceHtml = this.getDiceHtml(diceCount)
      //get = returns something, set = update a function