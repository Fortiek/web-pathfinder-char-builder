//where attribute results display in the document
const result = document.querySelector('.attr-result');
const attrSelection = document.querySelector('select');

//attributes object; may want to convert entire character's into obj
const attributes = {
    STR : 10,
    CON : 10,
    DEX : 10,
    WIS : 10,
    INT : 10,
    CHA : 10
};

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
                <span class="minus-${stat}" style="border:1px solid white">-</span>
                <span class="plus-${stat}" style="border:1px solid white">+</span>
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
        while(result.firstChild){
            result.removeChild(result.firstChild);
        }
    }

    function determineScore() {
        return Math.floor(Math.random()*6 + 1) * 3;
    }

    for(const stat in attributes){
        attributes[stat] = determineScore();
        result.innerHTML += `<li>${stat}: ${attributes[stat]}</li>`;
    }

}


