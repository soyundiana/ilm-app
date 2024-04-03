function displayTemperature(response) {
  let temperatureElement = document.querySelector("#current-temperature");
  let temperature = Math.round(response.data.temperature.current);
  let cityElement = document.querySelector("#current-city");
  cityElement.innerHTML = response.data.city;
  temperatureElement.innerHTML = temperature;
getForecast(response.data.city);
}
function search(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");
  let city = searchInputElement.value;

  let apiKey = "3t6dd836d3b2360o01bbc44d5dfa374c";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayTemperature);
}

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  let formattedDay = days[day];
  return `${formattedDay} ${hours}:${minutes}`;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

let currentDateELement = document.querySelector("#current-date");
let currentDate = new Date();

currentDateELement.innerHTML = formatDate(currentDate);
function getForecast(city) {
  let apiKey = "3t6dd836d3b2360o01bbc44d5dfa374c";
  let apiUrl =`https://api.shecodes.io/weather/v1/current?lon={lon}&lat={lat}&khttps://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios(apiUrl).then(displayForecast);
console.log(apiUrl);
}

function displayForecast(response) {
  let forecastElement = document.querySelector("#forecast");
  let days = ["Thu", "Fri", "Sat", "Sun", "Mon", "Tue", "Wed"];
  let forecastHTML = "";

  days.forEach(function (day) {
    forecastHTML += `
      <div class="weather-forecast-week">
        <div class="row">
          <div class="col-2">
            <div class="weather-forecast-date">${day}</div>
            <img src="https://static-00.iconduck.com/assets.00/sunny-icon-2048x2048-atsm4a75.png" width="36"/>
            <div class="weather-forecast-temperatures">
              <span class="weather-forecast-temperature-max">18°</span>
              <span class="weather-forecast-temperature-min">11°</span>
            </div>
          </div>
        </div>
      </div>`;
  });

  forecastElement.innerHTML = forecastHTML;
}


displayForecast();
