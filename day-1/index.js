const searhBox = document.querySelector(".search input");
const searhBttn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

const apiKey = "825270d22434d44bd4a36700f7fcf798";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

async function checkWeather(city){
    const respose = await fetch(apiUrl + city + `&appid=${apiKey}`);
    let data = await respose.json();

    console.log(data);

    //main app updation part begins
    document.querySelector(".city").innerHTML = data.name; //it will update the city name
    //the Math.round will roundoft the celsious value
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "&deg;c"; //it will update the tempreture
    document.querySelector(".humidity").innerHTML = data.main.humidity + " %"; //it will update the humidity
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    //code to update the icons
    if(data.weather[0].main == "Clouds")
    {
        weatherIcon.src = "image/cloudy.png";
    }
    else if(data.weather[0].main == "Clear")
    {
        weatherIcon.src = "image/clear.png";
    }
    else if(data.weather[0].main == "Rain")
    {
        weatherIcon.src = "image/rain.png";
    }
    else if(data.weather[0].main == "Haze")
    {
        weatherIcon.src = "image/haze.png";
    }
    else if(data.weather[0].main == "Drizzle")
    {
        weatherIcon.src = "image/precipitation.png";
    }
    else if(data.weather[0].main == "Thunderstrom")
    {
        weatherIcon.src = "image/thunder.png";
    }
}

searhBttn.addEventListener("click", ()=>{
    checkWeather(searhBox.value);
})