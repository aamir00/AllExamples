const promise1 = Promise.resolve('Hello World');

const promise2 = new Promise((resolve, reject) => {
	resolve('Task 2 resolved');
});

console.log(promise1);

const promise3 = fetch('https://jsonplaceholder.typicode.com/users').then((res) => res.json());

setTimeout(() => {
	Promise.all([ promise1, promise2, promise3 ]).then((value) => {
		console.log('Inside Promise all');
		console.log(value);
		console.log('End of Promise all');
	});
}, 5000);
