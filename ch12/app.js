var socketio = require('socket.io');
var express = require('express');
var http = require('http');
var fs = require('fs');

var seats = [
    [1,1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1],
    [1,1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
    [1,1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
    [1,1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
    [1,1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
    [1,1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
    [1,1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1]
];

var app = express();
var server = http.createServer(app);

app.get('/', function(request, response, next){
    fs.readFile('HtmlPage.html', function(error, data){
        response.send(data.toString());
    });
});

app.get('/seats', function(request, response, next){
    response.send(seats);
});

server.listen(52273, function(){
    console.log('Server Running at http://127.0.0.1:52273');    
})

var io = socketio.listen(server);
io.sockets.on('connection', function(socket){
    socket.on('reserve', function(data){
        seats[data.y][data.x] = 2;
        io.sockets.emit('reserve', data);
    })
})
