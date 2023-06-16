

var express = require('express');

var app = express();


//bodyparser
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));


require('dotenv').config();


//Mongodb :
var mongoose = require('mongoose');

const url = process.env.DATABASE_URL
mongoose.connect(url,{
    useNewUrlParser: true,
    UseUnifiedTopology: true
}).then(console.log("MongoDB connected !"))
.catch(err => console.log(err))

const Contact = require('./models/Accueil');
const Contact = require('./models/Activites'); 
const Contact = require('./models/Animation');
const Contact = require('./models/Connexion');
const Contact = require('./models/ContactezNous'); 
const Contact = require('./models/Hebergements'); 
const Contact = require('./models/Utilisateur'); 
