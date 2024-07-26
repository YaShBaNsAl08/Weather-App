const API_KEY = "9feb59986a8103ea7b22377259b63da7";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchInputBox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".cloud");
async function weather_city(city) {
    const response = await fetch(BASE_URL + city + `&appid=${API_KEY}`);
    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
        var data = await response.json();
        document.getElementById("temp").innerHTML = Math.round(data.main.temp) + "\u2103";
        document.getElementById("city").innerHTML = data.name;
        document.getElementById("wind").innerHTML = data.wind.speed + "km/h";
        document.getElementById("humidity").innerHTML = data.main.humidity + "%";
        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "cloud.png";
        }
        else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "rain.png";
        }
        else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "drizzle.png";
        }
        else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "mist.png";
        }
        else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "clear.png";
        }
        else if (data.weather[0].main == "Snow") {
            weatherIcon.src = "snow.png";
        }
        document.querySelector(".error").style.display = "none";
        document.querySelector(".weather").style.display = "block";
    }
}
searchbtn.addEventListener("click", () => {
    weather_city(searchInputBox.value);
})