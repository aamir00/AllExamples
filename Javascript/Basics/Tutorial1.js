'use strict';

var a = {
	hello: 'World',
	world: 9.5,
	abc: undefined
};
let b = 'Abc';

/*
Datatypes: Number, Object, Boolean, Null, String, undefined, Symbol
*/

console.log('---', typeof a.abc);
console.log(typeof a);
console.log(b, typeof b);
a.world++; // incrementing number
console.log(a.world);

//strings

var string1 = 'Hello World';
var string2 = '!';
var string3 = string1 + string2;
var length1 = string3.length;
var string4 = '5';

console.log(string1);
console.log(string1[7]);
console.log(string3);
console.log(string1 + '!');
console.log(string3, length1);
console.log(typeof parseInt(string4));
console.log();
//array

console.log('-----------------Arrays--------------');
var a = [ 1, 2, 3, 4 ];
var abc = '';
console.log(abc.length);

// JSON.parse(a);

console.log(a, typeof a);
a.pop();
console.log(a);

console.log(JSON.stringify(a));
console.log(a);
for (var i = 0; i < a.length; i++) {
	console.log(a[i]);
}

// Ternary Operator

console.log('------Ternanry Operator--------');
var num = 0;
num > 0 ? console.log('positive') : num === 0 ? console.log('zero') : console.log('positive');

// Object Freeze

console.log('--------Object Freeze-----------');
const ab = {
	a: 0
};

// Object.freeze(ab);
try {
	ab.a = 1;
} catch (e) {
	console.log('asfdas', e);
}

Object.freeze(ab);

console.log(ab);

//Strings

var json1 = {
	a: 'asf',
	b: 'abd'
};

var s1 = `a is ${json1.a}`;
console.log(s1);

// classes and objects
//
// var test1=function() {
//     var field1:"asdf",
//     constructor(name){
//       this.name=name;
//     }
//     set field1(value) {
//       this.field1=value;
//     }
//
//
// }

class test1 {
	constructor(temp) {
		this._hell = temp;
		this.field2 = 'asfd';
		// this.field2;
	}
	// get field2() {
	//     return this._field2;
	// }

	// set field2(value) {
	//
	//     this._field2=value;
	//
	//
	// }
}

var a = new test1('string');
a.__field2 = 'setter';
console.log();
console.log(a);
a.__field2.to;
