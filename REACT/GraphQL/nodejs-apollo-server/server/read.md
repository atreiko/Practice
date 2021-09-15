===>
    npm i apollo-server graphql nodemon

.index.js
    const server = new ApolloServer({typeDefs, resolvers})

    typeDefs - определение типов данных
    resolvers - фунцкии, которые что-то делают (вызовы apis, вызовы бд, отправлять данные...)

/schema/
    - type-defs.js
    - resolvers.js
Файлы, которые мы экспортируем и принимаем в index.js

type-defs.js
    Описываем типы запросов
    Каждая GQL схема начинается с типа Query
    В ней мы получаем всех users, в виде массива с User
    Для User создает отдельный тип со своими полями

FakeData - создержит массив с объектами, которые имеют поля схожие с нашей схемой User

resolvers.js
    Определяем функции для наших type-defs.
    В Query мы описываем получение users из FakeDate

enum - набор элементов, который явно используется только у данного типа. 
        Элементы не из списка - выдадут ошибку. К примеру, в FakeData у одного объкта
        перечисляемая строка будет CANA, а не CANADA в поле "nationality"


--- Реализация User:
type-defs.js
    type Query {
            users: [User]!
            user(id: ID!): User!
    }

resolvers.js
    