 
class Employee {
    constructor(name, age, salary) {
        this._name = name
        this._age = age
        this._salary = salary
    }
    get name() {
        return this._name
    }
    get age() {
        return this._age
    }
    get salary() {
        return this._salary
    }
    set name(newName) {
        this._name = newName
    }
    set age(newAge) {
        this._name = newAge
    }
    set salary(newSalary) {
        this._name = newSalary
    }
}

class Programmer extends Employee {
    constructor(name, age, salary, lang) {
        super(name, age, salary)
        this.lang = lang
    }
    get salary() {
        return super.salary * 3
    }
}

const employee = new Employee('Roach', 4, 1)
const prog = new Programmer('Kolyan', 24, 6000, 'js')
console.log(employee);
console.log(prog.name = 'Biba');
console.log(prog);
console.log(prog.salary);


