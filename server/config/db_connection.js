var mysql = require('mysql');

var prop = require('./db_properties');

//export json object


module.exports = {
  getConnection: () => {
    return mysql.createConnection({
      host: prop.host,
      user: prop.user,
      password: prop.password,
      database: prop.database

    })
  }
};
