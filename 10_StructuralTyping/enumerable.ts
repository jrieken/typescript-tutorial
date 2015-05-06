

var numbers = [1, 2, 3, 5];

numbers.forEach(function(value) {
	console.log(value);
});
































































interface IEnumerable<E> {
	forEach(callback: (elements: E) => any): void
}













































//class EmptyEnumerable<E> implements IEnumerable<E> {
//	
//	forEach(callback) {
//		// nothing
//	}
//}
//
//var Empty = {
//	forEach: function() { }
//}
//
//var enumerable: IEnumerable<number>;
//
//// they all 'look' like an enumerable
//enumerable = [1, 2, 3, 4];
//enumerable = new EmptyEnumerable<number>();
//enumerable = Empty;
//
//enumerable.forEach(element => {
//	console.log(element);
//});
//
















































//enumerable = combine(enumerable, [5, 6, 7, 8], Empty, [9, 10]);
//
//
//function combine<E>(...args: IEnumerable<E>[]) {
//	
//	function forEach(callback:(element:E)=>any) {
//		for (var i = 0; i < args.length; i++) {
//			args[i].forEach(callback);
//		}
//	}
//	
//	return {
//		forEach
//	};
//}