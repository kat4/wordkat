

test("check we are getting a response from our nodejs server", function(t) {
  defRequest(function(data) {
    t.equal(data, 200, "success!");
    t.end();
  });
});
