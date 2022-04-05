'use strict';

class Base {
    constructor(name){
        this.name = name;
        this.class = "";
        this.race = "";

        this.attributes = {
            'STR': 10,
            'DEX': 10,
            'CON': 10,
            'WIS': 10,
            'INT': 10,
            'CHA': 10
        };
    };
};

module.exports = class Dwarf extends Base {
    constructor (race){
        this.race = race;
        super.attributes.WIS = 12;
        super.attributes.CON = 12;
        super.attributes.CHA = 8;

        //misc attributes
        this.size = 'medium';
        this.speed = 20;
    };
};

module.exports = class Elf extends Base {
    constructor (race){
        this.race = race;
        super.attributes.DEX = 12;
        super.attributes.INT = 12;
        super.attributes.CON = 8;

        //misc attributes
        this.size = 'medium';
        this.speed = 30;
    };
};

export {Dwarf, Elf};