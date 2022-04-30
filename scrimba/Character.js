import {getDiceRollArray} from '/utils.js'

function Character(data){
    Object.assign(this, data)
    
        this.getDiceHtml = function(diceCount){
            return getDiceRollArray(diceCount).map(function(num){
                return `<div class="dice">${num}</div>`
            }).join('')

        this.getCharacterHtml = function () {
            const {elementId, name, avatar, health, diceRoll} = this
            let diceHtml = this.getDiceHtml(diceCount)
return 
        `<div class="character-card">
            <h4 class="name"> ${name} </h4>
            <img class="avatar" src=${avatar}/>
            <p class="health">health:<b>${health} </b></p>
            <div class="dice-container"><div class="dice">${diceHtml} </div>
        </div>
    </div> 
    `
        }    
        
        
    
    }    
    
    }
    export default Character