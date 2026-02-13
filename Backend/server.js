const express = require("express")
require("dotenv").config() // corrige dotenv
const connectDB = require("./config/db")

const port = 5000

// Connection à la base
connectDB()

const app = express()

// Middleware pour traiter les données de la request
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Routes
app.use("/post", require("./routes/post.routes"))

// Lancer le serveur
app.listen(port, () => console.log("Le serveur a demarré au port " + port))
