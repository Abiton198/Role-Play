

/*1. the fetch() is an AIP brings the data from a selected source and convert it to javascript - json
2. .then will assist to get response to and from he source
3. getElementById - getting the data from the dom/json  */

document.getElementById("get-idea").addEventListener('click', ()=> {
fetch("https://apis.scrimba.com/bored/api/activity")
.then(response => response.json())
.then(data => {   
        document.getElementById("random-ideas").textContent = data.activity
    })
})
