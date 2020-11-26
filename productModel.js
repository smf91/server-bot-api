const mongoose = require('mongoose')

// Создаем схему
const productSchema = new mongoose.Schema({
    name: String,
    img: String,
    tagline: String,
    packing: {
        price: Number,
        amt: Number,
        location: Array
    },
})


//   создаем модель и экспортируем
const productMoscow = mongoose.model('Москва', productSchema, 'Москва')
exports.getProductMoscow = function (callback, limit) {
    productMoscow.find(callback).limit(limit); 
}

//   создаем модель и экспортируем
const productVolgograd = mongoose.model('Волгоград', productSchema, 'Волгоград')
exports.getProductVolgograd = function (callback, limit) {
    productVolgograd.find(callback).limit(limit); 
}


