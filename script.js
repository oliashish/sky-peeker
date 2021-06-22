const APP_KEY = "6bad85b265b91bfc99a1faadf8faab09";

// getting all element access that are required

const search = document.getElementById("search");

const weatherResult = document.getElementById("weatherResult");
const tempt = document.getElementById("tempt");

const weatherCard = document.getElementById("weatherCard");
const dateCurrent = document.getElementById("dateCurrent");
const mainWeather = document.getElementById("mainWeather");
const tmpt = document.getElementById("tmpt");
const cty = document.getElementById("cty");
const cntry = document.getElementById("cntry");
const img = document.getElementById("img");
const snrs = document.getElementById("snrs");
const snst = document.getElementById("snst");

//initally result containers are hidden

weatherResult.style.visibility = "hidden";
tempt.style.visibility = "hidden";

if (weatherResult.style.visibility == "hidden") {
    weatherCard.style.justifyContent = "center";
}

search.addEventListener("click", () => {
    getWeather();
});

const getWeather = async () => {
    let cityInp = document.getElementById("cityInp").value;
    let data = await fetchData(cityInp);

    renderData(data);
};

const fetchData = async (cityInp) => {
    // api call

    let data = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${cityInp}&appid=${APP_KEY}`
    );

    let jsonWeatherdata = await data.json();
    return jsonWeatherdata;
};

const renderData = (data) => {
    //destructing data

    let city = data.name;
    let { country, sunrise, sunset } = data.sys;
    let { main, icon } = data.weather[0];
    let { temp } = data.main;
    let { dt: date } = data;
    date = new Date(date * 1000).toLocaleDateString();
    sunrise = new Date(sunrise * 1000).toLocaleTimeString();
    sunset = new Date(sunset * 1000).toLocaleTimeString();

    // from kelvin to celsius
    temp = temp - 273.15;
    temp = temp.toFixed(1);

    weatherResult.style.visibility = "visible";
    tempt.style.visibility = "visible";

    if (weatherResult.style.visibility == "visible") {
        weatherCard.style.justifyContent = "space-around";
    }

    cty.innerHTML = city;
    tmpt.innerHTML = temp + `&deg;C`;
    dateCurrent.innerHTML = date;
    cntry.innerHTML = country;
    mainWeather.innerHTML = main;
};
