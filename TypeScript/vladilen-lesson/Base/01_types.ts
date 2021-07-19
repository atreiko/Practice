
// * Массив чисел:
const numberArray: number[] = [1, 2, 3, 4, 5]
// * GENERIC запись массива чисел:
const numberArray2: Array<number> = [1, 2, 3, 4, 5]

// * Tuple - принимает разные типы данных, которые мы явно указываем в объявлении:
const contact: [string, number] = ['Artem', 0934200099]

// * Any - дает возможность принимать любые типы и переназначать их
let variable: any = 42
variable = 'New String'

// * function
// ? Аргументы фунции могут получить явный тип данных.
// ? Если фунция не возвращает ничего, то мы можем указать для нее тип:
// * void
function saMyName(name: string): void {
    console.log(name);   
}
saMyName('Bomberman')

// * Never - если фукция возвращает ошибку или никогда не заканчивает свое выполнение
// ? Возвращает ошибку:
function throwError(message: string): never {
    throw new Error(message)
}
// ? Никогда не закончит выполение:
function infinite(): never {
    while(true) {

    }
}

// * Type - конструкция, которая позволяет создавать свои типы
// ? Например, id элемента может быть как строкой, так и числом
// ? Мы явно это можем указать, и TS покажет ошибку, если приходит другой тип
type ID = string | number
const id_1: ID = 12
const id_2: ID = '13'

// * null и undefined 
type someType = string | null | undefined



