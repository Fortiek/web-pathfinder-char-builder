import {Dwarf, Elf} from './_data/character.js';

//where attribute results display in the document
const result = document.querySelector('.attr-result');
const attrSelection = document.querySelector('select');

//listen for change on selector element --Change to submit button later--
attrSelection.addEventListener('change', () => {
    if(attrSelection.value === 'dice-roll'){
        diceRoll();
    }else if(attrSelection.value === 'point-buy'){
        let attributeCostLimit = prompt("How many points will your DM allow for their campaign?")
        pointBuy(parseInt(attributeCostLimit, 10));
    }else alert('Something went wrong, please try again.');
});


function pointBuy(points) {
    // const points = points;

    if(result.hasChildNodes()){
        result.innerHTML = "";
    }

    for(const stat in attributes){
        result.innerHTML += `
            <li> 
                <span class="att-button minus minus-${stat}">-</span>
                <span class="att-button plus plus-${stat}">+</span>
                ${stat}: ${attributes[stat]}
            </li>`;
    }

    /* Need to instead, find a concise way to target the .minus-STAT class
    on these spans (and .plus-STAT) to allow the calculations to run 
    and reflect on the proper stat block
    */
   
    // const decreasePointBtn = document.querySelector(".minus")
    //                         .addEventListener("click", () =>{
    //                             alert("clicked minus")
    //                         });
    // const increasePointBtn = document.querySelector(".plus")
    //                         .addEventListener("click", () =>{
    //                             alert("clicked plus")
    //                         });
}

//randomly generate attribute values from 3-18, assign to attribute obj
function diceRoll() {
    
    if(result.hasChildNodes()){
        result.innerHTML = "";
    }

    function determineScore() {
        return Math.floor(Math.random()*6 + 1) * 3;
    }

    for(const stat in attributes){
        attributes[stat] = determineScore();
        result.innerHTML += `<li>${stat}: ${attributes[stat]}</li>`;
    }

}


