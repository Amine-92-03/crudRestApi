const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const employeeRoute = require('./routes/employeeRoute')
const dbconnection = require('./dbConnexion/dbconnection')
app.use(bodyParser.json())

dbconnection.connect()
 
app.listen(3333, ()=>{
    console.log('Express server is running P: 3333');
})

app.use('/employee',employeeRoute)


