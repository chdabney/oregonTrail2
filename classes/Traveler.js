class Traveler {
    constructor(name, playerClass) {
        this.name = name
        this.food = 1
        this.isHealthy = true
        this.class = playerClass

    }

    hunt() {
        this.food += 2
    }

    eat() {
        this.food > 0 ? this.food -= 1 : this.isHealthy = false
    }


    /////////Not enough time to implement///////////////
    //attach this to a button only if player has a class of fighter
    //     attack() {
    //         if (this.class === 'Fighter') {
    //             console.log('hit!')
    //         }
    //     }

    //     heal(playerName) {
    //         if (this.class === 'Cleric') {

    //             if (playerName.isHealthy === false) {
    //                 playerName.isHealthy = true
    //             }
    //         }
    //     }

    //     fireBall() {
    //         if (this.class === 'Wizard') {
    //             console.log("That's a lotta damage!")
    //         }
    //     }

    //     steal() {
    //         if (this.class === 'Rogue') {
    //             console.log("Stole X amount of food!")
    //         }
    //     }



}