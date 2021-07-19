// * Интерфейс определяет свойства и методы, которые объект должен реализовать. 
// * Другими словами, интерфейс - это определение кастомного типа данных, но без реализации.

interface Rect {
    readonly id: string
    color?: string
    size: {
        width: number
        height: number
    }
}

const rect1: Rect = {
    id: '1234',
    size: {
        width: 20,
        height: 30
    },
    color: '#ccc'
}

const rect2: Rect = {
    id: '111',
    size: {
        width: 10,
        height: 5
    }
}
rect2.color = 'black'

// * Объявляем предварительно к какому типу отнести наш созданный объект
// * для дальнейших манипуляций с свойствами внутри объекта:
const rect3 = {} as Rect
// * Старая запись той же логики:
const rect4 = <Rect>{}


// ?        НАСЛЕДОВАНИЕ ИНТЕРФЕЙСОВ

interface RectWithArea extends Rect {
    getArea: () => number
}

const rect5: RectWithArea = {
    id: '123',
    size: {
        width: 20,
        height: 20
    },
    getArea(): number {
        return this.size.width * this.size.height
     }
}

// * Интерфейсы называют ерез букву  "I" в начале:
interface IClock {
    time: Date,
    setTime(data: Date): void
}
// ? Для того, чтоб привязать класс Clock к интерфейсу IClock - есть оператор:
// !                    implements
class Clock implements IClock {
    time: Date = new Date()

    setTime(date: Date): void {
        this.time = date
    }
}

// * =========  Описываем интерфейс для объекта с css свойствами
// * при помощи ключегово слова  ===> " key "
// * И наследуем Styles для css объекта:
interface Styles {
    [key: string]: string
}

const css: Styles = {
    border: '1px solid black',
    marginTop: '2px',
    borderRadius: '5px'
}

