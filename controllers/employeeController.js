const sqlModels = require('../models/sqlModels')

module.exports.getEmployeeData = async (req,res)=>{
    const emp_id = req.query.EmpID
    mysqlconnection.query(sqlModels.sqlGetModel(emp_id),(err,data,fields)=>{
        if(!err){
            res.status(200).json({status_code: 200, message:'data seccessfully got !', body: data})
        }else{
            console.log(err);
        }
    })
}

module.exports.deleteEmployeeData = async (req,res)=>{
    try {
        const id=req.params.id
        mysqlconnection.query(sqlModels.sqlDeleteModel(id),(err,rows,fields)=>{
            if(!err){
                res.status(200).json({status_code: 200, message:'profil seccessfully deleted !'})
            }else{
                console.log(err);
            }
        })
    } catch (error) {
        res.status(200).send('error: data not recieved !')
        console.log(error);
    }
}

module.exports.postEmployeeData = async (req,res)=>{
    try {
        const data=req.body
        mysqlconnection.query(sqlModels.sqlInsertModel(data),(err,rows,fields)=>{
            if(!err){
                res.status(200).json({status_code: 200, message:'profil seccessfully posted !'})
            }else{
                console.log(err);
            }
        })
    } catch (error) {
        res.status(200).send('error: data not recieved !')
        console.log(error);
    }
}

module.exports.putEmployeeData = async (req,res)=>{
    try {
        const data=req.body
        mysqlconnection.query(sqlModels.sqlUpdateModel(data),(err,rows,fields)=>{
            if(!err){
                res.status(200).json({status_code: 200, message:'profil seccessfully updated !'})
            }else{
                console.log(err);
            }
        })
    } catch (error) {
        res.status(200).send('error: data not recieved !')
        console.log(error);
    }
}
