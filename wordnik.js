var http = require('http');
var request = require('request');
var searchWord = "cat";

//Lets try to make a HTTPS GET request to the wordnik API.
var wordnikurl = "http://api.wordnik.com:80/v4/word.json/" + searchWord + "/definitions?limit=200&includeRelated=true&useCanonical=false&includeTags=false&api_key=83916c7411db7255406860c49b9083f65a950aff27e3c6a5d";
request.get(wordnikurl, function (error, response, body) {
    if(error){
        return console.log('Error:', error);
    }
    if(response.statusCode !== 200){
        return console.log('Invalid Status Code Returned:', response.statusCode);
    }
    var object = JSON.parse(body);
    console.log(object[0].text);
});
//wordnikRequest();
//parse the object
//var object = JSON.parse(body);
    //object[0].text;
