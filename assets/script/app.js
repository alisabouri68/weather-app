const city = document.querySelector("#city"),
  deg = document.querySelector("#deg"),
  weatherdes = document.querySelector("#weatherdes"),
  uct = document.querySelector("#uct"),
  time = document.querySelector("#time"),
  max = document.querySelector("#max"),
  min = document.querySelector("#min"),
  locationBtn = document.querySelector("#location-btn"),
  searchc = document.querySelector(".searchc"),
  searchl = document.querySelector("#search-l"),
  closeBtn = document.querySelector("#close-btn"),
  searchbox = document.querySelector("#search-c");
  containerC = document.querySelector(".container-c");
let valueInput = "";
let valueInput2 = "";
function addCard(a,b,c,d,e) {
  let div = document.createElement("div");
  div.classList.add("backgroundimg", "gap-3", "flex", "flex-col", "relative");
  div.innerHTML = `
  <div>
              <span class="text-BEB4FE text-6xl font-extrabold">${a}</span>
            </div>
            <div class="flex gap-3">
              <div class="text-CCCCCC text-3xl font-semibold shadow-2xl opacity-50"><span>H:${b} </span></div>
              <div class="text-CCCCCC text-3xl font-semibold shadow-2xl opacity-50"><span>L:${c}</span></div>
            </div>
            <div><span class="text-FFFFFF text-4xl font-bold">${d}</span></div>
            <div class="absolute -top-10 -right-20 ">
              <img src=" https://openweathermap.org/img/wn/${e}@4x.png" alt="">
            </div>
  `;
  containerC.appendChild(div)
}
function dates(datadt) {
  const date = new Date(datadt * 1000);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  return `${year}-${month}-${day} ${hours}:${minutes}`
}
 function fet(apiUrl) {
  fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => {
    const temperature = (data.main.temp - 273.15).toFixed(0);
    const weatherDescription = data.weather[0].description;
    const icon = data.weather[0].icon;
    const mx = (data.main.temp_max - 273.15).toFixed(0) + "°";
    const mn = (data.main.temp_min - 273.15).toFixed(0) + "°";
    const cityname = data.name;
    min.innerHTML = mn
    max.innerHTML = mx
    uct.innerHTML = dates(data.dt) ;
    city.innerHTML = cityname;
    deg.innerHTML = temperature + "°";
    weatherdes.innerHTML = weatherDescription;
  addCard(temperature,mx,mn,cityname,icon)
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
}
function fetv(apiUrl) {
  fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => {
    const temperature = (data.main.temp - 273.15).toFixed(0);
    const weatherDescription = data.weather[0].description;
    const mx = (data.main.temp_max - 273.15).toFixed(0) + "°";
    const mn = (data.main.temp_min - 273.15).toFixed(0) + "°";
    const cityname = data.name;
    min.innerHTML = mn
    max.innerHTML = mx
    uct.innerHTML = dates(data.dt) ;
    city.innerHTML = cityname;
    deg.innerHTML = temperature + "°";
    weatherdes.innerHTML = weatherDescription;
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
}
window.addEventListener('load',lonlot)
 searchbox.addEventListener("keyup", (e) => {
  if (e.keyCode == 13 || e.which == 13) {
    valueInput = e.target.value;
    xxx(valueInput)
    e.target.value = ""
   }
});
searchl.addEventListener("keyup", (e) => {
  if (e.keyCode == 13 || e.which == 13) {
    valueInput2 = e.target.value;
    xxx(valueInput2);
    e.target.value=""
  }
});
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
      },
      { enableHighAccuracy: true }
    );
  } else {
    console.error("Geolocation is not supported by this browser.");
  }
}

function fetchLocLat(lat, lon) {
  const apiKey = "ef75e629c69e7b307a0cbabfa7f67968";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
  fetv(apiUrl)

}
 function xxx(a) {
  const apiKey = "ef75e629c69e7b307a0cbabfa7f67968";
  const q = a;
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${q}&appid=${apiKey}`;
    fet(apiUrl)
}
function tooooop(a) {
  searchc.style.top = `${a}%`;
}
locationBtn.addEventListener("click", () => tooooop("0"));
closeBtn.addEventListener("click", () => tooooop("200"));
