var mongoose    = require('mongoose'),
    Bucket      = require('./bucket'),
    Schema      = mongoose.Schema;

var UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name required,"],
        minlength: [2, "Minimum length is 2,"]
    },
    buckets: [{
        type: Schema.Types.ObjectId,
        ref: 'Bucket'
    }]
}, {timestamps: true});

var User = mongoose.model('User', UserSchema); //Registers to mongoose

module.exports = User; //So you can call it elsewhere