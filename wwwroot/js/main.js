// Breadcrumbs at top of page
const input_header = $('#input');
const process_header = $('#process');
const output_header = $('#output');

// Each "stage"/section of the app
const input_stage = $('#input-section');
const process_stage = $('#process-section');
const output_stage = $('#output-section');

// Check box in "Files Available" list
const check_all = $('#check-all');

/**
 * Sets the current active breadcrumb in the navbar trail 
 * @param {int} stage 0 = input, 1 = process, 2 = output
 */
function setStage(stage) {
	let elements = [input_header, process_header, output_header];
	elements.forEach(function(element) {
		element.toggleClass('active', false);
	});

	switch(stage) {
		case 0:
			input_stage.css('left', '0%');
			process_stage.css('left', '100%');
			output_stage.css('left', '200%');
			input_header.toggleClass('active', true);
			break;
		case 1:
			input_stage.css('left', '-100%');
			process_stage.css('left', '0%');
			output_stage.css('left', '100%');
			process_header.toggleClass('active', true);
			break;
		case 2:
			input_stage.css('left', '-200%');
			process_stage.css('left', '-100%');
			output_stage.css('left', '0%');
			output_header.toggleClass('active', true);
			break;
	}
}

/**
 * Called when the "check all" / top check box is clicked
 */
function mainBoxChecked() {
	$('.file-checkbox').prop('checked', check_all.prop('checked'));
}

check_all.change(mainBoxChecked)

/**
 * Called when an individual file checkbox is checked
 * @param {int} id The ID of the row being checked
 */
function fileChecked(id) {
	if (!$(`#f${id}`).prop('checked'))
		check_all.prop('checked', false);
	else {
		let check = true;
		$('.file-checkbox').each(function() {
			if (!$(this).prop('checked')) 
				check = false;
		});
		check_all.prop('checked', check);
	}
}

