// Паттерн для передачи и работы с данными через различные типы объектов
class Car {
    constructor(model, price) {
        this.model = model
        this.price = price
    }
}

class CarFactory {
    constructor() {
        this.cars = []
    }

    create(model, price) {
        const candidate = this.getCar(model)
        if(candidate) {
            return candidate
        }
        const newCar = new Car(model, price)
        this.cars.push(newCar)
        return newCar
    }

    getCar(model) {
        return this.cars.find(car => car.model === model)
    }
}

const factory = new CarFactory()

const bmwX6 = factory.create('bmw', 90000)
const audiS4 = factory.create('audi', 37000)
const bmwX3 = factory.create('bmw', 60000)
console.log(bmwX6);
console.log(audiS4);
console.log(bmwX3);

//? result:
// Car { model: 'bmw', price: 90000 }
// Car { model: 'audi', price: 37000 }
// Car { model: 'bmw', price: 90000 }
console.log(bmwX3 === bmwX6);
//? result: true


