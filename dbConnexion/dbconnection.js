const mysql = require('mysql')
require('dotenv').config()
dbConfig = {
    host: process.env.SERVER,
    user:process.env.USER,
    password:process.env.PASSWORD,
    database : process.env.DATABASE,
    port: process.env.PORT
}

module.exports.connect = ()=>{
    mysqlconnection = mysql.createConnection(dbConfig)
    mysqlconnection.connect((err)=>{
        if(!err){
            console.log('db connection succesfull');    
        }else{
            console.log('db connection failed \n'+ JSON.stringify(err));
        }
    })
}

