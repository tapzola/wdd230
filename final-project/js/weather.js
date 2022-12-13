const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const humidity = document.querySelector('#humidity');

const url = "https://api.openweathermap.org/data/2.5/weather?lat=33.1581&lon=-117.3506&appid=674d6426e0649e199435e5bbfea340aa&units=imperial";


function displayResults(weatherData) {
    

    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
    humidity.innerHTML = `<strong>${weatherData.main.humidity}</strong>`;


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


