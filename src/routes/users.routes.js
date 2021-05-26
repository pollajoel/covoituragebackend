const express = require("express");
const router = express.Router();
const users  = require("../controllers/user.controller");
const AuthJwt = require("../middleware/secureRoute.middleware")


router.post("/users",users.register)
router.get("/users/:id",AuthJwt.authenticateJWT,users.user)
router.get("/users/",users.users)
//router.post("/userDelete",users.Delete)
router.get("/logout",AuthJwt.authenticateJWT,users.logout)
router.put("/user/:id", users.update);
//router.get("/userfind",users.findAll)

module.exports = router

