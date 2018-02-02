var mongoose = require('mongoose')

var UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name required,"],
        minlength: [2, "Minimum length is 2,"]
    }
}, {timestamps: true});

var User = mongoose.model('User', UserSchema); //Registers to mongoose

module.exports = User; //So you can call it elsewhere