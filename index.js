const express = require('express');
const app = express();



//Assign port from env if available
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server running at port ${port}`);
})

