//import the express module

var express = require('express');
 var conn = require('../config/db_connection');

 //get the connection object
 var connection = conn.getConnection();
//connect to database
 connection.connect();

 //create the router instance
 
 var router = express.Router();

 //create the rest api

 router.post('/', function(req,res){
     //read p_id from angular(browser)

     var p_id= req.body.p_id;
    //  var p_name = req.body.p_name;
    //  var p_cost = req.body.p_cost;

     connection.query("delete from products where p_id="+p_id+" ", function(err,result){
         if(err){
             res.json({'delete':'failure'})
         }else{
            res.json({'delete':'success'})
         }
     }
    )})


 //export the router module
 module.exports = router; 