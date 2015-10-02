setTimeout(function() {
		var iframe_select = document.getElementById('iframe');
		var iframe_content = iframe_select.contentDocument || iframe_select.contentWindow.document;
		var frontScript = iframe_select.contentWindow.autocomplete;

	test('having an h1 tag', function(assert){
		var heading = iframe_content.querySelector('h1');
		assert.equal(!!heading, true);

	});

	test("check we are getting a response from our nodejs server", function(assert) {
		var done = assert.async();
	  iframe_select.contentWindow.apiTrigger.defRequest('cat',function(data) {
		console.log(data);
		assert.deepEqual(Boolean(data), true, "success!");
		done();
	  });
	});


 }, 500);
