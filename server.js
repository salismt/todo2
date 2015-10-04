process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var config = require('./config/config'),
	express = require('./config/express'),
	mongoose = require('./config/mongoose'),
	passport = require('./config/passport');

var db = mongoose(),
	app = express(),
	passport = passport();

app.listen(config.port);
module.exports = app;

console.log(process.env.NODE_ENV + ' server is listening to port ' + config.port);