class Typescript {
    version: string
    
    constructor(version: string) {
        this.version = version
    }
    info(name: string) {
        return `[${name}]: Typescript version is ${this.version}`
    }
}

// =============================

class Car {
    readonly model: string
    readonly numberOfWheels: number = 4
    
    constructor(theModel: string) {
        this.model = theModel
    }
}

// ? Лаконичная запись класса Car: 
class Car2 {
    readonly numberOfWheels: number = 4
    constructor(readonly model: string) {}
}

// =============================
// * Модификаторы: "protected", "public", "private"

class Animal {
    protected voice: string = ''
    public color: string = 'black'

    constructor() {
        this.go()
    }

    private go() {
        console.log('Go');
    }
}

class Cat extends Animal {
    public setVoice(voice: string): void {
        this.voice = voice
    }
// ? Мы не можем пользоваться private модификатором у наследника Cat. 
    // // this.go()
}

const cat = new Cat()
// ? Наш instance cat - не имеет доступа к protected voice
// // cat.voice
console.log(cat.color);


// =============================
// * Абстрактные классы:

abstract class Component {
    abstract render(): void 
    abstract info(): string
}

class AppComponent extends Component {
    render(): void {
        console.log('Component on render');
    }

    info(): string {
        return 'This is info'
    }
}
