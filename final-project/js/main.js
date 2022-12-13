
const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation')

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

// To solve the mid resizing issue with responsive class on
window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};


// get the current full date
const todayDate = new Date();

// get the current year
const currYear = todayDate.getFullYear();

// combine the copyright sign with the curr year
document.querySelector("#fullYear").textContent = currYear;

//get the updated date and time

document.querySelector("#lastUpdated").textContent = `Last Updated: ${document.lastModified}`;