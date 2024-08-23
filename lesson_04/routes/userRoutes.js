const express = require('express')
const router = express.Router()
const usersController = require('../controllers/usersController')

router.get("/getall",usersController.getAllUsers)
router.get("/getall",usersController.getAllUsers)

router.post("/create",usersController.createUser)
router.put("/update/:id",usersController.updateUserById)
router.delete("/delete/:id",usersController.deleteUserById)
    

module.exports = router
