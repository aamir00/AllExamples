class Person {
	constructor(name, age, gender) {
		this.name = name;
		this.age = age;
		this.gender = gender;
	}

	getDetails() {
		return `${this.name} ${this.age} ${this.gender}`;
	}
}

class Student extends Person {
	constructor(name, age, gender, id, subject) {
		super(name, age, gender);
		this.id = id;
		this.subject = subject;
	}
	getStudent() {
		return `${this.id} ${this.subject}`;
	}
}

const student = new Student('Abc', 4, 'M', 1, 'Xuz');
console.log(student);
