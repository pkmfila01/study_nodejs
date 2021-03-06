var express = require('express');
var OrientDB = require('orientjs');
var bodyParser = require("body-parser");
var server = OrientDB({
   host:       'localhost',
   port:       2424,
   username:   'root',
   password:   'wjsrl10'
});
var db = server.use('o2');

var app = express();

app.set('view engine', 'jade');
app.set('views', './views');
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/topic/add', function(req, res){
    var sql = 'select from topic';
    db.query(sql).then(function(topics){
        if(topics.length == 0){
            console.log('The is no topic record');
            res.status(500).send('Internal Server Error');
        }
        res.render('add', {topics:topics});
    });
});

app.post('/topic/add', function(req, res){
    console.log(req.body);
    
    var title = req.body.title;
    var description = req.body.description;
    var author = req.body.author;
    var sql = "insert into topic(title, description, author) values(:title, :desc, :author)";
    db.query(sql, {
        params:{
            title:title,
            desc:description,
            author:author
        }
    }).then(function(results){
        res.redirect('/topic/' + encodeURIComponent(results[0]['@rid']));
    });
});

app.get(['/topic', '/topic/:id'], function(req, res){
    var id = req.params.id;

    var sql = "select from topic";
    db.query(sql).then(function(topics){
        if(id){
            var sql = "select from topic where @rid=:rid"
            db.query(sql, {params:{rid:id}}).then(function(topic){
                console.log(topic)
                res.render('view', {topics:topics, topic:topic[0]});
            });
        } else{            
            res.render('view', {topics:topics});
        }
    });
});

app.listen(3000, function(){
    console.log('Example app listening on port 3000');
});