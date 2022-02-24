//trying more modular code
import { diceRoll } from './_data/diceRoll.js';

let result = document.querySelector('.attr-result');
const attributeDisplay = document.createElement('p');

const attrSelection = document.querySelector('select');
const attributes = {
    STR : '10',
    CON : '10',
    DEX : '10',
    WIS : '10',
    INT : '10',
    CHA : '10'
};
attrSelection.addEventListener('change', () => {
    if(attrSelection.value === 'dice-roll'){
        diceRoll.diceRoll();
    }else if(attrSelection.value === 'point-buy'){
        pointBuy();
    }else alert('Something went wrong, please try again.');
});
function pointBuy() {
    //alert("Second function");
}

