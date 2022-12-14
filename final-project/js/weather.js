const d = new Date();
    const weekday = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    function checkDay(day){
      if(day + d.getDay() > 6){
        return day + d.getDay() - 7;
      }
      else{
        return day + d.getDay();
      }
    }
    for(let i=0; i<3;i++){
      document.getElementById("day"+(i+1)).innerHTML = weekday[checkDay(i)];
    }



const url = "https://api.openweathermap.org/data/2.5/forecast?lat=33.1581&lon=-117.3506&appid=674d6426e0649e199435e5bbfea340aa&units=imperial"



function displayResults(data) {
    
    for(let i=0; i<3;i++){
      document.getElementById("day"+(i+1)+"Temp").innerHTML = Number(data.list[i].main.temp).toFixed(1) + " " + "°F";
      document.getElementById("day"+(i+1)+"Hum").innerHTML = data.list[i].main.humidity +" " + "%";
      document.getElementById("img"+(i+1)).src = "https://openweathermap.org/img/wn/" + data.list[i].weather[0].icon +".png";
      document.getElementById("day"+(i+1)+"Cond").innerHTML = data.list[i].weather[0].description;
    }

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


