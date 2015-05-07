var SourceText = (function () {
    function SourceText(value) {
        this._makeLines(value);
    }
    SourceText.prototype._makeLines = function (value) {
        this._lines = [];
        var regexp = /\r\n|\r|\n/g, match, index = 0;
        while ((match = regexp.exec(value))) {
            this._lines.push({
                lineNumber: this._lines.length,
                text: value.substring(index, regexp.lastIndex)
            });
            index = regexp.lastIndex;
        }
        // last line
        this._lines.push({
            lineNumber: this._lines.length,
            text: value.substr(index)
        });
    };
    SourceText.prototype.getLine = function (n) {
        return this._lines[n];
    };
    return SourceText;
})();
var line = new SourceText("var a = 1234").getLine(0);
console.log(line.lineNumber + ": " + line.text);
line.text = 'ddd'; // modify?
console.log(line.lineNumber + ": " + line.text);
