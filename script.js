const searchButton=document.getElementById("searchButton")
const place=document.getElementById("cityWeather")
const description=document.getElementById("description")
const humidity=document.getElementById("humidity")
const wind=document.getElementById("wind")
const temperature=document.getElementById("temp")
const weather=document.getElementById("weather")
let city=document.getElementById("search-bar");
document.addEventListener("DOMContentLoaded",function(){
    searchButton.addEventListener("click",fetchData)
});
function fetchData(){
    let searchCity=city.value;
    const apiKey="06d12ce8edb650299e20a27648cccec7";
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=${apiKey}`)
    .then((response)=>response.json())
    .then((data)=>displayWeather(data))   
    console.log (city.value);
}
function  displayWeather(data){
    console.log(data)
    console.log(weather);
     weather.style.visibility='visible';
place.textContent=` Weather in ${data.name}`
description.textContent=`Description:${data.weather[0].description}`;
humidity.textContent=`Humidity:${data.main.humidity}`;
wind.textContent=`Wind:${data.wind.speed}`;
temperature.textContent= `Temperature:${data.main.temp}`;
} 

document.addEventListener("keydown",function(event){
    if(event.key=='Enter'){
        fetchData();
    }
});
