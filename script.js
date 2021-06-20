// result div hidden in the initial state

const APP_KEY = "6bad85b265b91bfc99a1faadf8faab09";

$(".weather-result").hide();

const getWeather = async () => {
    let cityInp = document.getElementById("cityInp").value;
    let data = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${cityInp}&appid=${APP_KEY}`
    );
    let jsonWeatherdata = await data.json();

    let city = jsonWeatherdata.name;
    let { country, sunrise, sunset } = jsonWeatherdata.sys;
    let { main, icon } = jsonWeatherdata.weather[0];
    let { temp } = jsonWeatherdata.main;
    let { dt: date } = jsonWeatherdata;
    date = new Date(date * 1000).toLocaleDateString();
};
