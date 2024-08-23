const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
     password: {
         type: String,
        
     }
    
    // active: {
    //     type: Boolean,
    //     default: true
    // }
})

module.exports = mongoose.model('NoteUser', userSchema)