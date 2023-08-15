const apiKey = "e31fe2533f76f7405dbe9b5caed9ea21"
const apiURL = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");


async function checkWeather(city){
    const response = await fetch(apiURL +  city + `&appid=${apiKey}`);

if(response.status === 404){
    document.querySelector(".error").computedStyleMap.display = "block";
    document.querySelector(".weather").computedStyleMap.display = "none";

}else{
    const data = await response.json();


    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "℃";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".Wind").innerHTML = data.wind.speed + "km/h";


    if (data.weather[0].main == "Clouds"){
        weatherIcon.src= "./images/clouds.png"
      }
      else if(data.weather[0].main == "Clear"){
        weatherIcon.src= "./images/clear.png"

      }
      else if(data.weather[0].main == "Rain"){
        weatherIcon.src= "./images/rain.png"

      }
      else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src= "./images/drizzle.png"

     }
     else if(data.weather[0].main == "Mist"){
        weatherIcon.src= "./images/mist.png"

         }       
        
        }   
}
 

searchBtn.addEventListener("click" , () =>{
    checkWeather(searchBox.value);
});
