// Если мы уже сделали экземпляр этого класса
// тогда возвращаем старый экземпляр    (как в mongoose)

class Database {
    constructor(data) {
        if(Database.exists) {
            return Database.instance
        }

        Database.instance = this    // создаем поле instance
        Database.exists = true      // создаем флаг о инициализации
        this.data = data
    }

    getData() {
        return this.data
    }
}


const mongo = new Database('MongoDB')
console.log(mongo.getData())        //*: MongoDB

const mySQL = new Database('MySQL')
console.log(mySQL.getData())        //*: MongoDB