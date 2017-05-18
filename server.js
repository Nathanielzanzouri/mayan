// requirement 
var express = require('express');
var mysql = require('mysql');
var path = require('path');
var morgan = require('morgan');
var router = require('router');
var http = require('http');
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

connection.query('SELECT * FROM mayan_dashboard.portfolioshist WHERE name = "Nath";', function(err, rows, fields) {
  if (!err)
    console.log('The solution is: ', rows);
  else
    console.log('Error while performing Query.');
});

app.get('/api', function(req, res) {
  connection.query('SELECT * FROM mayan_dashboard.portfolioshist WHERE name = "Nath";', function (err, results, fields) {
      if (err) {
          console.log('Error in Query', err.message);
          res.status(500).send(err.message);
      }
      else 
        // render index view and pass in results JSON
        res.json(results);      
  });
});

// connection.end();

// end

// Getting the pages 

// Very important 

app.set('view engine', 'ejs');

// This let use access to the public file where there are js file , css file etc ..

app.use(express.static(__dirname + '/public'));
app.use(express.static('node_modules'));


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

app.get('/names', function(request, response){
  response.send("Hello");
});

console.log('App listening on port ' + PORT);
app.listen(PORT);
