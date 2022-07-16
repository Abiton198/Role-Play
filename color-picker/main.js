
function displayColors(colors){
let myColorsHtml = colors.map(color => {
    return `<div class="my-color" style="background-color: ${color.value}">${color.value}</div>`
}).join('') //returns the color number values & the colors

console.log(myColorsHtml)

document.body.innerHTML = `<div class="my-colors">
${myColorsHtml} </div>` //returns the colors in html
}

// fetch colours from API according to quantity /count=100
async function getColors(){
    let response = await fetch(`https://apis.scrimba.com/hexcolors?count=100`)
    let data = await response.json()
    let colors = data.colors
    console.log(data)

displayColors(colors)
}
getColors()

/*
`https://api.noopschallenge.com/hexbot?count=5`
https://apis.scrimba.com/hexcolors/*/