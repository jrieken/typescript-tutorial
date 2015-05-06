import model = require('./model');

/**
 * Print each line to console
 */
export function consoleRender(sourceText: model.ISourceText) {
	
	var lineCount = sourceText.getLineCount();
	
	for (var i = 0; i < sourceText.getLineCount(); i++) {
		var {lineNumber, value} = sourceText.getLine(i);
		console.log(`\033[31m${pad(lineNumber, lineCount)}:\033[0m ${value}\u21B2`);
	}
}

function pad(value: number, max: number): string {
	
	var stringValue = value.toString(),
		diff = max.toString().length - stringValue.length;

	return diff > 0
		? new Array(1 + diff).join(' ') + stringValue
		: stringValue;
}