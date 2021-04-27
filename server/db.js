const mysql = require('mysql');

const pool = mysql.createConnection({
  host: 'localhost',
  port: '3306',
  user: 'root',
  password: 'root',
  database: 'table_app'
})
  
module.exports = pool