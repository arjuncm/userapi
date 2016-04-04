var express = require('express');
var bodyparser = require('body-parser');
var connection = require('./connection');
var routes = require('./routes');

var app = express();
app.set('domain', 'arjun.com');
app.set('port', process.env.PORT || 8081);
app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());

connection.init();
routes.configure(app);

var server = app.listen(8081, function() {
	
  console.log('Server listening on port ' + server.address().port);
});
