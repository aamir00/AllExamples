class Person {
	static college = 'MJCET';
	constructor(name, lastname) {
		this.name = name;
		this.lastname = lastname;
		this.city = 'Hyderabad';
		this.date = new Date();
	}

	getBirthYear() {
		return this.date.getFullYear();
	}

	getFullName() {
		return `${this.name} ${this.lastname}`;
	}

	static getCollege() {
		return `Muffakham Jah College`;
	}
}

// Instantiating an object

const person1 = new Person('Amair', 'Khan');
console.log(person1.name);
console.log(person1.date.getTime());
console.log(person1.getBirthYear());
console.log(person1.getFullName());
console.log(person1);
console.log(Object.keys(person1));
console.log(Object.values(person1));
console.log(Person.college);
console.log(Person.getCollege());
