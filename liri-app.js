// loads the http library
var http = require("http");

// creates http server to handle resposnes
http.createServer(function(request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hey hows it going");
    response.end();

}).listen(8888);