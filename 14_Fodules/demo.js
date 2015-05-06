// https://nodejs.org/api/globals.html
function require(name) {
    // do something magic
    return 42;
}
var require;
(function (require) {
    function resolve(name) {
        return name;
    }
    require.resolve = resolve;
    require.cache;
    require.extensions;
})(require || (require = {}));
