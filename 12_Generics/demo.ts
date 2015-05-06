
var numberArray = new Array<number>();
numberArray.push(1234);
numberArray.push(5678);
numberArray.push(9011);
numberArray.push("test1");
numberArray.push(true);


var stringArray = numberArray.map(function(n) {
	return n.toString(16);
});

var stringArray2 = numberArray.map(n => n.toString(16));