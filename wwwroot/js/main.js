const input = $('#input');
const process = $('#process');
const output = $('#output');

function setStage(stage) {
	let elements = [input, process, output];
	elements.forEach(function(element) {
		element.toggleClass('active', false);
	});
	elements[stage - 1].toggleClass('active', true);
}

input.hover(function() { setStage(1); });
process.hover(function() { setStage(2); });
output.hover(function() { setStage(3); });