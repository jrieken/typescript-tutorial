
// classes and subclasses, access modifiers
class Widget {

	public render() {
		this._draw();
	}

	protected _draw() {
		this._measureSize();
		// ...
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
