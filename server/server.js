var express = require('express');
var path = require('path');
var mysql = require('mysql');
var bodyParser = require('body-parser');

var connection = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password: 'root',
    database: 'socks_shop'
//    insecureAuth : true
});

var app = express();
connection.connect(function (err) {

    if (err) throw err
    console.log('connection success')
});




app.use(bodyParser.json());






app.get('/getGoods', function (req, resp) {
    connection.query('SELECT * FROM socks_shop.goods;', function (err, rows, fields) {
        console.log('coll this at start')
        console.log(rows)
        resp.send(rows)
    })
 
});

//app.get('/getManGoods', function (req, resp) {
//    let obj=req
//    
//    connection.query("SELECT * FROM socks_shop.goods where category_id="+obj , function (err, rows, fields) {
//        console.log(rows)
//        resp.send(rows)
//    })
// 
//});


app.get('/getManGoods', function (req, resp) {
    connection.query("SELECT * FROM socks_shop.goods where category_id=2" , function (err, rows, fields) {
        console.log(rows)
        resp.send(rows)
    })
 
});


app.get('/getWomanGoods', function (req, resp) {
    
    connection.query("SELECT * FROM socks_shop.goods where category_id=1;" , function (err, rows, fields) {
        console.log(rows)
        resp.send(rows)
    })
 
});


app.get('/getKidsGoods', function (req, resp) {
    
    connection.query("SELECT * FROM socks_shop.goods where category_id=3;" , function (err, rows, fields) {
        console.log(rows)
        resp.send(rows)
    })
 
});



app.get('/getUsers', function (req, resp) {
    connection.query('SELECT * FROM socks_shop.users;', function (err, rows, fields) {
        console.log('coll this at start')
        console.log(rows)
        resp.send(rows)
    })
 
});

//app.post('/postUsers', function (req, resp) {
//    connection.query('SELECT * FROM socks_shop.users;', function (err, rows, fields) {
//        console.log('coll this at start')
//        console.log(rows)
//        resp.send(rows)
//    })
// 
//});


//app.post('/postUser', function (req, res) {
//    let user = req.body;
//   connection.query("insert into userregistration (name, sname, login, pass) values('" + user.name + "','" + user.sname + "','" + user.mail + "','" + user.phone + "','" + user.pass + "','" + user.day + '.' + user.month + '.' + user.year + "','" + user.gender + "');"
//                    
//                    , function (err, rows, fields) {
//   });
//   console.log('user server' + user)
//});
//
//



//
//app.post('/postUser', function (req, res) {
//    let user = req.body;
//   connection.query("insert into userregistration (name, sname, mail, phone, password, dateBirth, gender) values('" + user.name + "','" + user.sname + "','" + user.mail + "','" + user.phone + "','" + user.pass + "','" + user.day + '.' + user.month + '.' + user.year + "','" + user.gender + "');", function (err, rows, fields) {
//   });
//   console.log('user server' + user)
//});


     
     app.post('/postUser', function (req, res) {
    let user = req.body;
  connection.query("insert into users(name, sname, login, pass) value ('" + user.name + "','" + user.sname + "','" + user.login + "','" + user.pass + "');")
});
     
//     app.post('/postUser', function (req, res) {
//    let user = req.body;
//  connection.query("insert into users(login, password, name) value ('" + user.login + "','" + user.password + "','" + user.name + "');")
//});
// 





app.get('/getOrders', function (req, resp) {
    connection.query('SELECT * FROM socks_shop.orders;', function (err, rows, fields) {
        console.log('coll this at start')
        console.log(rows)
        resp.send(rows)
    })
 
});




app.use(bodyParser.json());

app.listen('51255', function () {
    console.log('listen to port 51255')
});

app.use(function (req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   next();
});



