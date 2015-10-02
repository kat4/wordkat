var http = require('http');
var request = require('request');
var searchWord = "cat";


//var test = require('tape');
//var Shot = require('shot');
var wordkat = require('./server.js');

//Lets try to make a HTTPS GET request to the wordnik API.
function wnRequest(searchTerm, callback) {

    var wordnikurl = "http://api.wordnik.com:80/v4/word.json/" + searchTerm + "/definitions?limit=200&includeRelated=true&useCanonical=false&includeTags=false&api_key=83916c7411db7255406860c49b9083f65a950aff27e3c6a5d";
    request.get(wordnikurl, function(error, response, body) {
        if (error) {
            return
        }
        if (response.statusCode !== 200) {
            return
        } else {
            var object = JSON.parse(body);
            
            if (!object[0]) {
                callback('Sorry, this word is way too obscure for kat4... Search for "cat" instead.');

            } else {
                callback(object[0].text);
            }
        }

    });

}

// function ourCallback(data) {
//   console.log(data);
// }
//


// test("check we are getting a response from the API", function(t) {
//   wnRequest("cat", function(data) {
//     t.equal(!!data, true, "success!");
//     t.end();
//   });
//
// });
module.exports = wnRequest;
