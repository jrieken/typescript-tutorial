

function require(name: string): any {
	// do something magic
	return 42;
}

namespace require {

	export function resolve(name: string): string {
		return name;
	}

	export var cache: { [name: string]: any };

	export var extensions: string[];
}
