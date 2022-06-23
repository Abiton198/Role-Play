let deck

document.getElementById("new-deck").addEventListener('click', function(){
    fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
    .then(res => res.json())
    .then(data =>{
        data = data.deck_id
    console.log(data) }) 
})