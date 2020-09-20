$(document).ready(function() {
	var js = $('aside').find('.javascript');
	console.log(js);
	var details = $('aside').children('details');
	console.log(details);
	var js_parent = js.parent();
	console.log(js_parent);
	var less = $('.less');
	console.log(less);
	var sass = less.next();
	console.log(sass);
	var css = less.prev();
	console.log(css);
	var li = $('li').eq(8);
	console.log(li);
	var php = $('.php');
	console.log(php);
	var lis = php.siblings();
	console.log(lis);
	var allLis = $('li');
	console.log(allLis);
	var python = allLis.filter('.python');
	console.log(python);
	var obj = allLis.filter(function(index) {
		console.log(index);
	});
});
