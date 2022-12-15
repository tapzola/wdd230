const requestURL = 'json/data.json';
const  freshBtn = document.querySelector("#fresh-submit");

fetch(requestURL) 
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const fruits = jsonObject['fruits'];

  
   fruitSelection(fruits, '#first-fruit');
   fruitSelection(fruits, '#sec-fruit');
   fruitSelection(fruits, '#third-fruit');

 
   getOption();

  });


 function fruitSelection(fruitOptions, fruitId) {
   let choice  = document.querySelector(fruitId)
   for(let i in fruitOptions) {
     let option =  document.createElement("option")
     option.innerHTML = fruitOptions[i].name;
     option.value = fruitOptions[i].name;
     choice.appendChild(option);
   }

  }

   
  function getOption(fruits) {
    const name  = document.getElementById('first-name').value;
    const email  = document.getElementById('email').value;
    const phone   = document.getElementById('phone-number').value;
    const date  = document.getElementById('order-date').value;
    const fruit1 = document.getElementById("first-fruit").value;
    const fruit2 = document.getElementById("sec-fruit").value;
    const fruit3 = document.getElementById("third-fruit").value;
    const instructions = document.getElementById("instructions").value;

    displayNutrients(fruits, fruit1, fruit2, fruit3);
   displayInfo(name, email, phone, date, fruit1, fruit2, fruit3,instructions);
    
  }


function displayInfo(name, email, phone, date, fruit1, fruit2, fruit3,instructions){
  document.querySelector('.name-output').textContent =  name;
  document.querySelector('.phone-output').textContent =  phone;
  document.querySelector('.email-output').textContent =  email;
  document.querySelector('.date-output').textContent =  date;
  document.querySelector('.fruit-output1').textContent =  fruit1;
  document.querySelector('.fruit-output2').textContent = fruit2;
  document.querySelector('.fruit-output3').textContent = fruit3;
  document.querySelector('.special').textContent = instructions;


}


function displayNutrients(fruits, fruit1, fruit2, fruit3){


  const requestURL = 'json/data.json';


fetch(requestURL) 
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const fruits = jsonObject['fruits'];
    let fruitData1 = fruits.filter(fruits => fruits.name == fruit1)[0];
  let fruitData2 = fruits.filter(fruits => fruits.name == fruit2)[0];
  let fruitData3 = fruits.filter(fruits => fruits.name == fruit3)[0];

    
  const carbohydrates = fruitData1.nutritions.carbohydrates  +  fruitData2.nutritions.carbohydrates + fruitData3.nutritions.carbohydrates;
  const proteins  = fruitData1.nutritions.protein  +  fruitData2.nutritions.protein + fruitData3.nutritions.protein;
  const fats = fruitData1.nutritions.fat  +  fruitData2.nutritions.fat + fruitData3.nutritions.fat;
  const calories  = fruitData1.nutritions.calories  +  fruitData2.nutritions.calories + fruitData3.nutritions.calories;
  const sugar =fruitData1.nutritions.sugar +  fruitData2.nutritions.sugar + fruitData3.nutritions.sugar;
   
  document.querySelector('.carbs').textContent = carbohydrates.toFixed(0);
  document.querySelector('.proteins').textContent = proteins.toFixed(0);
  document.querySelector('.fats').textContent = fats.toFixed(0);
  document.querySelector('.sugar').textContent = sugar.toFixed(0);
  document.querySelector('.cals').textContent = calories.toFixed(0);
   
  });



    }

const drinks =  document.getElementById('drink-num');
let drinksNum = window.localStorage.getItem("drinksTotal");

if (drinksNum == null) {
  drinks.textContent  = "0";
} else {
    drinksNum ++
    localStorage.setItem("lastVisitTime", drinksNum);
}