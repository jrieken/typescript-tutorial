
var preComputedValues = [];
for (var i = 0; i < 2003000; i++) {
	preComputedValues.push(i * i + i);
}

document.getElementById("test").onclick = function(e) {
	var idx = Math.floor(Math.random() * preComputedValues.length);
	document.getElementById("output").innerHTML = preComputedValues[idx];
};