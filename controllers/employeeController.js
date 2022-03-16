

module.exports.getEmployeeData = async (req,res)=>{
    const emp_id = req.query.EmpID
    mysqlconnection.query(`SELECT * FROM employee WHERE EmpID IN (${emp_id})`,(err,rows,fields)=>{
        if(!err){
            res.status(200).send(rows)
        }else{
            console.log(err);
        }
    })
}

module.exports.deleteEmployeeData = async (req,res)=>{
    try {
        const id=req.params.id
        mysqlconnection.query(`DELETE FROM employee WHERE EmpID IN (${id})`,(err,rows,fields)=>{
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
        mysqlconnection.query(`INSERT INTO employee VALUES (${data.EmpID},"${data.Name}","${data.EmpCode}",${data.Salary})`
                                ,(err,rows,fields)=>{
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

module.exports.putEmployeeData = (req,res)=>{
    try {
        const data=req.body
        mysqlconnection.query(`UPDATE employee SET Name = "${data.Name}", EmpCode = "${data.EmpCode}",Salary = ${data.Salary} WHERE EmpID = ${data.EmpID}`
                                ,(err,rows,fields)=>{
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
