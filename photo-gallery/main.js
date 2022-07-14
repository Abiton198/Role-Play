

async function getPhotos() { 
   let response = await fetch('https://picsum.photos/id/1/100/100')
   let photos = await response.json() 
return photos
}

getPhotos().then(photos=>{
    let myPhotosHtml = photos.map(photo=>{
        return `<img src="${photo.id} alt="${photo.title}"/>` 
    })
    console.log(myPhotosHtml)
    document.body.innerHTML = `<div class="my-photos">${myPhotosHtml}</div>`
})


