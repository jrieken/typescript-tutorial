
interface ISet<E> {
	contains(element: E): boolean;
	add(element: E): boolean;
	remove(element: E): boolean;
}

class IdentitySet<E> implements ISet<E> {

	private _elements: E[] = [];

	contains(element: E): boolean {
		return this._elements.indexOf(element) !== -1;
	}

	add(element: E): boolean {
		if (this.contains(element)) {
			return false;
		}
		this._elements.push(element);
		return true;
	}

	remove(element: E): boolean {
		var idx = this._elements.indexOf(element);
		if (idx !== -1) {
			this._elements.splice(idx, 1);
			return true;
		}
		return false;
	}
}

class HashSet<E> implements ISet< E > {

	private _keyFn: (element: E) => string;
	private _elements: { [key: string]: E };

	constructor(keyFn: (element: E) => string) {
		this._keyFn = keyFn;
		this._elements = Object.create(null);
	}

	contains(element: E): boolean {
		return Object.prototype.hasOwnProperty.call(this._elements, this._keyFn(element));
	}

	add(element: E): boolean {
		if (this.contains(element)) {
			return false;
		}
		this._elements[this._keyFn(element)] = element;
		return true;
	}

	remove(element: E): boolean {
		if (this.contains(element)) {
			delete this._elements[this._keyFn(element)];
			return true;
		}
		return false;
	}
}

interface IEqualable {
	equals(other: IEqualable): boolean;
	hashCode(): number;
}

class HashSet2<E extends IEqualable> implements ISet<E> {

	private _element: E[][] = new Array<E[]>(10);

	private _key(element: E) {
		return element.hashCode() % this._element.length;
	}

	contains(element: E): boolean {
		var key = this._key(element),
			bucket = this._element[key];

		return bucket && bucket.some(e => e.equals(element));
	}

	add(element: E): boolean {
		var key = this._key(element),
			bucket = this._element[key];

		if (!bucket) {
			bucket = [element];
			this._element[key] = bucket;
			return true;
		} else if (bucket.some(e => e.equals(element))) {
			return false;
		} else {
			bucket.push(element);
		}
	}

	remove(element: E): boolean {
		throw Error("not yet implemented");
	}
}