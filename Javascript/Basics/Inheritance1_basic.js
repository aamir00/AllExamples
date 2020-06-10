function Vehicle(Id, RegistrationNo, company) {
	this.id = Id;
	this.registrationNo = RegistrationNo;
	this.company = company;
}

Vehicle.prototype.getSummary = function() {
	return `Vehicle Id is ${this.id}; Registration No is ${this.registrationNo}`;
};

function TwoWheeler(Id, Registration, company, model) {
	Vehicle.call(this, Id, Registration, company);
	this.model = model;
}

// to copy the prototype of Vehicle in the Two Wheeler. so that summary() can be used.accordion
// Here, constructor used for "Two Wheeler" will now be of Vehicle

TwoWheeler.prototype = Object.create(Vehicle.prototype);

// changing the constructor to TwoWheeler

TwoWheeler.prototype.constructor = TwoWheeler;

const vh1 = new Vehicle(1, 'TS1234', 'Abc');
console.log(vh1);

const vh2 = new TwoWheeler(2, 'TSB', 'Abc', 'Xyz');
console.log(vh2);
