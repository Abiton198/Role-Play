
async function getAPIs(){
    let response = await fetch('https://api.publicapis.org/entries')
    let data = response.json()
    return data
}

function getAPIHtml(myAPI){
return `
<div class="my-api">
    <div class="my-api-name">
        <a href="{myAPI.Link}" target="_blank"> 
        ${myAPI.API} (${myAPI.Category})
        </a></div>
    <div class="my-api-description">${myAPI.Description}</div>
    <div class="my-api-auth">Auth: ${myAPI.Auth}</div>
    <div class="my-api-https">HTTPS? ${myAPI.HTTPS}</div>
</div>`
}

// display my APIs
function displayAPIs(myAPIs){
    myAPIs = myAPIs.entries
    document.body.innerHTML = `
    <div class="my-apis">
        ${myAPIs.map(getAPIHtml).join('')}
    </div>`
}
getAPIs()
         .then(displayAPIs)
         .catch(e => console.log(`Error: ${e}`))

         /*====NOTES===
         
         1. .map() == displays all items from the selected object/array/ takes a callback function 
         2. <a> == linking the API to the main source*/