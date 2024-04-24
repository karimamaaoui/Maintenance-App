const express = require("express")
const router=express.Router();
const SponsorController=require('../controllers/SponsorController');
const verifyRole=require("../middleware/verifyRole")


router.post('/add', SponsorController.AddSponsor);
router.get('/get/:sponsorId',SponsorController.GetSponsor);
router.get('/all',SponsorController.GetAllSponsors);
router.delete('/delete/:sponsorId',SponsorController.DeleteSponById);
router.put('/upd/:sponsorId',SponsorController.UpdateSponsor);

module.exports = router;




