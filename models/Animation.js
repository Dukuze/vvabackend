const mongoose = require('mongoose');

const animationSchema = mongoose.Schema({

    nom: {type : 'String'},
    dateCreation : {type : 'String'},
    DateValidite : {type : 'String'},
    duree : {type : 'Date'},
    limitAge : {type : 'Number'},
    tarife : {type : 'Number'},
    nbrePlace : {type : 'Number'},
    descript : {type : 'String'},
    comment : {type : 'String'},
    difficulte : {type : 'String'},
    
})

module.exports = mongoose.model('Animation', animationSchema)

// Number = float, Int