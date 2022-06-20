let colorsArray = []
seedColor = document.getElementById("seed-color") //input field
chooseColor = document.getElementById("choose-color") //button
colors = document.getElementById("colors") //container

fetch(`https://www.thecolorapi.com/scheme?hex=${seedColor}&mode=${colorMode}&count=5`, {})
.then(response => response.json())
.then(data =>  {
    console.log(data)
const html = data.color
colors.innerHTML = `<div  id="display1">${html}</div>`
document.getElementById("display1").style.background = color 
console.log(html)
})
  //  color = data['color']  )


/*
function generateRandomColors(){
    let colorCode = '0123456789ABCDEF'
    let color = data['color']
       for (let i = 0; i < 6; i++){
        color += colorCode[Math.floor(Math.random() * 16)]
    }
    return color
}

chooseColor.addEventListener('click', function(){
colors = colors
colors.innerHTML = `
<div  id="display1">${color}</div>
<div id="display2">${color}</div>
<div id="display3">${color}</div>
<div id="display4">${color}</div>
<div id="display5">${color}</div>`

})



    // decide how the html is going to be returned as color after click the button===http://api.creativehandles.com/getRandomColor====805am

/*

function renderColor(){
    let html = ""
for (let color of colorsArray){ //function to display what has been returned as data
 html +=    
display1.style.backgroundColor = color
}
display1.innerHTML = html 
}




seedColor = document.getElementById("seed-color") //input field
chooseColor = document.getElementById("choose-color") //button
colors = document.getElementById("colors")
chooseColor.addEventListener('click', function(){
function generateRandomColors(){
    let colorCode = '0123456789ABCDEF'
    let color = '#'
    for (let i = 0; i < 6; i++){
        color += colorCode[Math.floor(Math.random() * 16)]
    }
    //return color

colors.innerHTML = `
<div  id="display1">${color}</div>
<div id="display2">${color}</div>
<div id="display3">${color}</div>
<div id="display4">${color}</div>
<div id="display5">${color}</div>`
}
generateRandomColors()
}
)

// try generate random fcolors function 0018

/*
  for(let i = 0; i < color; i++){
            let color = data["color"]
    
            display1.style.backgroundColor = color
            display1.innerHTML = color
            
            display2.style.backgroundColor = color
             display2.innerHTML = color
        }



        "https://www.thecolorapi.com/id?hex=0047AB&rgb=0,71,171&hsl=215,100%,34%&cmyk=100,58,0,33&format=html"
*/