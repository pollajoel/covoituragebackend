const express = require("express");
const router = express.Router();
const car = require("../controllers/car.controller")
const AuthJwt = require("../middleware/secureRoute.middleware")

router.post("/cars",car.AddCategories)
router.get("/cars",car.all)
router.post("/deleteCat",car.Delete)
module.exports = router
