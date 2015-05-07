
// getters and setters

class Person3 {

	protected _firstName: string;
	protected _lastName: string;

	constructor(firstName: string, lastName: string) {
		this._firstName = firstName;
		this._lastName = lastName;
	}

	get firstName() {
		return this._firstName;
	}

	get lastName() {
		return this._lastName;
	}
}

// getters and setters

class Person4 extends Person3 {

	public get fullname() {
		return `${this._firstName} ${this._lastName}`;
	}

	public set fullname(value: string) {
		var parts = value.split(" ");
		this._firstName = parts[0];
		this._lastName = parts[1];
	}
}

var person = new Person4("Chuck", "Jaeger");
console.log(person.lastName); // Jaeger

person.fullname = "Chuck Norris";
console.log(person.lastName) // Norris

person.fullname = "Chuck";
console.log(person.lastName); //???