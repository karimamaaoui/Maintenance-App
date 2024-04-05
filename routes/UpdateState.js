
const express = require('express');
const router = express.Router();
const updatestate = require('../controllers/updateState');
const verifyRoles = require('../middleware/VerifyRoles');

// ken les ADMINS ynajmou ybaadlou
router.put('/demands/:id/accept',verifyRoles, updatestate.updateDemandStateToAccepted);
router.put('/demands/:id/decline',verifyRoles, updatestate.updateDemandStateToDecline);



module.exports = router;
