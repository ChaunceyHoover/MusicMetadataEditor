const input = $('#input');
const process = $('#process');
const output = $('#output');

const check_all = $('#check-all');

/**
 * Sets the current active breadcrumb in the navbar trail 
 * @param {int} stage 0 = input, 1 = process, 2 = output
 */
function setStage(stage) {
	let elements = [input, process, output];
	elements.forEach(function(element) {
		element.toggleClass('active', false);
	});
	elements[stage - 1].toggleClass('active', true);
}

let isInternalChange = false;

function mainBoxChecked() {
	if (!isInternalChange)
		$('.file-checkbox').prop('checked', check_all.prop('checked'));
}

function fileChecked(id) {
	if (!$(`#f${id}`).prop('checked')) {
		isInternalChange = true; // prevents `mainBoxChecked` from being fired
		check_all.prop('checked', false);
		isInternalChange = false;
	}
}

check_all.change(mainBoxChecked)