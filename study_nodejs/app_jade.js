var express = require('express');
var app = express();

app.set('view engine', 'jade');
app.set('views', './views');

app.get('/', function(req, res){
    res.render('index', {title:'Hey', message:'Hello there!'});
});

app.get('/topic', function(req, res){
    res.send(req.query.id);
});
app.get('/user/:id', function(req, res){
    res.send('user:' + req.params.id);
});

app.listen(3000, function(){
    console.log('Example app listening on port 3000');
});