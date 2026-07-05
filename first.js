const searchInput = document.querySelector("#search-input");

function changeDetails(response){
    let weatherImage=document.querySelector("#image-icon");
    let temp=document.querySelector("#weather-temperature");
    let cityName=document.querySelector("#weather-city");
    let humidity=document.querySelector("#humidity-temp");
    let windSpeed=document.querySelector("#windspeed-temp");
    weatherImage.src=response.data.condition.icon_url;
    temp.innerHTML=`${Math.round(response.data.temperature.current)}°C`;
    cityName.innerHTML=response.data.city;
    humidity.innerHTML=`${response.data.temperature.humidity}%`;
    windSpeed.innerHTML=`${response.data.wind.speed}km/h`;
}

function getWeatherApi(searchCityName){
    if(searchCityName===""){
        alert("Enter any city");
    }else{
        let apiKey="fa802d0et31047o097e3a46943abb4fe";
        let apiUrl=`https://api.shecodes.io/weather/v1/current?query=${searchCityName}&key=${apiKey}`;
        axios.get(apiUrl).then(changeDetails);
    }
}
getWeatherApi("paris");


const submitButton = document.querySelector("#submit-button");
submitButton.addEventListener("click",()=>{
    getWeatherApi(searchInput.value);
});
