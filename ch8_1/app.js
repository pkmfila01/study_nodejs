var express = require('express');

var app = express();

app.use(express.static(__dirname + '/public'));

app.listen(52273, function(){
    console.log('Server Running at http://127.0.0.1:52273');
});