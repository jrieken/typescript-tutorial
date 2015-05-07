// getters and setters
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Person3 = (function () {
    function Person3(firstName, lastName) {
        this._firstName = firstName;
        this._lastName = lastName;
    }
    Object.defineProperty(Person3.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Person3.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        enumerable: true,
        configurable: true
    });
    return Person3;
})();
// getters and setters
var Person4 = (function (_super) {
    __extends(Person4, _super);
    function Person4() {
        _super.apply(this, arguments);
    }
    Object.defineProperty(Person4.prototype, "fullname", {
        get: function () {
            return this._firstName + " " + this._lastName;
        },
        set: function (value) {
            var parts = value.split(" ");
            this._firstName = parts[0];
            this._lastName = parts[1];
        },
        enumerable: true,
        configurable: true
    });
    return Person4;
})(Person3);
var person = new Person4("Chuck", "Jaeger");
console.log(person.lastName); // Jaeger
person.fullname = "Chuck Norris";
console.log(person.lastName); // Norris
person.fullname = "Chuck";
console.log(person.lastName); //???
