$(document).ready(function() {
	var first = $('details > p:first-of-type');
	console.log(first);
	var last = $('details > p:last-of-type');
	console.log(last);
	var nthF = $('details > p:nth-of-type(2)');
	console.log(nthF);
	var nthL = $('details > p:nth-last-of-type(2)');
	console.log(nthL);
	var only = $('details > p:only-of-type');
	console.log(only);
	var ps = $('p:nth-of-type(3n)');
	console.log(ps);
});
