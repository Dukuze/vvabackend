const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({
    titre: {type : 'String'},
    username : {type : 'String'},
    imagename : {type : 'String'},
    
})

module.exports = mongoose.model('ContactezNous', contactSchema)