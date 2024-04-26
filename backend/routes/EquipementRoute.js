const express = require('express');

const router = express.Router();

const equipementController =require('../controllers/EquipementController');
//create equip
router.post('/createEquipement',equipementController.createEquipement)
//get list of equipement
router.get('/getEquipement',equipementController.getEquipements)
//delete
router.delete('/delete/:id',equipementController.deleteEquipement)
//update
router.put('/update/:id',equipementController.updateEquipement)
module.exports = router