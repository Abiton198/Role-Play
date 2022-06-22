document.getElementById("new-deck").addEventListener('click', function(){
    fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
    .then(res => res.json())
    .then(data => console.log(data))
})