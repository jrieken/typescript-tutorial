
interface IEntity {
	name: string;
}

function sortByName(a: IEntity[]) {
	var result = a.slice(0);
	result.sort(function(x, y) {
		return x.name.localeCompare(y.name);
	});
	return result;
}

var entities = [
	{ name: 'Volvo', price: 70 },
	{ name: 'Porsche', price: 170 },
	{ name: 'Smart', price: 10 },
]

//var sorted = sortByName(entities);
//sorted[0].

