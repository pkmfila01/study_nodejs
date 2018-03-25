var OrientDB = require('orientjs');

var server = OrientDB({
   host:       'localhost',
   port:       2424,
   username:   'root',
   password:   'wjsrl10'
});

var db = server.use('o2');
/*
db.record.get('#57:0').then(function(record){
    console.log('Loaded record:', record);
    
});
*/
/*
var sql = "select from topic where @rid=:rid";
var param = {
    params:{
        rid:'#15:0'
    }
}
db.query(sql, param).then(function(results){
    console.log(results);
});
*/
/*
var sql = "insert into topic (title, description) values(:title, :desc)";
db.query(sql, {
    params:{
        title:'Express',
        desc:'Express is framework for web'
    }
}).then(function(results){
        console.log(results);
});
*/
/*
var sql = "update topic set author = :author where title=:title";
db.query(sql, {
    params:{
        author:"author-update",
        title:"Express"
    }
}).then(function(results){
    console.log(results);
});
*/
var sql = "delete from topic_gen where @rid=:rid";
db.query(sql, {
    params:{
        rid:'#17:0'
    }
}).then(function(results){
    console.log(results);
});
