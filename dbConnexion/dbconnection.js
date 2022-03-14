const mysql = require('mysql')


module.exports.dbconnection = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password:'Aminou_5//',
    database : 'EmployeeDB',
    port: 3306
})
