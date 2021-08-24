NODE JS
Express
PostgreSQL - система управления базами данных
Sequelize - это ORM-библиотека для приложений на Node. js, которая осуществляет сопоставление таблиц в бд и отношений между ними с классами. При использовании Sequelize мы можем не писать SQL-запросы, а работать с данными как с обычными объектами.

Строим диаграмму базы данных, состоящую из 8 таблиц
Реализуем авторизацию пользователя по JWT токену
Полноценное Rest API интернет магазина электроники

React JS
React bootstrap
Axios
React-router-dom
MobX - стейт менеджмент

SERVER endpoints ===>
Users:
    GET - http://.../api/users -
    POST - http://.../api/users -
    DELETE - http://.../api/users -
Devices
    GET - http://.../api/devices -
    POST - http://.../api/devices -


    START: 

pern-shop/server:
 ---------->   npm i express pg pg-hstore sequelize cors dotenv   <----------
 ---------->   npm i -D nodemon   <----------

            ( sequelize - ORM, 
              cors - чтоб обращаться с бразера к серверу, 
              doenv - чтоб задавать переменные окружению 
            )

pern-shop/server/package.json
    "dev": "nodemon index.js"

    const express = require('express')
    const PORT = 5000
    const app = express()
    app.listen(PORT, () => console.log(`Server start on port ${PORT}`))

    npm run dev - Проверь запуск

pern-shop/server/.env    - создаем файл, пишем наш порт
    PORT=5000

pern-shop/server/index.js
    Теперь получать этот порт будем из переменных окружения
    const PORT = process.env.PORT || 5000

    Для того, чтоб сервер мог считывать файл:
    require('dotenv').config()

    Сконфигурируем подклюение к базе данных
pern-shop/server/db.js      - создаем файл
    const { Sequelize } = require('sequelize')
    module.exports = new Sequelize()
    
    Устанавливаем PostgreSQL
    Запускаем приложение pgadmin на компе
    Называем и создаем БД

pern-shop/server/.env
    DB_NAME=online_store    - в переменные заносим название, которое мы дали
                            нашей БД в postadmin
    DB_USER=postgres        - название пользователя, по которому мы будем подключаться
    DB_PASSWORD=root
    DB_HOST=localhost       - в режиме разработки, мы указыаем localhost
    DB_PORT=5151            - порт, который мы вписали postgreSQL (5432 - стандартный)
    
    Переменные в .env пепедаем в конструктор:                     
pern-shop/server/db.js 
    const { Sequelize } = require('sequelize')
    module.exports = new Sequelize(
        process.env.DB_NAME,        //* Название БД
        process.env.DB_NAME_USER,   //* Пользователь
        process.env.DB_PASSWORD,    //* ПАРОЛЬ
        {
            dialect: 'postgres',
            host: process.env.DB_HOST,
            host: process.env.DB_PORT
        }
    )

pern-shop/server/index.js 
    const sequelize = require('./db')   - импортируем файл, который мы экспортировали в db.js
    const start = async() => {
        try {
            await sequelize.authenticate()             - с помощью authenticate устанавливается подключение к БД 
            await sequelize.sync()                              - sync сверяет состояние базы данных со схемой
            app.listen(PORT, () => console.log(`Server start on port ${PORT}`))     - перенесем app.listen в try
        } catch(e) {
            console.log(e);
        }
    }
    start()     - функция для поключения БД(асинхронная!)

Открываем сайт draw io
https://app.diagrams.net/ 
    Построем диаграмму схемы базы данных
    Create New Diagram => Blank Diagram => Entity Relation

    user:{ role : [модератор, администратор]}, но в нашем случае он либо пользователь либо админ
    basket: имеет уникальный id и ссылка(внешний ключ) на пользователя (чтоб понимать кому корзина пренадлежит)
    Свяь user c basket будет 1:1 (одному пользователю может пренадлежать одна корзина)

    device: {typeId: Тип элетроники (холодильник, телевизор)}, {brand: apple, lg}
    Типы и бренды тоже выносим как сущности в таблицы
    type:{ одному типу может пренадлежать несколько устройств} - связь между таблицами 1:Many с device
    brand:{ одному бренду может пренадлежать несколько устройств} - связь между таблицами 1:Many с device
    И эти таблицы тоже между собой связаны, так как один тип может пренадлежать нескольким брендам
    И один бренд может пренадлежать нескольким типам. Связь между ними Many:Many

    Инфо девайса нужно для описания. К примеру, телефон может иметь оперативную память, а холодильник - нет
    device_info: {id, device_id(ссылка на устройство), title(для хранение названий характеристик)} 
        связь между device и device_info 1:Many (один девайс может иметь много характеристик)
    
     basket_device(связующее между корзиной и устройством) содержит ссылку на корзину и устройство
        Связь между basket и basket_device 1:Many, так как одна корзина может содержать много устроств
        basket_device связует с device 1:1, так как устройство, которое находится в корзине - ссылаеся на
        устройство, которое есть в магазине
    
    rating:(чтоб высчитать рейтинг для конкретного устройства и чтоб пользователь не мог много раз ставить рейтинг
        нам понадобится user_id и device_id и rate(оценка, которую он поставил))


Реализуем схему, как эти данные будут храниться в базе данных:
pern-shop/server/models/models.js       - создаем папку models и файл models.js
    const sequelize = require('../db')      
    const { DataTypes } = require('sequelize')  - поле, с помощью которого описываеются типы поля (STRING, INT...)

    const User = sequelize.define('user', {         - указываем название модели 'user'
        id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},      - описываем поля модели
        email: {type: DataTypes.STRING, unique: true},
        password: {type: DataTypes.STRING},
        role: {type: DataTypes.STRING, defaultValue: "USER"}
    })

    Проделываем так со всеми моделями

    Далее связываем между собой:
    User.hasOne(Basket)      - hasOne или hasMany
    Basket.belongsTo(User)

    User.hasMany(Rating) - один пользователь может иметь несколько оценок товаров, потому hasMany
    Rating.belongsTo(User)

    Экспортируем все модели

pern-shop/server/index.js 
    Импортируем:
    const models = require('./models/models')

