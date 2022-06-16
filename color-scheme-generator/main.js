
fetch("http://api.creativehandles.com/getRandomColor")
.then(res => res.json())
.then(data => {
    let html = ""
    const colorArr = document.getElementById("colors").value
    document.getElementById("choose-color").addEventListener('click', function(){
        html += `
        <div class="color"> ${}<div>`
    })

    console.log(data)})


    // decide how the html is going to be returned as color after click the button