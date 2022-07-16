

async function getPhotos() {
    let response = await fetch("photo.json") //fetching data from the created JSON file
    let photos = await response.json()
    return photos
}

function getMyPhotosHtml(photos){
    let myPhotosHtml = photos.map(photo => {
        return `<img src="https://picsum.photos/id/${photo.id}/100/100" />` //100/100 = size of the image
    }).join('')


   return `<div class="my-photos">${myPhotosHtml}</div>` //displaying in the browser
   
}
// creating a <div> that will hold my selected image 
getPhotos().then(photos => {
    let myPhotosHtml = getMyPhotosHtml(photos)
    document.body.innerHTML = `<div class="my-gallery"> 
            <img id="my-selected-photo"  class="my-photo" 
            src="https://picsum.photos/id/2/200/200"/>
            ${myPhotosHtml}
            </div>`

    let myPhotoImgs = Array.from(document.getElementsByClassName("my-photo"))
    //function to enable selected photo to display large when clicked
    myPhotoImgs.forEach(photoImg => {
        photoImg.addEventListener("click", e => { 
            console.log(e)  
            let selectedPhotoSrc = photoImg.src.substr(0, photoImg.src.length - 7) + `/200/200` //substr() = takes 2 par to determine the length of a string(letters)
            let selectedPhoto = document.getElementById("my-selected-photo")
            selectedPhoto.src = selectedPhotoSrc
            selectedPhoto.style.display = "inline"
     })
    })
})

