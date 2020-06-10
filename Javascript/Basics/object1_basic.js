function Person(name, lastname) {
	this.name = name;
	this.lastname = lastname;
	this.city = 'Hyderabad';
	this.date = new Date();
	this.getBirthYear = function() {
		return this.date.getFullYear();
	};
	this.getFullName = function() {
		return `${this.name} ${this.lastname}`;
	};
}

// Instantiating an object

const person1 = new Person('Amair', 'Khan');
console.log(person1.name);
console.log(person1.date.getTime());
console.log(person1.getBirthYear());
console.log(person1.getFullName());
console.log(person1);
