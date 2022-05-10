const mongoose = require("mongoose")
const Product = require("../models/Product")

 
const readProduct = async(req, res)=> {
    Product.find({}).lean()
    .then(result=> res.send(result))
 }

 module.exports = {
     readProduct
 }