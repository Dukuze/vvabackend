

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

const Accueil = require('./models/Accueil');
const Activites = require('./models/Activites'); 
const Animation = require('./models/Animation');
const Connexion = require('./models/Connexion');
const ContactezNous = require('./models/ContactezNous'); 
const Hebergements = require('./models/Hebergements'); 
const Utilisateur = require('./models/Utilisateur'); 
