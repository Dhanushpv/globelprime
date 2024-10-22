const express = require('express');
const router = express.Router();
const userController = require('../controller/usercontroller')


router.post('/user',userController.create1);
router.get('/user',userController.fetchalluserData);
router.delete('/purgeUser/:id',userController.deleteuserData);

router.post('/jobList',userController.jobList);
router.get('/joblist',userController.fetchalljoblist);
router.delete('/purgejoblist/:id',userController.deletejoblist);






module.exports = router;