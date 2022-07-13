
function displayColors(colors){
let myColorsHtml = colors.map(color => {
    return `<div class="my-color" style="background-color: ${color.value}"></div>`
}).join('') //returns the color number values

console.log(myColorsHtml)

document.body.innerHTML = `<div class="my-colors">
${myColorsHtml} </div>` //returns the colors in html
}

// fetch colours from API according to quantity /count=5
async function getColors(){
    let response = await fetch(`GET https://api.noopschallenge.com/hexbot?count=5`)
    let data = await response.json()
    let colors = data.colors
    console.log(data)

displayColors(colors)
}
getColors()
