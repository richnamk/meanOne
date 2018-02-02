var express = require("express");
var session = require('express-session');
var bodyParser = require('body-parser');
var path = require("path");
var app = express();
var routes = require('./server/config/routes.js');
var port = 6789;

require('./server/config/mongoose.js')

app.use(session({
	secret: 'password',
	proxy: true, 
	resave: false, 
	saveUninitialized: true 
}));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "/client/dist")));

routes(app)

app.listen(port, function() {
 console.log("listening on port 6789");
});
