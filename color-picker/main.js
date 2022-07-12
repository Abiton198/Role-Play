
function displayColors(colors){
let myColorsHtml = colors.map(color => {
    return `<div class="my-color" style="background-color: ${color.value}"></div>`
}).join('') //returns the color number values

console.log(myColorsHtml)

document.body.innerHTML = `<div class="my-colors">
${myColorsHtml} </div>` //returns the colors in html
}

/*
async function getColors(){
    let response = await fetch("https://api.noopschallenge.com/hexbot?count=5")
    let data = await response.json()
    let colors = data.colors
    console.log(data)

displayColors(colors)
}
getColors()*/

fetch("https://api.noopschallenge.com/hexbot?count=5")
.then(res => res.json())
.then(data => console.log(data))