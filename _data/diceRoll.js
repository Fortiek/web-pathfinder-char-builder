function diceRoll() {
    
    if(result.hasChildNodes()){
        while(result.firstChild){
            result.removeChild(result.firstChild);
        }
    }

    function determineScore() {
        return Math.floor(Math.random()*6 + 1) * 3;
    }

    for(let stat in attributes){
        //console.log(`${stat}: ${attributes[stat]}`);
        result.append(`${stat}: ${determineScore()} \n`, attributeDisplay);

    }

}

module.export = diceRoll;