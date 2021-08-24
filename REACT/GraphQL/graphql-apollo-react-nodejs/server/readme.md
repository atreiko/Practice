== SERVER == 


    npm init -y

    npm i express graphql express-graphql cors nodemon

package.json =>
    "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"      <=   удалить 

    "scripts": {
    "dev": "nodemon index.js"     <=    записать



server/index.js

    Импортируем express
    Создаем экземпляр приложения из express
    Назначаем прослушивание порта для приложения 

Функция  listen вторым параметром принимает колбэк, 
который будет вызваться в случаи, если сервер запустился

    npm run dev

Импортируем диструктурируя graphqlHTTP из пакета express-graphql
Имортируем cors middleware 
    Далее => 
        app.use(cors())
        
        app.use('/graphql', graphqlHTTP({
            graphql: true                       - включает графический интерфейс в браузере, который позволяет
                                                отправлять запросы в браузере
        }))


Создаем файл: schema.js

sever/schema.js

    Импортируем диструктурируя buildSchema из graphql
    Создаем константу schema и записываем в нее результат функции buildSchema(``)
                 (buildSchema - принимает параметром строку)

    Экспортируем: module.exports.schema

sever/index.js

    Импортируем schema в index.js
    Передаем ее в graphqlHTTP

Вернемся к schema.js и добавим тип
    В типе указываем поля и обозначаем их тип данных

Пример:

    type User {
        id: ID
        username: String
        age: Int
        posts: [Post]
    }
    type Post {
        id: ID
        title: String
        content: String
    }




