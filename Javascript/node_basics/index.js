console.log('Hello node');
var Country = require('./country');
// Accessing the exported object from person.js

var Ind = new Country('India', 'Delhi');
Ind.printDetails();
