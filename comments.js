//Create web server using node.js
//Run using node comments.js
//Open browser and type http://localhost:8080
//To stop server, press Ctrl+C
//To run in background, type node comments.js &
//To stop background process, type killall node

var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res) {
	console.log('request was made: ' + req.url);
	res.writeHead(200, {'Content-Type': 'text/html'});
	var myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf8');
	myReadStream.pipe(res);
});

server.listen(8080,"127.0.0.1");