
// simple
var a: boolean;
var b: number = 1234;


// define & use class-type
class Foo {
    bar() {
        return 'foobar';
    }
}
var f: Foo;

// inline
var i: { m(): number; const: number; } = undefined;


// ambient type
declare var jquery: any;
jquery('li > ul');


// typeof-type
declare var $: typeof jquery;
