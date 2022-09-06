const searchButton=document.getElementById("searchButton")
const place=document.getElementById("cityWeather")
const description=document.getElementById("description")
const humidity=document.getElementById("humidity")
const wind=document.getElementById("wind")
const temperature=document.getElementById("temp")




document.addEventListener("DOMContentLoaded",function(){
    searchButton.addEventListener("click",function(){
        let city=document.getElementById("search-bar").value;
        console.log(city);
        const apiKey="06d12ce8edb650299e20a27648cccec7";
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
        .then((response)=>response.json())
        .then((data)=>displayWeather(data))
    })
});

function  displayWeather(data){
    console.log(data)
place.textContent=` Weather in ${data.name}`
description.textContent=data.weather[0].description;
humidity.textContent=data.main.humidity;
wind.textContent=data.wind.speed;
temperature.textContent= data.main.temp;
} 

// document.querySelector(".search button").addEventListener("click",function(){
//     weather.search();
// })
// document.querySelector(".search-bar").addEventListener("keyup",function(event){
//     if(event.key=='Enter'){
//         weather.search();
//     }
// });
// document.querySelector(".search button").addEventListener("mousehover",function(){
//     return search();
// })
