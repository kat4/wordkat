var wordkat = (function() {

    var http = require('http');
    var fs = require('fs');
    var PORT = 8000;
    var index = fs.readFileSync(__dirname + '/index.html');
    var frontendtests = fs.readFileSync(__dirname + '/tests/frontendtests.html');
    var frontendtestsjs = fs.readFileSync(__dirname + '/tests/frontendtests.js');
    var acjs = fs.readFileSync(__dirname + '/js/ac.js');
    var wnjs = fs.readFileSync(__dirname + '/js/wn.js');
    var wordlist = fs.readFileSync(__dirname + '/text/words.txt').toString().split('\n');
    var autocomplete = require('./autocomplete.js');
    var wordnik = require('./wordnik.js');

    function handler(request, response) {
        var searchTerm = '';
        var url = request.url;
        var urlArr = request.url.split('/');
        console.log('new request from', urlArr);
        if (urlArr[1] === ('success')) {
            response.end('success');
        } else if (urlArr[1] === ('frontendtests.js')) {
            response.writeHead(200, {
                "Content-Type": "text/javascript"
            });
            response.end(frontendtestsjs);
        } else if (urlArr[1] === ('test')) {
            response.writeHead(200, {
                "Content-Type": "text/html"
            });
            response.end(frontendtests);
        } else if (urlArr[1] === ('search')) {
            searchTerm = urlArr[2];
            var acResponse = JSON.stringify(autocomplete.filter_word(searchTerm, wordlist).slice(0, 19));
            response.write(acResponse);
            response.end(); //autocomplete());
        } else if (urlArr[1] === ('worddef')) {
            searchTerm = urlArr[2];
            wordnik(searchTerm, function(data) {
                    response.write(data);
                    response.end();
            });


        } else if (urlArr[1] === ('js')) {
            if (urlArr[2] === ('ac.js')) {
                response.writeHead(200, {
                    "Content-Type": "text/html"
                });
                response.end(acjs);
            }
            if (urlArr[2] === ('wn.js')) {
                response.writeHead(200, {
                    "Content-Type": "text/html"
                });
                response.end(wnjs);
            }
        } else if (urlArr.length === 1 || urlArr[1] === '') {
            response.writeHead(200, {
                "Content-Type": "text/html"
            });
            response.end(index);
        } else {
            fs.readFile(__dirname + request.url, function(err, file) {
                if (err) {
                    response.end();
                } else {
                    var ext = request.url.split('.')[1];
                    response.writeHead(200, {
                        'Content-Type': 'text/' + ext
                    });
                }
                response.end(file);
            });



        }

        console.log(request.url);
    }






    var server = http.createServer(handler);
    server.listen(process.env.PORT || PORT);

    return {
        handler: handler
    };
}());

module.exports = wordkat;
