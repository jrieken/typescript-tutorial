var IdentitySet = (function () {
    function IdentitySet() {
        this._elements = [];
    }
    IdentitySet.prototype.contains = function (element) {
        return this._elements.indexOf(element) !== -1;
    };
    IdentitySet.prototype.add = function (element) {
        if (this.contains(element)) {
            return false;
        }
        this._elements.push(element);
        return true;
    };
    IdentitySet.prototype.remove = function (element) {
        var idx = this._elements.indexOf(element);
        if (idx !== -1) {
            this._elements.splice(idx, 1);
            return true;
        }
        return false;
    };
    return IdentitySet;
})();
var HashSet = (function () {
    function HashSet(keyFn) {
        this._keyFn = keyFn;
        this._elements = Object.create(null);
    }
    HashSet.prototype.contains = function (element) {
        return Object.prototype.hasOwnProperty.call(this._elements, this._keyFn(element));
    };
    HashSet.prototype.add = function (element) {
        if (this.contains(element)) {
            return false;
        }
        this._elements[this._keyFn(element)] = element;
        return true;
    };
    HashSet.prototype.remove = function (element) {
        if (this.contains(element)) {
            delete this._elements[this._keyFn(element)];
            return true;
        }
        return false;
    };
    return HashSet;
})();
var HashSet2 = (function () {
    function HashSet2() {
        this._element = new Array(10);
    }
    HashSet2.prototype._key = function (element) {
        return element.hashCode() % this._element.length;
    };
    HashSet2.prototype.contains = function (element) {
        var key = this._key(element), bucket = this._element[key];
        return bucket && bucket.some(function (e) { return e.equals(element); });
    };
    HashSet2.prototype.add = function (element) {
        var key = this._key(element), bucket = this._element[key];
        if (!bucket) {
            bucket = [element];
            this._element[key] = bucket;
            return true;
        }
        else if (bucket.some(function (e) { return e.equals(element); })) {
            return false;
        }
        else {
            bucket.push(element);
        }
    };
    HashSet2.prototype.remove = function (element) {
        throw Error("not yet implemented");
    };
    return HashSet2;
})();
