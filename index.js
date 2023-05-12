const express = require('express')
const PORT = 8080
const app = express(); 

//Define request response in root URL (/)
app.get('/', function (req, res) {
    res.send('Hello World')
})

  //Launch listening server on port 8080
app.listen(PORT, function () {
    console.log('App listening on port 8080!')
})

module.exports = app;