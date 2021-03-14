const express = require('express');
const app = express();

//require db connection
require('./config/db');

//allows the use of JSON in the express app
app.use(express.json());

//define api routes
app.use('/api/', require('./routes/item'));

//Assign port from env if available
const port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log(`Server running at port ${port}`);
});
