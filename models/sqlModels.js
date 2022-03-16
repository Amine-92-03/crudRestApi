

module.exports.sqlGetModel = (emp_id)=>{
    return `SELECT * FROM employee WHERE EmpID IN (${emp_id})`
}

module.exports.sqlDeleteModel = (id)=>{
    return `DELETE FROM employee WHERE EmpID IN (${id})`
}

module.exports.sqlInsertModel = (data)=>{
    return `INSERT INTO employee VALUES (${data.EmpID},"${data.Name}","${data.EmpCode}",${data.Salary})`
}

module.exports.sqlUpdateModel = (data)=>{
   return `UPDATE employee SET Name = "${data.Name}", EmpCode = "${data.EmpCode}",Salary = ${data.Salary} WHERE EmpID = ${data.EmpID}`
}