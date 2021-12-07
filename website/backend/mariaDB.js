// Use the MariaDB Node.js Connector
var mariadb = require('mariadb');
 
// Create a connection pool
var pool = 
  mariadb.createPool({
    host: '10.10.1.161', 
    port: 3306,
    user: 'joyuser', 
    password: 'joyuser',
    database: 'dbpi2'
  });
 
// Expose a method to establish connection with MariaDB SkySQL
module.exports = Object.freeze({
  pool: pool
});