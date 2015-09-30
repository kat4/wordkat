var test = require('tape');
var Shot = require('shot');
var wordkat = require('../server.js');

test("check 1 is equal to 1", function (t) {
    t.equal(1, 1, "success!");
    t.end();
});

test('return the string "success"', function (t) {
	Shot.inject(wordkat.handler, {method: 'GET', url: "/success"}, function (res) {
		t.equal(res.payload, 'success', "Congrats");
		t.end();
	});
});
