//Import Drugs Model
Product = require('./productModel');

exports.view = function (req, res) {
    Product.get(function (err, product) {
        if (err)
            res.json({
                status: "error",
                message: err
            });
        res.json({
            status: "success",
            message: "Got Product Successfully!",
            data: product       
        });
    });
};