

new Person("", "")

// (1) one constructor

class Person {

	protected _firstName: string;
	protected _lastName: string;

	constructor(firstName: string, lastName: string) {
		// CAN BE SHORTER!
		this._firstName = firstName;
		this._lastName = lastName;
	}
}


// (2) two constructor signatures using overloads


interface Name {
	firstname: string;
	lastName: string;
}

class Person1 {

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

// (3) two constructor signatures using union types

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
}
