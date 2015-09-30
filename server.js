var wordkat = (function() {

  var http = require('http');

  var PORT=8000;

  function handler(request, response){
    var url = request.url;

    if (url.indexOf('success') > -1) {
      response.end('success');
      }
    console.log(request.url);
    response.end(request.url);
  }

  var server = http.createServer(handler);

  // server.listen(PORT, function(){
  //     console.log("Server listening on: http://localhost:%s", PORT);
  // });

  return {
    handler: handler
  };
}());

module.exports = wordkat;
