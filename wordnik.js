var http = require('http');
var request = require('request');
var env = require('env2')('config.env');
var searchWord = "cat";


//Lets try to make a HTTPS GET request to the wordnik API.
function wnRequest(searchTerm, callback) {

    var wordnikurl = "http://api.wordnik.com:80/v4/word.json/" + searchTerm + "/definitions?limit=200&includeRelated=true&useCanonical=false&includeTags=false&api_key="+process.env.APIkey;
    request.get(wordnikurl, function(error, response, body) {
        if (error) {
            return;
        }
        if (response.statusCode !== 200) {
            return;
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

module.exports = wnRequest;
