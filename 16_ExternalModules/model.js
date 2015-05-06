/**
 * Returns a source text object built from the {{value}}.
 */
function newSourceText(value) {
    return new SourceText(makeLines(value));
}
exports.newSourceText = newSourceText;
//export {SourceText, ILine};
// ---- internal ----------------------------------------------------------------------
var ImmutableLine = (function () {
    function ImmutableLine(_line) {
        this._line = _line;
        // _line shorthand property
    }
    Object.defineProperty(ImmutableLine.prototype, "lineNumber", {
        get: function () {
            return this._line.lineNumber;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImmutableLine.prototype, "value", {
        get: function () {
            return this._line.value;
        },
        enumerable: true,
        configurable: true
    });
    return ImmutableLine;
})();
var SourceText = (function () {
    function SourceText(lines) {
        this._lines = lines;
    }
    SourceText.prototype.getLine = function (lineNumber) {
        return new ImmutableLine(this._lines[lineNumber]);
    };
    SourceText.prototype.getLineCount = function () {
        return this._lines.length;
    };
    return SourceText;
})();
function makeLines(value) {
    var regexp = /\r\n|\r|\n/g, match, index = 0, lines = [];
    while ((match = regexp.exec(value))) {
        lines.push({
            lineNumber: lines.length,
            value: value.substring(index, regexp.lastIndex)
        });
        index = regexp.lastIndex;
    }
    // don't forget the last line
    lines.push({
        lineNumber: lines.length,
        value: value.substring(index)
    });
    return lines;
}
