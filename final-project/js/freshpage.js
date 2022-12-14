const requestURL = 'json/data.json';
let dropdown = document.querySelector('.selection');
let dropdown2 = document.querySelector('.selection2');
let dropdown3 = document.querySelector('.selection3');
dropdown.length = 0;
dropdown2.length = 0;
dropdown3.length = 0;
let defaultOption = document.createElement('option');
defaultOption.text = ' ';

dropdown.add(defaultOption);
dropdown.selectedIndex = 0;
dropdown2.add(defaultOption);
dropdown2.selectedIndex = 0;
dropdown3.add(defaultOption);
dropdown3.selectedIndex = 0;
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  
    const fruits = jsonObject['fruits'];

    let option;
    let option2;
    let option3;
    
    	for (let i = 0; i < fruits.length; i++) {
          option = document.createElement('option');
      	  option.text = fruits[i].name;
      	  option.value = fruits[i].name;
          option2 = document.createElement('option');
      	  option2.text = fruits[i].name;
      	  option2.value = fruits[i].name;
          option3 = document.createElement('option');
      	  option3.text = fruits[i].name;
      	  option3.value = fruits[i].name;
      	  dropdown.add(option);
          dropdown2.add(option2);
          dropdown3.add(option3);

        }

  });