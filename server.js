var http = require('http');

var PORT=8080;

function handler(request, response){
    response.end('It Works!! Path Hit: ' + request.url);
}

var server = http.createServer(handler);

server.listen(PORT, function(){
    console.log("Server listening on: http://localhost:%s", PORT);
});
