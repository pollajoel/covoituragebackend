"use strict";

const express = require("express");
const router = express.Router();
const users = require("../controllers/user.controller");
const AuthJwt = require("../middleware/secureRoute.middleware");

router.post("/Users", users.register);
router.post("/login", users.login);
router.get("/logout", AuthJwt.authenticateJWT, users.logout);
module.exports = router;