require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const apiRoutes = require("./router")

const app = express()
const PORT = process.env.PORT || 3000


const listCities = []
exports.getListCities = function () {
    console.log(listCities);
    return listCities
}

async function start() {
    try {
        await mongoose.connect(process.env.URI, {
            useNewUrlParser: true,
            useFindAndModify: false
        })
        app.listen(PORT, () => {
            console.log("Welcome to Express ......");
        })
        // при коннекте к бд берем список коллекций и парсим их в массив listCities
        mongoose.connection.db.listCollections().toArray((err, name) => {
            err ? console.log(err)
                : name.forEach((item) => {
                    listCities.push(item.name)
                })
        })
    }
    catch (e) {
        console.log(e);
    }
}

// Использование маршрутов API в приложении 
app.use('/api', apiRoutes)

// настраиваем bodyparser для обработки почтовых запросов 
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());


start()
