var ourSearchWord = 'cat';

function defRequest(callback) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      callback(xhttp.responseText);

    }

  };
  xhttp.open("GET", "/worddef/" + ourSearchWord, true);
  xhttp.send();

}
defRequest(function() {
  console.log('kablam');
});

test("check we are getting a response from the API", function(t) {
  defRequest(function(data) {
    t.equal(!!data, true, "success!");
    t.end();
  });
});
