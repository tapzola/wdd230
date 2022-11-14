const requestURL = 'json/data.json';
const cards = document.querySelector('.cards');

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const companies = jsonObject['companies'];
    companies.forEach(displayCompanies);
  });


 

function displayCompanies(company) {
    // Create elements to add to the document
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let image = document.createElement('img');
    let address = document.createElement('p');
    let phonenumber = document.createElement('p');
    let website = document.createElement('p');
  
    // Change the textContent property of the h2 element to contain the prophet's full name
    h2.textContent = `${company.companyname}`;
    address.textContent = `${company.address}`
    phonenumber.textContent = `${company.phonenumber}`
    website.textContent = `${company.website}`

    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    image.setAttribute('src', company.image);
    image.setAttribute('alt', `${company.companyname} image`);
    image.setAttribute('loading', 'lazy');
  
    // Add/append the section(card) with the h2 element
    card.appendChild(image);
    card.appendChild(address);
    card.appendChild(phonenumber);
    card.appendChild(website);


   
  
    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('div.cards').appendChild(card);

    const gridbutton = document.querySelector("#grid");
    const listbutton = document.querySelector("#list");

    gridbutton.addEventListener("click", () => {
      // example using arrow function
      card.classList.add("cards");
      card.classList.remove("list");
    });

    listbutton.addEventListener("click", showList); // example using defined function

    function showList() {
      card.classList.add("list");
      card.classList.remove("cards");
    };
  };


  
  