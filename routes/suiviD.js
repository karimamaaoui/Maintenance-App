const express = require('express');
const router = express.Router();
const verifyRoles = require('../middleware/VerifyRoles');
const { getDemande } = require('../controllers/SuiviDemande');


router.get('/suivi', verifyRoles, getDemande);

module.exports = router;
