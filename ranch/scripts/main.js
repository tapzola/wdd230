// get the current full date
const todayDate = new Date();

// get the current year
const currYear = todayDate.getFullYear();

// combine the copyright sign with the curr year
document.querySelector("#fullYear").textContent = currYear;