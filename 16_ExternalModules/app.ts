import * as fs from "fs";
import { consoleRender as print } from "./view";
import { newSourceText } from "./model";

// load this file and print it
fs.readFile(__filename.replace(/js$/, "ts"), (err, data) => {
	
	if (err) {
		// something went south
		console.error(err);
		return;
	}
	
	// convert Buffer -> String -> ISourceText
	var rawSourceText = data.toString('utf8'),
		sourceText = newSourceText(data.toString());

	print(sourceText);
});
