function sortByName(a) {
    var result = a.slice(0);
    result.sort(function (a, b) {
        return a.name.localCompare(b.name);
    });
    return result;
}
var sorted = sortByName(9);
console.log(sorted);
