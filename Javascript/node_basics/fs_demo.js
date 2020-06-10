const fs = require('fs');
const path = require('path');

// Create folder
fs.mkdir(path.join(__dirname, 'test'), {}, function(err) {
	if (err) throw err;
	console.log('Folder Created');
});

// Write to file - overrides exsiting
fs.writeFileSync(path.join(__dirname, 'test', 'test.txt'), 'Hello World', (err) => {
	if (err) throw err;
	console.log('File created');
});

// Readfile

fs.readFile(path.join(__dirname, 'test', 'test.txt'), 'utf8', (err, data) => {
	console.log(data);
});

//rename file

fs.rename(path.join(__dirname, 'test', 'test.txt'), path.join(__dirname, 'test', 'hello.txt'), (err) => {
	if (err) throw err;
	console.log('File Creation Successful');
});
