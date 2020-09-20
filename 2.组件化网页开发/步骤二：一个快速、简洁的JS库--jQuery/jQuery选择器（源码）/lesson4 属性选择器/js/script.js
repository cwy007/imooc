$(document).ready(function() {
	var all = $('[class]');
	console.log(all);
	var tool = $('[class=tool]');
	console.log(tool);
	var notool = $('[class!=tool]');
	console.log(notool);
	var tools = $('[class^=tool_]');
	console.log(tools);
	var vs = $('[class$=vs]');
	console.log(vs);
	var vses = $('[class*=vs]');
	console.log(vses);
	var scripts = $('[type][src]');
	console.log(scripts);
	var jq = $('[class][class*=lang][class$=y]');
	console.log(jq);
});
