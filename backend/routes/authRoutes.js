const express =require("express");
const router=express.Router();
const authController= require ("../controllers/authController")


router.route("/register").post(authController.register);
router.route("/login").post(authController.login);
router.route("/refresh").get(authController.refresh);
router.route("/test").get(authController.testCookies);
router.route("/logout").post(authController.logout);
router.route("/verify").get(authController.verify);

module.exports=router



