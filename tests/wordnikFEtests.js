setTimeout(function() {
  var iframe_select = document.getElementById('iframe');
  var iframe_content = iframe_select.contentDocument || iframe_select.contentWindow.document;
  var obj = iframe_select.contentWindow;

  test("check we are getting a response from our nodejs server", function(assert) {
    obj.defRequest(function(data) {
      console.log(data);
      assert.deepEqual(Boolean(data), true, "success!");
    });
  });
}, 500);
