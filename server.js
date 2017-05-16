// requirement 
var express = require('express');
var mysql = require('mysql');
var path = require('path');
var morgan = require('morgan');
var PORT = 8000; 

var app = express();



// mysql

var connection = mysql.createConnection({
  host     : '127.0.0.1',
  user     : 'root',
  password : 'mayan',
  database : 'mayan_dashboard'
});

connection.connect();

connection.query('SELECT * FROM mayan_dashboard.portfolioshist;', function(err, rows, fields) {
  if (!err)
    console.log('The solution is: ', rows);
  else
    console.log('Error while performing Query.');
});

connection.end();

// end

app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

app.get('/risk', function(request, response){
  response.render('risk');
});

app.get('/monitor', function(request, response){
  response.render('monitor');
});

app.get('/monitorpnl', function(request, response){
  response.render('monitorpnl');
});

app.get('/indicator', function(request, response){
  response.render('indicator');
});

app.get('', function(request, response){
  response.render('risk');
});


console.log('App listening on port ' + PORT);
app.listen(PORT);
