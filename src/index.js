// Get Date

function formatDate(date) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let now = new Date();
  let currentDay = days[now.getDay()];
  let currentDate = now.getDate();
  let currentMonth = months[now.getMonth()];
  let currentHours = now.getHours();
  let currentMinutes = now.getMinutes();

  let formattedDate = document.querySelector(".date");
  formattedDate.innerHTML = `${currentDay} ${currentDate} ${currentMonth} ${currentHours}:${currentMinutes}`;
}

formatDate();

// Get City & Temperature

function showTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  let displayCurrentTemp = document.querySelector(".current-temperature");
  displayCurrentTemp.innerHTML = `${temperature}`;

  let currentCity = response.data.name;
  let displayCurrentCity = document.querySelector(".city");
  displayCurrentCity.innerHTML = `${currentCity}`;
}

function searchCity(event) {
  event.preventDefault();

  let currentCity = document.querySelector(".search");

  let apiKey = "c5f0e59acac64258bb92ed027d20c68f";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${currentCity.value}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(showTemperature);

  let displayCurrentCity = document.querySelector(".city");
  displayCurrentCity.innerHTML = `${currentCity.value}`;
}

let searchForm = document.querySelector(".search-form");
searchForm.addEventListener("submit", searchCity);

function searchCurrentLocation(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let apiKey = "c5f0e59acac64258bb92ed027d20c68f";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(showTemperature);
}

function getLocation() {
  navigator.geolocation.getCurrentPosition(searchCurrentLocation);
}

let clickButton = document.querySelector("button");
clickButton.addEventListener("click", getLocation);

function showDefaultTemperature() {
  let currentCity = "Sydney";
  let apiKey = "c5f0e59acac64258bb92ed027d20c68f";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${currentCity}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(showTemperature);
}

showDefaultTemperature();
