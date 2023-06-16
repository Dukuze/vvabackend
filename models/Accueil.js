const mongoose = require('mongoose');

const accueilSchema = mongoose.Schema({
    titre: {type : 'String'},
    username : {type : 'String'},
    imagename : {type : 'String'},
    
})

module.exports = mongoose.model('Accueil', AccueilSchema)