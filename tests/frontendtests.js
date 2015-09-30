test('having an h1 tag', function(assert){
	var iframe = document.getElementById('iframe');
	// var iframe = $('#iframe')
	var target = iframe.contentDocument || iframe.contentWindow.document;
	var heading = target.querySelector('h1');
	console.log(heading);
	assert.equal(!!heading, true);

});
