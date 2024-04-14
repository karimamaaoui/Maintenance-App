const express = require("express")
const router=express.Router();
const GestionSponsors=require('../controllers/GestionSponsors');
const verifyRoles = require('../middleware/VerifyRoles');


router.post('/add', verifyRoles, GestionSponsors.AddSponsor);
router.get('/get/:sponsorId',verifyRoles,GestionSponsors.GetSponsor);
router.get('/all',verifyRoles,GestionSponsors.GetAllSponsors);
router.delete('/delete/:sponsorId',verifyRoles,GestionSponsors.DeleteSponById);
router.put('/upd/:sponsorId',verifyRoles,GestionSponsors.UpdateSponsor);

module.exports = router;




