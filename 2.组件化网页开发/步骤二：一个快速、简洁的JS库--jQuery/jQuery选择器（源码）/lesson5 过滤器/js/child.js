$(document).ready(function() {
	var first = $('details > p:first-child');
	console.log(first);
	var last = $('details > p:last-child');
	console.log(last);
	var nthF = $('details > p:nth-child(2)');
	console.log(nthF);
	var nthL = $('details > p:nth-last-child(2)');
	console.log(nthL);
	var only = $('details > p:only-child');
	console.log(only);
});
