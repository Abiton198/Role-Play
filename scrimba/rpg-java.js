document.getElementById('hero').innerHTML =
`<div class="character-card">
<h4 class="name"> Wizard </h4>
<img class="avatar" src="images/wizard.png"/>
<p class="health">health: <b> 60 </b></p>
<div class="dice-container"><div class="dice">6 </div></div>
</div> 
`

document.getElementById('monster').innerHTML =
`<div class="character-card">
<h4 class="name"> orc </h4>
<img class="avatar" src="images/wizard.png"/>
<p class="health">health: <b> 10 </b></p>
<div class="dice-container"><div class="dice">4 </div></div>
</div> 
`

const hero = {
    elementId: 'hero',
    name: 'wizard',
    avatar: 'images/wizard.png',
    health: 60,
    diceRoll: 6

}

const monster = {
    elementId: 'monster',
    name: 'orc',
    avatar: 'images/wizard.png',
    health: 10,
    diceRoll: 4

}

function renderCharacter(ElementId, name, avatar, health, diceRoll){
    document.getElementById(elementId).innerHTML = 
    `<div class="character-card">
<h4 class="name"> ${name} </h4>
<img class="avatar" src=${avatar}/>
<p class="health">${health}<b> 60 </b></p>
<div class="dice-container"><div class="dice">${diceRoll} </div></div>
</div> 
`
}
renderCharacter(heroElementId,heroAvatar,heroName,heroDiceRoll,heroHealth)
renderCharacter(monsterElementId, monsterName, monsterAvatar, monsterHealth, monsterDiceRoll)

