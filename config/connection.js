'use strict';

//const util = require('util');
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'dancodes',
  database: 'burgers_db'
});

connection.connect(function(err){
  if (err){
    console.error("error:"+ err.stack);
    return;
  }
  console.log("connected as" +connection.threadID)
})


//connection.query = util.promisify(connection.query);


module.exports = connection;