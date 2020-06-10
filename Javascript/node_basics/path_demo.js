const path = require('path');

console.log(__filename, __dirname);
console.log(path.dirname(__filename));

console.log(path.extname(__filename));

// Create path object

console.log(path.parse(__filename));

//Concate paths - good for delimiters

console.log(path.join(__dirname, 'test', 'hello.html'));
