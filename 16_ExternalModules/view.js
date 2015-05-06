/**
 * Print each line to console
 */
function consoleRender(sourceText) {
    var lineCount = sourceText.getLineCount();
    for (var i = 0; i < sourceText.getLineCount(); i++) {
        var _a = sourceText.getLine(i), lineNumber = _a.lineNumber, value = _a.value;
        console.log("\033[31m" + pad(lineNumber, lineCount) + ":\033[0m " + value + "\u21B2");
    }
}
exports.consoleRender = consoleRender;
function pad(value, max) {
    var stringValue = value.toString(), diff = max.toString().length - stringValue.length;
    return diff > 0
        ? new Array(1 + diff).join(' ') + stringValue
        : stringValue;
}
