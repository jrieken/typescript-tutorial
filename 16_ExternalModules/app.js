var fs = require("fs");
var view_1 = require("./view");
var model_1 = require("./model");
// load this file and print it
fs.readFile(__filename.replace(/js$/, "ts"), function (err, data) {
    if (err) {
        // something went south
        console.error(err);
        return;
    }
    // convert Buffer -> String -> ISourceText
    var rawSourceText = data.toString('utf8'), sourceText = model_1.newSourceText(data.toString());
    view_1.consoleRender(sourceText);
});
