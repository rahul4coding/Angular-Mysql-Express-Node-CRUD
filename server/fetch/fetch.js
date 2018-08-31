var express = require('express');

//import the db_connection
var conn = require('../config/db_connection');

//get the connection object

var connection = conn.getConnection();

//get the databsae

connection.connect();

var router = express.Router();

//create the rest api

router.get("/", function(req,res){
    connection.query("select * from products", function(err,recordsArray,fields){
        res.send(recordsArray);

    })

})

//exports the module
module.exports= router;

