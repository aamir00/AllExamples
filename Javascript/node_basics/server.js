const http = require('http');
const path = require('path');
const fs = require('fs');

const PORT = process.env.PORT || 5999;

console.log(process.env.port);

var server = http.createServer((req, res) => {
	if (req.url == '/') {
		res.writeHead(200, {
			'Content-Type': 'application/json'
		});
		res.end('{"RES" : "ASDfasdfasfd"}');
	}
});

server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
