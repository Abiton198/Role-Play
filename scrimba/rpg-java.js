const hero = {
    elementId:'hero',
    name:'wizard',
    avatar:'images/wizard.png',
    health:'60',
    diceCount:3
    
}
const monster = {
    elementId:'monster',
    name:'orc',
    avatar:'images/orc.png',
    health:'10',
    diceCount:1
   
}

function Character(data) {
   Object.assign(this,data)

   this.getDiceHtml = function (diceCount){
    return getDiceRollArray(diceCount).map(function(num){
        return  `<div class="dice"> ${num} </div>`
    }).join('')
    }

this.getCharacterHtml = function () {
    const {elementId, name, avatar, health, diceCount} = this
    let diceHtml = this.getDiceHtml(diceCount)
    
    return  `
        <div class="character-card">
        <h4 class="name"> ${name} </h4>
        <image class="avatar" src="${avatar}"/>
        <p class="health">health: <b> ${health} </b></p>
        <div class="dice-container">${diceHtml}</div>
        </div>`
}
}
const wizard = new Character(hero)
document.getElementById(wizard.elementId).innerHTML = wizard.getCharacterHtml()
const orc = new Character(monster)
document.getElementById(orc.elementId).innerHTML = orc.getCharacterHtml()

//wizard.summarisegetCharacterHtml()
//orc.summarisegetCharacterHtml()




function getDiceRollArray(diceCount){
    return new Array(diceCount).fill(0).map(function(){
        return Math.floor(Math.random() * 6) + 1
    })
}
        //return random number between 1-6
     // this function will generate random numbers for our dice - array
