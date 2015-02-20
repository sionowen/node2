var fs = require('fs');
var express = require('express');
var bodyParser = require('body-parser');

var app = express();
fs.readFile('data.txt', function(err, data){
	res.header('Content-type', 'text/html');
	res.send(fileContents);
});
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', function(req, res) {
});


var server = app.listen(4406, function() {
	console.log('Express server listening on port ' + server.address().port);
});
