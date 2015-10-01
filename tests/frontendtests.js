var get_iframe = function() {
		var iframe_select = document.getElementById('iframe');
		var iframe_content = iframe_select.contentDocument || iframe_select.contentWindow.document;

		return iframe_content;
};


test('having an h1 tag', function(assert){
	target = get_iframe();
	var heading = target.querySelector('h1');
	assert.equal(!!heading, true);

});

test('filter array of words by first three letters', function(assert){
	var content = get_iframe();
	var example_array = ["catastophe", "cat", "catnip", "coldcat", "birthday", "barbeque"];
	//var word = content.getElementById('search-box').value;
	var word = "cat";
	assert.equal(acjs.filter_word(word, example_array), ["catastophe", "cat", "catnip"], "cat first test");



});
