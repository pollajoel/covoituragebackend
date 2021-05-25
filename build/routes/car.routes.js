const express = require("express");
const router = express.Router();
const categories = require("../controllers/car.controller")
const AuthJwt = require("../middleware/secureRoute.middleware")

router.post("/cars",categories.AddCategories)
router.get("/cars",categories.listCategories)
router.post("/deleteCat",categories.Delete)
module.exports = router
