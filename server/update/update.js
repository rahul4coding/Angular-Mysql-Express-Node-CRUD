//import the express module

var express = require('express');
 var conn = require('../config/db_connection');

 //get the connection object
 var connection = conn.getConnection();

 connection.connect();

 //create the router instance
 
 var router = express.Router();

 //create the rest api

 router.post('/', function(req,res){
     //read p_id, p_aname , p_cost from angular(browser)

     var p_id= req.body.p_id;
     var p_name = req.body.p_name;
     var p_cost = req.body.p_cost;

     connection.query("update products set p_name='"+p_name+"', p_cost="+p_cost+" where p_id="+p_id+" ", function(err,result){
         if(err){
             res.json({'update':'failure'})
         }else{
            res.json({'update':'success'})
         }
     }
 )})


 //export the router module
 module.exports = router; 