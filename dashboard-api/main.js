
let keyWeather = '6ddd3954f3eca243f3bc57cd214fe38c' 
let author =   document.getElementById("author")
const cryptoTop = document.getElementById("crypto-top")
const currency = document.getElementById("currency")
const weather = document.getElementById("weather")
const motivation = document.getElementById("motivation")
const prayerTimes = document.getElementById("prayer-times")

/*BACKGROUND pictures */
fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature")
.then(res => res.json())
.then(data =>{
    document.body.style.backgroundImage = `url(${data.urls.full})`
    author.innerHTML = `By: ${data.user.name}`
   })
// use the default background image when error occurs
.catch( err => {
 document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1560008511-11c63416e52d?crop=entropy&
    cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTEwMjl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MjI4NDIxMTc&ixlib=rb-1.2.1&q=80&w=1080)`
   console.log(err)
    author.textContent = `By: Dodi Achmad`
}) 

/*Displaying Crypto currency of choice on live updates  dogecoin */
fetch('https://api.coingecko.com/api/v3/coins/bitcoin')
.then(res => res.json())
    
.then(data => {
    console.log(data)
    cryptoTop.innerHTML = ` 
     <img src= ${data.image.thumb} /> <br> ${data.developer_data.id} ` //displaying logo & name

     currency.innerHTML = `<p>  Current-Price: $ ${data.market_data.current_price.usd} </p>
     <p> High-Price: $ ${data.market_data.high_24h.usd} </p> <p> Low-Price: $ ${data.market_data.low_24h.usd} </p>`
   }) 
    .catch(err => console.log(err))

/*showing current live-time on page */
    function getCurrentTime(){      
        const date = new Date()
        document.getElementById("time").innerHTML = date.toLocaleTimeString("en-us", {timeStyle: "short"})
    }
    setTimeout(getCurrentTime, 1000) //setTimeout or setInterval
   
/*displaying current-weather */
//getting geo-position using API

  
//getting Geo-position using method */

navigator.geolocation.getCurrentPosition( position => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${keyWeather}`)
    .then(res => {
        if (!res.ok){
         throw Error ('weather data not available!')} //manually throwing error
        return res.json()})
    .then(data => {
        console.log(data)
        const urlImage = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
        weather.innerHTML =
        `<img src= ${urlImage} />
        <p class="weather-temp">${Math.round(data.main.temp)} ْ</p>
        <p class="weather-city">${data.name}</p>
       `
        
       })
    
    .catch(err => console.log(err))
})

/**MOTIVATIONAL QUOTES */
let quotes = []

fetch("https://type.fit/api/quotes?text&name")
.then(res => res.json())
.then(data => {console.log(data.splice(0, 50))
    
    for (i = 0; i < data.length; i++){
motivation.innerHTML = `${data[0].text} <br> (${data[0].author})`

}})
.catch(err => console.log(err))

fetch(`http://api.aladhan.com/v1/hijriCalendarByAddress?address=Port-Elizabeth,%20SouthAfrica&method=4&month=04&year=1443`)
.then(res => res.json())
.then(data => {
    console.log(data.timings)
prayerTimes.innerHTML = `<p> ${data.data.date} </p>   <p> ${data.data.timings} </p>`})
.catch(err => console.log(err))




/* =======ISSUES========

1. logo not displaying and name
2. current weather not displaying correct temperatures
3. motivational quotes not changing
4. data on prayer times not displaying 
*/






/*
# Resolved promises quiz

1. What is a promise (in your own words)?
A promise that an operation that normally takes a bit of time
will eventually finish running. I.O.U. (I owe you)

2. Which part of the code we have so far is a promise?
The fetch request returns a promise object.

3. What are the three states a promise can be in?
(1) Pending, (2) Resolved (fulfilled), (3) Rejected

4. What does it mean when a promise is "resolved" (or fulfilled)?
The task we wanted to perform finished successfully.

5. How do we tell the code to do something only AFTER a
   promise is resolved?
The use of .then() to bring response in json format. 
*/