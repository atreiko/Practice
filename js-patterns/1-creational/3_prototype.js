
const car = {
    wheels: 4,

    init() {
        console.log(`I have ${this.wheels} wheels. My owner is ${this.owner}`);
    }
}

const carWithOwner = Object.create(car, {
    owner: {
        value: 'Ivan',
    }
})

console.log(carWithOwner.__proto__ === car) //*: true

carWithOwner.init(); //*: I have 4 wheels. My owner is Ivan