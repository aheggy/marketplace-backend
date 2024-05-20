// DEPENDENCIE
const express = require("express");
const cors = require("cors");

//CONSTIGRATION
const app = express();

//MIDELWARE
app.use(cors());
app.use(express.json());

//ROUTE
app.get("/", (req, res) => {
    res.status(200).send("Welcome to Marketplace app")
})

//ERROR 404
app.get("*", (req, res) => {
    res.status(404).send("Sorry, page not found!")
})

module.exports = app;