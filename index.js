//Variables
require("./mongo")
const express = require("express")
const { readProduct } = require("./Controller/productControll")
const app = express()
const PORT = 3001
const cors = require("cors")

//Midlewar
app.use(cors())
app.use(express.json())
app.get("/api", readProduct)

app.use(express.static('public'));

app.listen(PORT, ()=> console.log("server andando"))