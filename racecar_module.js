
export class Driver {
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

    overtake(){
        console.log('Yay! You gained a place!')
        return 'Yay! You gained a place!';
    }

    passed(){
        console.log("Oh no! You were overtaken!")
    }

    crashed(){
        console.log("NOOOOOO! Your car crashed!")
    }

    win() {
        console.log("YESSSSS! You won the race!")
    }

    static older(driver1, driver2){
        let difference = driver1.age - driver2.age;
        if (difference === 0) {
            return `${driver1.name} is the same age as ${driver2.name}.`;
        } else if (difference > 0) {
            return `${driver1.name} is older than ${driver2.name}.`;
        } else {
            return `${driver1.name} is younger than ${driver2.name}.`;
        }
    }

}