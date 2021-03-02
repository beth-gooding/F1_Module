
export class F1Driver {
    constructor(name, age, number, team, country, rookie) {
        this.name = name;
        this.age = age;
        this.number = number;
        this.team = team;
        this.countryRepresenting = country;
        this.rookie = rookie;
    }

    getDetails(){
        return `
        Name: ${this.name},
        Age: ${this.age},
        Number: ${this.number},
        Team: ${this.team},
        Representing: ${this.countryRepresenting},
        Rookie: ${this.rookie}
        `;
    }
}