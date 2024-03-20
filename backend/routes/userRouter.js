const express =require("express");
const router=express.Router();
const usersController =require("../controllers/userController");
const verifyJWT = require("../middleware/verifyJWT");
const verifyRole=require("../middleware/verifyRole")

router.use(verifyJWT)
router.use(verifyRole)

router.route("/").get((req, res) => {
    if (req.userRole === "ADMIN") {
      // Only ADMIN can view all users
      usersController.getAllUsers(req, res);
    } else {
      // Handle other scenarios or send an appropriate response
      res.status(403).json("Unauthorized: Invalid role");
    }
  });


  router.route("/getuser").get((req, res) => {
    if (req.userRole === "CLIENT") {
    usersController.getUser(req, res);
  }else {
    // Handle other scenarios or send an appropriate response
    res.status(403).json("Unauthorized: Invalid role");
  }
  });

  router.put('/update', usersController.updateProfile);

  
module.exports=router
