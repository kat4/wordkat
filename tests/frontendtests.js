setTimeout(function() {
		var iframe_select = document.getElementById('iframe');
		var iframe_content = iframe_select.contentDocument || iframe_select.contentWindow.document;

	test('having an h1 tag', function(assert){
		var heading = iframe_content.querySelector('h1');
		assert.equal(!!heading, true);

	});

	var frontScript = iframe_select.contentWindow.autocomplete;

	// test('keypress after 2 letters in inputfield triggers a request', function(assert){
	// 	var searchTerm = iframe_content.getElementById('search-box').value;
	// 	console.log(searchTerm);
	// 	var e = jQuery.Event("keypress");
	// 	$("#theInputToTest").trigger(e);
	// 	assert.equal(!!searchTerm, true);
	// });

 }, 500);
