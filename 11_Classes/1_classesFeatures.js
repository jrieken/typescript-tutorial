var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
// classes and subclasses, access modifiers
var Widget = (function () {
    function Widget() {
    }
    Widget.prototype.render = function () {
        this._draw();
    };
    Widget.prototype._draw = function () {
        this._measureSize();
    };
    Widget.prototype._measureSize = function () {
        return 42;
    };
    return Widget;
})();
var Label = (function (_super) {
    __extends(Label, _super);
    function Label() {
        _super.apply(this, arguments);
    }
    Label.prototype._draw = function () {
        //		compile error: cannot use
        //		this._measureSize();
    };
    return Label;
})(Widget);
new Person("", "");
var Person = (function () {
    function Person() {
        if (typeof arguments[0] === 'string') {
            this._firstName = arguments[0];
            this._lastName = arguments[1];
        }
        else {
            this._firstName = arguments[0].firstname;
            this._lastName = arguments[0].lastName;
        }
    }
    return Person;
})();
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
    Object.defineProperty(Person2.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Person2.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        enumerable: true,
        configurable: true
    });
    return Person2;
})();
// getters and setters
var Person3 = (function (_super) {
    __extends(Person3, _super);
    function Person3() {
        _super.apply(this, arguments);
    }
    Object.defineProperty(Person3.prototype, "fullname", {
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
    return Person3;
})(Person2);
var person = new Person3("Chuck", "Jaeger");
console.log(person.lastName); // Jaeger
person.fullname = "Chuck Norris";
console.log(person.lastName); // Norris
