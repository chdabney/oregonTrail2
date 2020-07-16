class Wagon {
    constructor(capacity) {
        this.capacity = capacity
        this.passengers = []


    }

    getAvailableSeatCount() {
        return this.capacity - this.passengers.length

    }

    join(traveler) {
        if (this.getAvailableSeatCount() > 0) {
            this.passengers.push(traveler)
        }
    }

    shouldQuarantine() {
        return this.passengers.some(passenger => passenger.isHealthy === false)
    }

    totalFood() {
        // return this.passengers.reduce(passenger => passenger.food)
        let totalFood = 0
        for (let index = 0; index < this.passengers.length; index++) {
            totalFood += this.passengers[index].food

        }
        return totalFood
    }

}


