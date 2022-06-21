let colorArray = []

function renderColors(){
let colorHex = document.getElementById("color-hex").value.slice(1) //input field
let colorMode = document.getElementById("color-mode").value //selector
//document.getElementById("copy-info").textContent = "Click the code to copy "
document.getElementById("title").style.color = `#${colorHex}` //to change title color accordingly 

fetch(`https://www.thecolorapi.com/scheme?hex=${colorHex}&mode=${colorMode}&count=5`, {})
.then(response => response.json())
.then(data =>  {
    for (let i=0; i < data.colors.length; i++){
        colorArray.push(data.colors[i].hex.value)
    }
const myColors = colorArray.map(color =>{ // putting data to html page
            return      `<div>
                            <div class="colors" style="background:${color}"></div>
                            <input class="cod-color" size="7" value=${color}>
                        </div>`
            
}) 







document.getElementById("color-schemes").innerHTML = myColors.join('') //rendering the page

})
}
 renderColors() 

 document.getElementById("colors-form").addEventListener("submit", function(e){
        colorArray = []
        e.preventDefault()
        renderColors()
    })
   
