const express =require("express");
const router=express.Router();
const verifyJWT = require("../middleware/verifyJWT");
const DemandController=require("../controllers/DemandAddController")

router.use(verifyJWT)

router.post("/send",DemandController.sendDemand)

module.exports=router;