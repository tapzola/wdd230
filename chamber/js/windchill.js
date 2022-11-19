// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const currentWindSpeed =  document.querySelector('#windspeed');
const windchill = document.querySelector('#windchill');

const url = "//api.openweathermap.org/data/2.5/weather?q=Bulawayo&appid=674d6426e0649e199435e5bbfea340aa&units=imperial";


function displayResults(weatherData) {
    let temperature = weatherData.main.temp;
    let windSpeed = weatherData.wind.speed;

    const calcWindChill = (temp, windspeed) => {
        if(temp > 10 || windspeed < 4.8){
            return "N/A";
        } else {
            temp = (temp * 9/5) + 32;
            windspeed = windspeed / 1.609;
    
            let windchill = 35.75 + 0.6215 * temp - 35.75 * windspeed ** 0.16 + 0.4275 * temp * windspeed ** 0.16
            windchill = (windchill - 32) * 5/9;
            return `${windchill.toFixed(2)}°C`;
        }
    
    };
    windchill.textContent = calcWindChill(temperature, windSpeed);

    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
    currentWindSpeed.innerHTML = `<strong>${weatherData.wind.speed}</strong>`;


    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
  
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.innerHTML = `<strong>${desc.toUpperCase()}</strong>`;
  }


async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // this is for testing the call
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
  apiFetch();











