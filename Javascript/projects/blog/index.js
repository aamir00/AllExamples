const express = require('express');
const mysql = require('mysql');
const conn_info = require('./db-config');
const app = express();
const port = process.env.port || 5500;

// Basic testing
app.listen(port, function() {
	console.log(`Server started on port ${port}`);
});

// DB Test

var connection = mysql.createConnection(conn_info);
connection.connect();
connection.query('USE hib_blog');
connection.query('SELECT * FROM blog', function(error, results, fields) {
	if (error) throw error;
	console.log('The solution is: ', results[0].Content);
});
connection.end();

app.get('/', (req, res) => {
	res.send('Inside root');
});
