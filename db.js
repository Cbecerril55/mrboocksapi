const mysql = require('mysql')
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '12583',
  database: 'libreria'
})

connection.connect(function (error){
    if (error) {
        throw error;
    } else {
        console.log("MYSQL database has been connected!")
    }
})

module.exports = connection;

/* connection.query('SELECT 1 + 1 AS solution', (err, rows, fields) => {
  if (err) throw err

  console.log('The solution is: ', rows[0].solution)
}) */

connection.end()