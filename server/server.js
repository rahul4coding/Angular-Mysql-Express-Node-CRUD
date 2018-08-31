//import the modules

var express = require('express');
var bodyparser = require('body-parser');

//create the rest object
var app = express();


// enable cors

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });




//set the mime type

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));

// import fetch module

var fetch = require('./fetch/fetch');  //import the fetch module
app.use('/fetch', fetch ); //use the fetch module


//iport the insert module
var insert = require('./insert/insert');
app.use('/insert', insert);


var update = require('./update/update');
app.use('/update',update);

var remove = require('./delete/delete');
app.use('/delete', remove);

//assign port number

app.listen(8082);
console.log("server listening the port number 8082");

