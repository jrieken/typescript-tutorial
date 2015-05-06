
export interface ILine {
	lineNumber: number;
	value: string;
}

export interface ISourceText {
	getLine(lineNumber: number): ILine;
	getLineCount(): number;
}


/**
 * Returns a source text object built from the {{value}}.
 */
export function newSourceText(value: string): ISourceText {
	return new SourceText(makeLines(value));
}

//export {SourceText, ILine};

// ---- internal ----------------------------------------------------------------------

class ImmutableLine implements ILine {

	constructor(private _line: ILine) {
		// _line shorthand property
	}

	get lineNumber() {
		return this._line.lineNumber;
	}

	get value() {
		return this._line.value;
	}
}

class SourceText implements ISourceText {

	private _lines: ILine[];

	constructor(lines: ILine[]) {
		this._lines = lines;
	}

	getLine(lineNumber: number): ILine {
		return new ImmutableLine(this._lines[lineNumber]);
	}

	getLineCount(): number {
		return this._lines.length;
	}
}

function makeLines(value: string): ILine[] {

	var regexp = /\r\n|\r|\n/g,
		match: RegExpExecArray,
		index = 0,
		lines: ILine[] = [];

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
