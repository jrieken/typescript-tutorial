
// classes and subclasses, access modifiers
class Widget {

	public render() {
		this._draw();
	}

	protected _draw() {
		this._measureSize();

	}

	private _measureSize() {
		return 42;
	}
}

class Label extends Widget {

	_draw() {
		//		compile error: cannot use
		//		this._measureSize();
	}

	//	compile error: cannot declare
	//	_measureSize() {
	//		
	//	}
}


// constructor - only 1 but overloads and union types

interface Name {
	firstname: string;
	lastName: string;
}

new Person("", "")

class Person {

	protected _firstName: string;
	protected _lastName: string;

	constructor(name: Name);
	constructor(firstname: string, lastName: string);
	constructor() {
		if (typeof arguments[0] === 'string') {
			this._firstName = arguments[0];
			this._lastName = arguments[1];
		} else {
			this._firstName = (<Name> arguments[0]).firstname;
			this._lastName = (<Name> arguments[0]).lastName;
		}
	}
}

class Person2 {

	protected _firstName: string;
	protected _lastName: string;

	constructor(nameOrFirstName: Name|string, lastName?: string) {
		if (typeof nameOrFirstName === 'string') {
			this._firstName = nameOrFirstName;
			this._lastName = lastName;
		} else {
			this._firstName = nameOrFirstName.firstname;
			this._lastName = nameOrFirstName.lastName;
		}
	}

	get firstName() {
		return this._firstName;
	}

	get lastName() {
		return this._lastName;
	}
}

// getters and setters

class Person3 extends Person2 {

	public get fullname() {
		return `${this._firstName} ${this._lastName}`;
	}

	public set fullname(value: string) {
		var parts = value.split(" ");
		this._firstName = parts[0];
		this._lastName = parts[1];
	}
}

var person = new Person3("Chuck", "Jaeger");
console.log(person.lastName); // Jaeger

person.fullname = "Chuck Norris";
console.log(person.lastName) // Norris