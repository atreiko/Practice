interface Person {
    name: string
    age: number
}

type PersonKeys = keyof Person // 'name' | 'age'

let key: PersonKeys = 'name'
key = 'age'

// * key - принимает в себя только занчения 'name' | 'age'
// // key = 'job'

// ==================

type User = {
    _id: number
    name: string
    email: string
    createAt: Date
}

// * Чтоб создать новый тип, который не включает в себя поля createAt и _id :

type UserKeysNoMeta_1 = Exclude<keyof User, '_id' | 'createdAt'> // 'name' | 'email

// ? Другая запись:

// * Указываем User как тип, с которым будем работать и через запятую указываем поля, которые хотим забрать
type UserKeysNoMeta_2 = Pick<User, 'name' | 'email'>

const u1: UserKeysNoMeta_1 = 'name' // С этим типом можем задавать только name | email
// //u1 = '_id'


