
const input = document.querySelector('input');
const button = document.querySelector('button');
const list = document.querySelector('ul');

button.addEventListener('click', function() {
    item = input.value
    
    if (item !== ""){

        const olist = document.createElement('li');
        const delbtn = document.createElement('button');

        olist.textContent = item;
        delbtn.textContent = "\u274C";

        olist.appendChild(delbtn);
        list.appendChild(olist);

        delbtn.addEventListener('click', function() {
            list.removeChild(olist);
        
        
        

        });
    input.value = ""
    input.focus();
    };// end of if statement









});