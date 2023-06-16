const mongoose = require('mongoose');

const activitesSchema = mongoose.Schema({

    date: {type : 'Date'},
    hrRDV : {type : 'Date'},
    prix : {type : 'Number'},
    hrDebut : {type : 'Date'},
    hrFin : {type : 'Date'},
    dateAnnule : {type : 'Date'},
    nomResp : {type : 'String'},
    prenomResp : {type : 'String'},

    
})

module.exports = mongoose.model('Activites', activitesSchema)