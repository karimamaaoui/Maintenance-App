
const express = require('express');
const router = express.Router();
const updatestate = require('../controllers/updateState');

router.put('/demands/:id/accept', updatestate.updateDemandStateToAccepted);
router.put('/demands/:id/decline', updatestate.updateDemandStateToDecline);



module.exports = router;
