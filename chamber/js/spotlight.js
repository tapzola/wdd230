const requestURL = 'json/data.json';
const cards = document.querySelector(".spotlights")

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  
    const companies = jsonObject['companies'];
    let count = 0;
    let rand = Math.floor(Math.random() * companies.length)
    console.log(rand)
    for (let i = rand; i < companies.length; i++) {
        if(companies[i].membership === 'Gold' || companies[i].membership === 'Silver'){
            displayCompanies(companies[i])
            count ++
            if(count == 3){
                break;
            }
        }
      }
    
  });


  function displayCompanies(company) {
     // Create elements to add to the document
     let card = document.createElement('section');
     let name = document.createElement('h3');
     let image = document.createElement('img');
     let address = document.createElement('p');
     let phonenumber = document.createElement('p');
     let website = document.createElement('p');
   
   
     // Change the textContent property of the h2 element to contain the prophet's full name
     name.textContent = `${company.companyname}`;
     address.textContent = `${company.address}`
     phonenumber.textContent = `${company.phonenumber}`
     website.textContent = `${company.website}`
 
 
 
     // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
     image.setAttribute('src', company.image);
     image.setAttribute('alt', `${company.companyname} image`);
     image.setAttribute('loading', 'lazy');
   
     // Add/append the section(card) with the h2 element
     
     card.appendChild(image);
     card.appendChild(name)
     card.appendChild(address);
     card.appendChild(phonenumber);
     card.appendChild(website);
    
  
    // Add/append the existing HTML div with the cards class with the section(card)
    cards.appendChild(card);

  
  };
