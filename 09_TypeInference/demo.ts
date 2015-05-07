// simple types
var aNumber = 1234;
aNumber = true;

var aBoolean = true;
aBoolean = 1234;




var arrayOfString = ["far", "boo"];
arrayOfString[0].charCodeAt(0);




// inverted from return expression
function multiply(n1, n2) {
	return n1 * n2;
}

var p = multiply(2, 6);
p.toExponential();




// union type
var crazyArray = ["far", ["boo"]]
crazyArray[0].length 


// structure
var data = {
	name: 'Hammer',
	price: 12
} 

var name = data.name;



// all togther
function doIt() {
	return {
		a: 1, 
		b: true,
		mixed: ["array", [true]]
	}
};

var d = doIt();

var {a, mixed} = doIt();
mixed.concat();
