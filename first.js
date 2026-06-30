function changeDetails(response){
    let weatherImage=document.querySelector("#image-icon");
    let temp=document.querySelector("#weather-temperature");
    let cityName=document.querySelector("#weather-city");
    let humidity=document.querySelector("#humidity-temp");
    let windSpeed=document.querySelector("#windspeed-temp");
    weatherImage.src=response.condition.icon_url;
    temp.innerHTML=`${Math.round(response.temperature.current)}°C`;
    cityName.innerHTML=response.city;
    humidity.innerHTML=`${response.temperature.humidity}%`;
    windSpeed.innerHTML=`${response.wind.speed}km/h`;
}
function searchCity(response){
    console.log(response.data);
    changeDetails(response.data);
}

function getWeatherApi(searchCityName){
    let apiKey="fa802d0et31047o097e3a46943abb4fe";
    let apiUrl=`https://api.shecodes.io/weather/v1/current?query=${searchCityName}&key=${apiKey}`;
    axios.get(apiUrl).then(searchCity);
    
}
getWeatherApi("paris");