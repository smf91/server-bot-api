const  router = require ('express').Router()
const city =require('./server.js')
const productController = require ('./productController')

//  response defaul api
router.get( '/', function(req, res){
    res.json({
        status: 'API works',
        message: "Welcome to API"
    })
})


// response list cityes
router.get( '/city', function(req, res){
    res.json({
        city: city.getListCities(),
    })
})

router.route ('/Moscow')
    .get (productController.getListProductForMoscow) 
    // .post (productController.add);
router.route ('/Volgograd')
    .get (productController.getListProductForVolgograd) 


// router.route ('/ product /: product_id') 
//     .get (productController.view) 
//     .patch (productController.update) 
//     .put (productController.update) 
//     .delete (productController.delete);

// Экспорт маршрутов API 
module.exports = router;
