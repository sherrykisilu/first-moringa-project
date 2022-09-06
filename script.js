function fetchWeather (city){
    let city=document.getElementsByClassName("search-bar").value.trim();
    console.log(city);
    const apiKey="06d12ce8edb650299e20a27648cccec7";
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
    .then((response)=>response.json())
    .then((data)=>console.log(data))
}
function  displayWeather(data){
    const{name}=data;
    const {icon,description}=data.weather[0];
    const{temp,humidity}=data.main;
    const{speed}=data.wind;
    console.log(name,icon,description,temp,humidity,speed)
    document.querySelector(".city").innerText="Weather in "+name;
    document.querySelector(".icon").src="https://openweathermap.org/img/wn/" + icon +"01n@2x.png"
    document.querySelector(".description").innerText=description;
    document.querySelector(".temp").innerText=temp+"°C";
    document.querySelector(".humidity").innerText=`Humidity:${humidity}%`;
    document.querySelector(".wind").innerText="wind speed:"+speed+"km/hr";
    document.querySelector(".weather").classList.remove("loading");
    document.body.style.backgroundImage="url('https:source.unsplash.com/1600*900/?"+name+"')"
}
function search(){
    document.querySelector(".search-bar").value;
}
document.querySelector(".search button").addEventListener("click",function(){
    weather.search();
})
document.querySelector(".search-bar").addEventListener("keyup",function(event){
    if(event.key=='Enter'){
        weather.search();
    }
});
ocument.querySelector(".search button").addEventListener("mousehover",function(){
    return search();
})
