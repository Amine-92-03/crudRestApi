const router = require('express').Router()
const employeeController = require('../controllers/employeeController')


router.get('/get',employeeController.getEmployeeData)
router.delete('/delete/:id',employeeController.deleteEmployeeData)
router.post('/post', employeeController.postEmployeeData)
router.put('/put', employeeController.putEmployeeData)

module.exports = router