new Person("", "");
// (1) one constructor
var Person = (function () {
    function Person(firstName, lastName) {
        // CAN BE SHORTER!
        this._firstName = firstName;
        this._lastName = lastName;
    }
    return Person;
})();
var Person1 = (function () {
    function Person1() {
        if (typeof arguments[0] === 'string') {
            this._firstName = arguments[0];
            this._lastName = arguments[1];
        }
        else {
            this._firstName = arguments[0].firstname;
            this._lastName = arguments[0].lastName;
        }
    }
    return Person1;
})();
// (3) two constructor signatures using union types
var Person2 = (function () {
    function Person2(nameOrFirstName, lastName) {
        if (typeof nameOrFirstName === 'string') {
            this._firstName = nameOrFirstName;
            this._lastName = lastName;
        }
        else {
            this._firstName = nameOrFirstName.firstname;
            this._lastName = nameOrFirstName.lastName;
        }
    }
    return Person2;
})();
