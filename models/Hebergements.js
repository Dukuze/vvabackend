const mongoose = require('mongoose');

const hebergementSchema = mongoose.Schema({
    titre: {type : 'String'},
    username : {type : 'String'},
    imagename : {type : 'String'},
    
})

module.exports = mongoose.model('Hebergements', hebergementsSchemaSchema)