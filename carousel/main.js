

const slides = document.getElementsByClassName("carousel-item") //bring the img from html
const totalSlides = slides.length
let slidePosition = 0

//bring the controlling buttons
document.getElementById("carousel-button-prev").addEventListener("click", moveToPrevSlide)
document.getElementById("carousel-button-next").addEventListener("click", moveToNextSlide)

//hiding all slides so that it displays only one 
function hideAllSlides(){
    
    for (let slide of slides){        
        slide.classList.remove("carousel-item-visible")
        slide.classList.add("carousel-item-hidden")
    }
}


// making other dots less visible than the current slide-dot

function hideAllIndicators (){

    for (let indicator of indicators){
        indicator.classList.remove("current-slide")
       indicator.classList.add("carousel-indicators-hidden")
    }
}
// move slide using the next slide button

    function moveToNextSlide(){
        hideAllIndicators ()
        hideAllSlides()
        moveDownCurrentSlide()
      
        if(slidePosition === totalSlides -1){
            slidePosition = 0
        }else{
            slidePosition ++
        }
        slides[slidePosition].classList.add("carousel-item-visible")
        indicators[indicatorPosition].classList.add("current-slide")
        
}   

// move slide using the previous button

function moveToPrevSlide(){
    hideAllIndicators ()
    hideAllSlides()
    moveDownCurrentSlide()
    
    if (slidePosition === 0) {
        slidePosition = totalSlides - 1
    } else{
        slidePosition --
    }
    slides[slidePosition].classList.add("carousel-item-visible")
    indicators[indicatorPosition].classList.add("current-slide")
  
}

// activating the dots to move with current slides

const indicators = document.getElementsByClassName("carousel-indicators")
let indicatorPosition = 0
const totalIndicators = indicators.length

function moveWithCurrentSlide() {
        
    if (indicatorPosition === 0){
        indicatorPosition = totalIndicators -1
    }else {
        indicatorPosition ++
    }
    indicators[indicatorPosition].classList.add("current-slide")
}

// move current dot with the slide

function moveDownCurrentSlide(){

    if(indicatorPosition === 0){
        indicatorPosition = totalIndicators -1
    } else{
        indicatorPosition --
    }
    indicators[indicatorPosition].classList.add("current-slide")
}


// indicator.classList.add("carousel-indicators-hidden")