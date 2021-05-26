const express = require("express");
const router = express.Router();
const trip = require("../controllers/trip.controller")
const serverStorage = require("../middleware/serverStorage.middleware")

router.post("/trips",trip.Add)
router.get("/trips",trip.productList)
router.delete("/trips",trip.deletedProduct)
router.put("/trips/:id",trip.update)
//router.get("/product/findall",trip.findAll);

router.post('/uploads',serverStorage.server.single('file'),function(req, res, next) {
  console.log(req.file);
  if(!req.file) {
    res.status(500);
    return next(err);
  }
 // const host = req.files.fileuploaded.name;
  //const filePath = req.protocol + "://" + host + '/' + req.file.path;
  res.json({ fileUrl: req.file.path,exist:false });

})
//router.get("/allOrder",Order.All)
module.exports = router
