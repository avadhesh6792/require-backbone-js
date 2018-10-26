var express = require('express');
var app = express();
var path = require('path');

app.use(express.static('public'));
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(8080, () => {
    console.log('Server is running at port 8080');
});