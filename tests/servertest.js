var test = require('tape');
var Shot = require('shot');
var wordkat = require('../server.js');

test("check 1 is equal to 1", function(t) {
  t.equal(1, 1, "success!");
  t.end();
});
test('return the string "success"', function(t) {
  Shot.inject(wordkat.handler, {
    method: 'GET',
    url: "/success"
  }, function(res) {
    t.equal(res.payload, 'success', "Congrats");
    t.end();
  });
});
test('return the string "success"', function(t) {
  Shot.inject(wordkat.handler, {
    method: 'GET',
    url: "/worddef/cat"
  }, function(res) {
    t.equal(!!res.payload, true, "Congrats");
    t.end();
  });
});
test('return the string "success"', function(t) {
  Shot.inject(wordkat.handler, {
    method: 'GET',
    url: "/js/ac.js"
  }, function(res) {
    t.equal(!!res.payload, true, "Congrats");
    t.end();
  });
});
test('return the string "success"', function(t) {
  Shot.inject(wordkat.handler, {
    method: 'GET',
    url: "/js/wn.js"
  }, function(res) {
    t.equal(!!res.payload, true, "Congrats");
    t.end();
  });
});
test('return the string "success"', function(t) {
  Shot.inject(wordkat.handler, {
    method: 'GET',
    url: "/wordnik.js"
  }, function(res) {
    t.equal(!!res.payload, true, "Congrats");
    t.end();
  });
});
test('return the string "success"', function(t) {
  Shot.inject(wordkat.handler, {
    method: 'GET',
    url: "/autocomplete.js"
  }, function(res) {
    t.equal(!!res.payload, true, "Congrats");
    t.end();
  });
});
test('return the string "success"', function(t) {
  Shot.inject(wordkat.handler, {
    method: 'GET',
    url: "/frontendtests.js"
  }, function(res) {
    t.equal(!!res.payload, true, "Congrats");
    t.end();
  });
});
test('filter array of words from response by searchterm', function(t) {
  Shot.inject(wordkat.handler, {
    method: 'GET',
    url: "/search/cat"
  }, function(res) {
    t.equal(!!res.payload, true, "Congrats");
    t.end();
  });
});
