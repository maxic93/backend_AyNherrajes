const mongoose = require("mongoose")
const URI = "mongodb+srv://maxic93-user:lC6O1zVAkh50VM02@cluster0.goxcj.mongodb.net/AyNDataBase?retryWrites=true&w=majority"
const Product = require("./models/Product.js")

mongoose.connect(URI)
 .then(()=> console.log("Data base conectada"))
 .catch(err => console.log("fallo la conexion" + err))

