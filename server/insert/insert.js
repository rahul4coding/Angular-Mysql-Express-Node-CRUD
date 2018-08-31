var express = require('express');

var conn = require('../config/db_connection');

var connection = conn.getConnection();

//connect to database
connection.connect();

// Create the Router instance
var router = express.Router();

//create the Rest APi

router.post('/', function (req, res) {
  //read the p_id, P_name, p_cost from angular

  var p_id = req.body.p_id;
  var p_name = req.body.p_name;
  var p_cost = req.body.p_cost;

  // /store into products table

  connection.query("insert into products values (" + p_id + ",'" + p_name + "'," + p_cost + ")",
    function (err, result) {
      if (err) {
        res.json({
          'insert': 'failure'
        });


      } else {
        res.json({
          'insert': 'success'
        });


      }
    }
  )
})

module.exports = router;
