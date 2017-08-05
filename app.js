// Require libraries
var http = require('http');
var fs = require('fs');

// Set up vars
var port = 3000;
var host = 'localhost';
var responseCode = {
  success: 200,
  notFound: 404
};

// Create a server
var server = http.createServer(function(request, response){
  fs.readFile('./public/index.html', 'utf8', function(err, data){
    if (err) {
      response.writeHead(responseCode.notFound);
      response.end("Whoops! That page doesn't seem to exist.");
    } else {
      response.writeHead(responseCode.success, {
        "Content-Type": "text/html"
      });
      response.end(data);
    }
  });
});


// Run the server
server.listen(port, host, function() {
  console.log(`Listening at http://${ host }:${ port }`);
});


