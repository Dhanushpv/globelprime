const express = require('express');
const router = express.Router();
const userController = require('../controller/usercontroller')


router.post('/user',userController.create1);

module.exports = router;