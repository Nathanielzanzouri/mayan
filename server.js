// requirement 
var express = require('express');
var mysql = require('mysql');
var path = require('path');
var morgan = require('morgan');
var router = require('router');
var http = require('http');
var PORT = 8000; 

var app = express();

// mysql connection to the db 

var connection = mysql.createConnection({
  host     : '127.0.0.1',
  user     : 'root',
  password : 'mayan',
  database : 'mayan_dashboard'
});

connection.connect();

// generate a json file from the mysql database

connection.query('SELECT * FROM mayan_dashboard.portfolioshist', function(err, rows, fields) {
  if (!err)
    console.log('The solution is: ', rows);
  else
    console.log('Error while performing Query.');
});

app.get('/portfolioshist', function(req, res) {
  connection.query('SELECT * FROM mayan_dashboard.portfolioshist;', function (err, results, fields) {
      if (err) {
          console.log('Error in Query', err.message);
          res.status(500).send(err.message);
      }
      else 
        // render index view and pass in results JSON
        res.json(results);      
});

});

app.get('/pnla1', function(req, res) {
  connection.query('SELECT * FROM mayan_dashboard.pnla1;', function (err, results, fields) {
      if (err) {
          console.log('Error in Query', err.message);
          res.status(500).send(err.message);
      }
      else 
        // render index view and pass in results JSON
        res.json(results);      
});

});

app.get('/pnla2', function(req, res) {
  connection.query('SELECT * FROM mayan_dashboard.pnla2;', function (err, results, fields) {
      if (err) {
          console.log('Error in Query', err.message);
          res.status(500).send(err.message);
      }
      else 
        // render index view and pass in results JSON
        res.json(results);      
});

});

app.get('/pnldi', function(req, res) {
  connection.query('SELECT * FROM mayan_dashboard.pnldi;', function (err, results, fields) {
      if (err) {
          console.log('Error in Query', err.message);
          res.status(500).send(err.message);
      }
      else 
        // render index view and pass in results JSON
        res.json(results);      
});

});

app.get('/pnldiavg', function(req, res) {
  connection.query('SELECT * FROM mayan_dashboard.pnldiavg;', function (err, results, fields) {
      if (err) {
          console.log('Error in Query', err.message);
          res.status(500).send(err.message);
      }
      else 
        // render index view and pass in results JSON
        res.json(results);      
});

});

app.get('/ms1', function(req, res) {
  connection.query('SELECT * FROM mayan_dashboard.ms1;', function (err, results, fields) {
      if (err) {
          console.log('Error in Query', err.message);
          res.status(500).send(err.message);
      }
      else 
        // render index view and pass in results JSON
        res.json(results);      
});

});

app.get('/ms2', function(req, res) {
  connection.query('SELECT * FROM mayan_dashboard.ms2;', function (err, results, fields) {
      if (err) {
          console.log('Error in Query', err.message);
          res.status(500).send(err.message);
      }
      else 
        // render index view and pass in results JSON
        res.json(results);      
});

});

app.get('/anl', function(req, res) {
  connection.query('SELECT * FROM mayan_dashboard.anl;', function (err, results, fields) {
      if (err) {
          console.log('Error in Query', err.message);
          res.status(500).send(err.message);
      }
      else 
        // render index view and pass in results JSON
        res.json(results);      
});

});

app.get('/sd1', function(req, res) {
  connection.query('SELECT * FROM mayan_dashboard.sd1;', function (err, results, fields) {
      if (err) {
          console.log('Error in Query', err.message);
          res.status(500).send(err.message);
      }
      else 
        // render index view and pass in results JSON
        res.json(results);      
});

});

app.get('/sd2', function(req, res) {
  connection.query('SELECT * FROM mayan_dashboard.sd2;', function (err, results, fields) {
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

console.log('App listening on port ' + PORT);
app.listen(PORT);
