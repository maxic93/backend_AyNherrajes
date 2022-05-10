const { Schema, model } = require("mongoose")

const productSchema = new Schema ({
    name: String,
    price: Number,
    cantidad: Number
})

const Product = new model ("product", productSchema)

module.exports = Product
