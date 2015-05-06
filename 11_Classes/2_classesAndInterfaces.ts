
interface ILine {
	lineNumber: number;
	text: string;
}

class SourceText {
	
	private _lines: ILine[];
	
	public constructor(value:string) {
		this._makeLines(value);
	}
	
	private _makeLines(value: string): void {
		this._lines = [];
		
		var regexp = /\r\n|\r|\n/g,
			match: RegExpExecArray,
			index = 0;
		
		while((match = regexp.exec(value))) {
			this._lines.push({
				lineNumber: this._lines.length,
				text: value.substring(index, regexp.lastIndex)
			});
			index = regexp.lastIndex + match[0].length;
		}
	}
	
	public getLine(n: number): ILine {
		return this._lines[n];
	}
}

var line = new SourceText("var a = 1234").getLine(0);
line.text = 'ddd' // modify?