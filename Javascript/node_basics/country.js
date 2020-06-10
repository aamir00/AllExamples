const person = {
	name: 'Khan',
	age: 30
};

class Country {
	constructor(name, capital) {
		this.name = name;
		this.capital = capital;
	}

	printDetails() {
		console.log('Name of the country is ' + this.name + ', its capital is ' + this.capital);
	}
}

// To Export person object
// module.exports = person;
module.exports = Country;
