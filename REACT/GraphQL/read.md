

schema - в ней мы записываем типы, мутации, запросы...
Наример: 

     type User {
        id: ID
        username: String
        age: Int
        posts: [Post]
    }

query - запрос
В примере мы от users берем только username и age

    query {
        users {
            username
            age
        }
    }

mutation - позволяет добавлять данные, обновить или перезаписать (аналог POST и PUT запроса в  HTTP)
Пример возвращает id и username:

    mutation createUser {
        addUser(username: "Vasya", age: 22) {
            id, username
        }
    }

subscription - подписки.

    subscription listenPostLikes {
        listenPostLikes {
            title
            likes
        }
    }


