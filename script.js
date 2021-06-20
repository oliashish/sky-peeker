// result div hidden in the initial state

const APP_KEY = "6bad85b265b91bfc99a1faadf8faab09";

$(".weather-result").hide();
$(".temp").hide();

const getWeather = async () => {
    let cityInp = document.getElementById("cityInp").value;
    let data = await fetchData(cityInp);

    renderData(data);
};

fetchData = async (cityInp) => {
    let data = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${cityInp}&appid=${APP_KEY}`
    );

    let jsonWeatherdata = await data.json();
    return jsonWeatherdata;
};

const renderData = (data) => {
    let city = data.name;
    let { country, sunrise, sunset } = data.sys;
    let { main, icon } = data.weather[0];
    let { temp } = data.main;
    let { dt: date } = data;
    date = new Date(date * 1000).toLocaleDateString();
    sunrise = new Date(sunrise * 1000).toLocaleTimeString();
    sunset = new Date(sunset * 1000).toLocaleTimeString();

    $(".weather-result").show();
    $(".temp").show();

    $(".city").text(city);
    $(".country").text(country);
    $(".main-weather").text(main);
    $(".icon").text(icon);
    $(".temperature").text(temp);
    $(".sunrise").text(sunrise);
    $(".sunset").text(sunset);
    $(".date").text(date);
};
