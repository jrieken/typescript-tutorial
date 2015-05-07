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
        // ...
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
