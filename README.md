# ⛅ Today's Weather

A simple web app that shows today's current weather for any city you search — temperature, conditions, humidity, and wind speed — powered by a weather API.

## ✨ Features

- Search any city and get today's current weather
- Displays temperature, description, humidity, and wind speed
- Shows a weather icon matching current conditions
- Clean, responsive, single-page interface

## 📁 File Structure

```
todays-weather/
│
├── index.html
├── style.css
└── script.js
```

## 🚀 Getting Started

### 1. Clone or Download

```
git clone https://github.com/your-username/todays-weather.git
```

Or simply download the project as a ZIP and extract it.

### 2. Get an API Key

1. Go to [https://openweathermap.org/api](https://openweathermap.org/api) (or your preferred weather API provider)
2. Sign up / log in and generate your personal API key

### 3. Add Your API Key

Open `src/script.js` and replace the placeholder with your key:

```js
const apiKey = "YOUR_WEATHER_API_KEY";
```

### 4. Run the Project

Just open `index.html` in your browser — no server or build step needed.

## 🛠️ How It Works

1. The user types a city name into the search field.
2. On submit, `script.js` sends a request to the weather API endpoint with the city name and your API key.
3. The API returns today's current weather data for that city.
4. The temperature, condition, humidity, wind speed, and icon are displayed on the page.

Example fetch request used in `script.js`:

```js
let apiKey = "YOUR_WEATHER_API_KEY";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(function (response) {
  displayWeather(response.data);
});

function displayWeather(data) {
  document.querySelector("#city").innerHTML = data.name;
  document.querySelector("#temperature").innerHTML = Math.round(data.main.temp);
  document.querySelector("#description").innerHTML = data.weather[0].description;
  document.querySelector("#humidity").innerHTML = data.main.humidity;
  document.querySelector("#wind-speed").innerHTML = Math.round(data.wind.speed);
}
```

## 🧰 Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- Weather API (e.g. OpenWeatherMap)
- [Axios](https://axios-http.com/) (for API requests)


## 🙌 Acknowledgments

- Built as part of a coding challenge
- Weather data provided by the chosen weather API
