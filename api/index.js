const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const crpto = require("crypto")
const nodemailer = require("nodemailer")


const app = express()
const port = 8000
const cors = require("cors")
app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

const jwt = require("jsonwebtoken")

// mongodb+srv://ojhaankur855:<password>@cluster0.8nng7mv.mongodb.net/

mongoose.connect("mongodb+srv://ojhaankur855:Ankur@cluster0.8nng7mv.mongodb.net/", {

    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("connected succes")
}).catch((err) => {
    console.log(err)
});


app.listen(port,()=>{
    console.log("server is running")
})