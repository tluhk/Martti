// db.js
const mysql = require('mysql2');

// Loo ühenduse konfiguratsioon selliselt, et andmebaas võimaldaks luua mitu ühendust
const pool = mysql.createPool({
  host: 'localhost',
  user: 'mrt',
  password: 'secret',
  database: 'todos',
});

// Lubame ühenduste  kasutada promise'sid
const promisePool = pool.promise();

module.exports = promisePool;
