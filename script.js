const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`
const apikey = `4c7f4a8680bab6175bf6ec704aeae13b`
const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")
const WhetherImg = document.querySelector(".Whether-img")
const body = document.querySelector(".Wether")

async function check(city) {
  fetch(weatherUrl + city + `&appid=${apikey}`)
    .then(response => {
      if (response.status == 404) {
        body.style.display = "none"
      }
      return response.json()

    }).then(data => {

      document.querySelector(".city").innerHTML = data.name
      document.querySelector(".Temp").innerHTML = ` <h1>${Math.floor(data.main.temp)}°c</h1>`
      const detail = document.querySelectorAll(".one")
      detail[0].innerHTML = `<p>${data.main.humidity}</p>`
      detail[1].innerHTML = `<p>${data.wind.speed}</p>`

      if (data.weather[0].main === "Clouds") {
        WhetherImg.src = "clouds.png"
      }
      if (data.weather[0].main === "Haze") {
        WhetherImg.src = "clouds.png"
      }
      if (data.weather[0].main === "Clear") {
        WhetherImg.src = "clear.png"
      }
      if (data.weather[0].main === "Rain") {
        WhetherImg.src = "rain.png"
      }
      if (data.weather[0].main === "Drizzle") {
        WhetherImg.src = "drizzle.png"
      }
      if (data.weather[0].main === "Mist") {
        WhetherImg.src = "Mist.png"
      }
      if (data.weather[0].main === "Snow") {
        WhetherImg.src = "Snow.png"
      }
    })
}

searchBtn.addEventListener("click", () => {
  check(searchBox.value)
  body.style.display = "flex"
})
