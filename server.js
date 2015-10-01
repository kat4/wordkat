var wordkat = (function() {

    var http = require('http');
    var fs = require('fs');
    var PORT = 8000;
    var index = fs.readFileSync(__dirname + '/index.html');
    var frontendtests = fs.readFileSync(__dirname + '/tests/frontendtests.html');
    var frontendtestsjs = fs.readFileSync(__dirname + '/tests/frontendtests.js');
    var acjs = fs.readFileSync(__dirname + '/js/ac.js');
    var wnjs = fs.readFileSync(__dirname + '/js/wn.js');

    var autocomplete = require('./autocomplete.js');
    var wordnik = require('./wordnik.js');

    function handler(request, response) {
        var url = request.url;
        var urlArr = request.url.split('/');
        console.log ('new request from', urlArr);
        if (urlArr[1]===('success')) {
            response.end('success');
        } else if (urlArr[1]===('frontendtests.js')){
            response.writeHead(200,{"Content-Type": "text/javascript"});
            response.end(frontendtestsjs);
        } else if (urlArr[1]===('test')) {
            response.writeHead(200,{"Content-Type": "text/html"});
            response.end(frontendtests);
        } else if (urlArr[1]===('search')) {
           console.log(urlArr[2]);
           response.end();//autocomplete());
        } else if (urlArr[1]===('worddef')) {
            response.end();
        } else if (urlArr[1]===('js')) {
            if(urlArr[2] ===('ac.js')){
                response.writeHead(200,{"Content-Type": "text/html"});
                response.end(acjs);
            }
            if(urlArr[2] ===('wn.js')){
                response.writeHead(200,{"Content-Type": "text/html"});
                response.end(wnjs);
            }
        }
        else{
            response.writeHead(200,{"Content-Type": "text/html"});
            response.end(index);
        }
        console.log(request.url);
    }

    var server = http.createServer(handler);
    server.listen(process.env.PORT || PORT);
    // server.listen(PORT, function(){
    //     console.log("Server listening on: http://localhost:%s", PORT);
    // });

    return {
        handler: handler
    };
}());

module.exports = wordkat;
