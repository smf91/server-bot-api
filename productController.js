model = require('./productModel');

exports.getListProductForMoscow = function (req, res) {
    model.getProductMoscow(function (err, product) {
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
// =======================================================
exports.getListProductForVolgograd = function (req, res) {
    model.getProductVolgograd(function (err, product) {
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



// //For creating new Product
// exports.add = function (req, res) {
//     var Product = new Product();
//     bio.name = req.body.name? req.body.name: bio.name;
//     bio.email = req.body.email;
//     bio.phone = req.body.phone;
//     bio.address = req.body.address;
// //Save and check error
// Product.save(function (err) {
//         if (err)
//             res.json(err);
// res.json({
//             message: "New Product Added!",
//             data: Product
//         });
//     });
// };
// View Bio

// // Update Bio
// exports.update = function (req, res) {
//     Bio.findById(req.params.bio_id, function (err, bio) {
//         if (err)
//             res.send(err);
//         bio.name = req.body.name ? req.body.name : bio.name;
//         bio.email = req.body.email;
//         bio.phone = req.body.phone;
//         bio.address = req.body.address;
// //save and check errors
//         bio.save(function (err) {
//             if (err)
//                 res.json(err)
//             res.json({
//                 message: "Bio Updated Successfully",
//                 data: bio
//             });
//         });
//     });
// };
// // Delete Bio
// exports.delete = function (req, res) {
//     Bio.deleteOne({
//         _id: req.params.bio_id
//     }, function (err, contact) {
//         if (err)
//             res.send(err)
//         res.json({
//             status: "success",
//             message: 'Bio Deleted'
//         })
//     })
// }