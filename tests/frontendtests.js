setTimeout(function() {
		var iframe_select = document.getElementById('iframe');
		var iframe_content = iframe_select.contentDocument || iframe_select.contentWindow.document;

	test('having an h1 tag', function(assert){
		var heading = iframe_content.querySelector('h1');
		assert.equal(!!heading, true);

	});

	var frontScript = iframe_select.contentWindow.acjs;
	console.log(Object.keys(frontScript));
	//;
	test('filter array of words by first three letters', function(assert){
		var example_array = ["catastophe", "cat", "catnip", "coldcat", "birthday", "barbeque"];
		//var word = content.getElementById('search-box').value;
		var word = "cat";
		var expected = ["catastophe", "cat", "catnip"];
		console.log(frontScript.filter_word("cat", ["catastophe", "cat", "catnip", "coldcat", "birthday", "barbeque"]));
		assert.deepEqual(frontScript.filter_word(word, example_array), expected, "cat first test");
	});

 }, 500);
