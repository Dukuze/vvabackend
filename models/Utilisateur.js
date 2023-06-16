const mongoose = require('mongoose');

const utilisateur = mongoose.Schema({

    nom: {type : 'String', required: true},
    prenom : {type : 'String', required: true},
    adrMail : {type : 'Email'},
    noTel : {type : 'Number'},
    dateInscri : {type : 'Date'},
    dateFerme : {type : 'Date'},
    typeProfil : {type : 'String', required: true },
    dateNais : {type : 'Date'},
})

module.exports = mongoose.model('Utilisateur', UtilisateurSchema)