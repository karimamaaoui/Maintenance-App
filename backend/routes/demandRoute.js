const express =require("express");
const router=express.Router();
const verifyJWT = require("../middleware/verifyJWT");
const DemandController=require("../controllers/DemandAddController")
const verifyRole=require("../middleware/verifyRole")

router.use(verifyJWT)
router.use(verifyRole)

router.post("/send",DemandController.sendDemand)
router.route("/changestate/:id").put((req, res) => {
    if (req.userRole === "ADMIN") {
      // Only ADMIN can change  state of demand
      DemandController.updateDemandState(req,res);
    } else {
      // Handle other scenarios or send an appropriate response
      res.status(403).json("Unauthorized: Invalid role");
    }
  });




module.exports=router;