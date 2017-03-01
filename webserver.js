const express = require('express');
const app = express();
app.use(express.static('dist'));
const server = app.listen(8000, function () {
    console.log("Web server is running, port is 8080")
})