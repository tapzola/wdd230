
const temp = document.getElementById("temp").textContent;
const windspeed = document.getElementById("wind-speed").textContent;
const windchill = document.getElementById("wind-chill");

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

windchill.textContent = calcWindChill(temp, windspeed);