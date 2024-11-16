const inputB = document.querySelector(".hed-inpClass");
const searchbtn = document.querySelector(".btn");

const wImg = document.querySelector(".wImg");

const temp = document.querySelector(".show");

const des = document.querySelector(".des");

const humidity = document.querySelector(".hum");

const wSpeed = document.querySelector(".wSpeed");

const errorImg = document.querySelector(".loaction-not-found") ;

const wBody = document.querySelector(".section") ;

async function checkWeather(city) {
  const api_key = "1d4944689c48118cbad734bb1fe8c9f1";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
  const wData = await fetch(`${url}`).then((response) => response.json());
  // console.log(wData);

  if(wData.cod ==='404') {
    errorImg.style.display = "flex" ;
    wBody.style.display  = "none" ;
    console.log("error") ;
    return ;
  }
  errorImg.style.display = "none" ;
  wBody.style.display = "flex" ;


  temp.innerHTML = `${Math.round(wData.main.temp - 273.15)}°C`;

  des.innerHTML = `${wData.weather[0].description}`;
  // console.log(wData);

  humidity.innerHTML = `${wData.main.humidity}%`;

  wSpeed.innerHTML = `${wData.wind.speed}Km/H`;

  switch (wData.weather[0].main) {
    case "Clouds":
      wImg.src = "./img.png";
      break;
    case "Clear":
      wImg.src = "./clear.webp";
      break;
    case "Rain":
      wImg.src = "./rain.png";
      break;
    case "Mist":
      wImg.src = "./mist.jpeg";
      break;
    case "Snow":
      wImg.src = "./snow.webp";
      break;
  }
}

searchbtn.addEventListener("click", () => {
  checkWeather(inputB.value);
});
