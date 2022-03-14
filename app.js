const express = require('express')
// const dbconnection = require('./dbConnexion/dbconnection')
const mysql = require('mysql')
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.json())

mysqlconnection = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password:'Aminou_5//',
    database : 'employeedb',
    port: '3306'
})

mysqlconnection.connect((err)=>{
    if(!err){
        console.log('db connection succesfull');    
    }else{
        console.log('db connection failed \n'+ JSON.stringify(err));
    }
})

app.listen(3333, ()=>{
    console.log('Express server is running P: 3333');
})
// get all employees
app.get('/employee',(req,res)=>{
    mysqlconnection.query('SELECT * FROM employee',(err,rows,fields)=>{
        if(!err){
            res.status(200).send(rows)
        }else{
            console.log(err);
        }
    })
})
// get a specific employee
app.get('/employee',)


