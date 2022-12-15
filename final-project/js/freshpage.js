const requestURL = 'json/data.json';
let dropdown = document.querySelector('#first-fruit');
let dropdown2 = document.querySelector('#sec-fruit');
let dropdown3 = document.querySelector('#third-fruit');

dropdown.length = 0;
dropdown2.length = 0;
dropdown3.length = 0;

let defaultOption = document.createElement('option');
defaultOption.text = ' ';
let defaultOption2 = document.createElement('option');
defaultOption2.text = ' ';
let defaultOption3 = document.createElement('option');
defaultOption3.text = ' ';

dropdown.add(defaultOption);
dropdown.selectedIndex = 0;
dropdown2.add(defaultOption2);
dropdown2.selectedIndex = 0;
dropdown3.add(defaultOption3);
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
    
        let result = document.querySelector('.result');
        let result2 = document.querySelector('.result2');
        let result3 = document.querySelector('.result3');
        
        dropdown.addEventListener('change', () => {
            const fruits = jsonObject['fruits'];
            result.textContent = selection.options[dropdown.selectedIndex].value;
            let fruitOne = dropdown.selectedIndex;
            console.log(fruitOne);
            for (let i = 0; i < fruits.length; i++) {
              if (fruits[i].name == fruitOne){

                
                 return document.querySelector('#carbs').innerHTML = fruits[i].nutritions.carbohydrates;

              }

                
            }

        
        });

        dropdown2.addEventListener('change', () => {
          result2.textContent = selection.options[dropdown2.selectedIndex].value;
          let fruitTwo = dropdown2.selectedIndex;
            console.log(fruitTwo);

      
      });

      dropdown3.addEventListener('change', () => {
        result3.textContent = selection.options[dropdown3.selectedIndex].value;
        let fruitThree = dropdown3.selectedIndex;
            console.log(fruitThree);

      
    });


    
  });

