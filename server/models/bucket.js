var mongoose = require('mongoose');
var User = require('./user');
var Schema = mongoose.Schema;

var BucketSchema = new mongoose.Schema({
	_creator: { type: String },
	item: { type: String },
	desc: { type: String },
	completed: { type: Boolean, default: false }
}, { timestamps: true });
mongoose.model('Bucket', BucketSchema);

var Bucket = mongoose.model ('Bucket', BucketSchema);
module.exports = Bucket;