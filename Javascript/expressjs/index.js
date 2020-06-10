const express = require('express');
const path = require('path');
const logger = require('./middleware/logger');

const app = express();
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
	console.log(`Server started on port ${PORT}`);
});

// Initializing middleware
app.use(logger);

//body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/* 
*** This is not useful as for this we have to add every route and serve every file ***

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'public', 'index.html'));
	// res.send(`<h4> Hello World! </h4> ${req.header('Host')}`);
});

*/

// Adding static route directly in public
app.use(express.static(path.join(__dirname, 'public')));

//APIs
app.use('/api/test', require('./api/test/sample-api'));
