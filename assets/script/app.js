const city = document.querySelector("#city");
const deg = document.querySelector("#deg");
const weatherdes = document.querySelector("#weatherdes");
const uct = document.querySelector("#uct");
const time = document.querySelector("#time");
const max = document.querySelector("#max");
const min = document.querySelector("#min");
function lonlot() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;
        console.log(`Latitude: ${lat}, Longitude: ${lon}`);
        fetchLocLat(lat, lon);
      },
      (error) => {
        console.error("Error getting location:", error);
      }
    );
  } else {
    console.error("Geolocation is not supported by this browser.");
  }
}
function fetchLocLat(lat, lon) {
  const apiKey = "ef75e629c69e7b307a0cbabfa7f67968";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const temperature = (data.main.temp - 273.15).toFixed(0);
      const weatherDescription = data.weather[0].description;
      min.innerHTML = (data.main.temp_min - 273.15).toFixed(0) + "°";
      max.innerHTML = (data.main.temp_max - 273.15).toFixed(0) + "°";
      //   const weatherDescription = data.weather[0].description;
      //   const timexv =
      //   const maxxv =
      //   const minxv =
      const date = new Date(data.dt * 1000);

      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const day = date.getDate();
      const hours = date.getHours();
      const minutes = date.getMinutes();
      const seconds = date.getSeconds();
      uct.innerHTML = `${year}-${month}-${day} ${hours}:${minutes}`;
      city.innerHTML = data.name;
      deg.innerHTML = temperature + "°";
      weatherdes.innerHTML = weatherDescription;
      console.log(`Temperature: ${temperature}°`);
      console.log(`Weather: ${weatherDescription}`);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}
lonlot();




