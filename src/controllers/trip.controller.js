const Trip = require("../models/trips");
const jwt   = require("jsonwebtoken");
const configs =  require("../configs")
const productSchemaValidation =require("../middleware/validators/product.validation")

// trip controller add new trip by post
exports.add = (req,res)=>{
     const trip = new Trip({
         departure:req.body.departure,
         destination:req.body.destination,
         distance:req.body.distance,
         price:req.body.price,
         owner:req.body.owner
    });
      const validator = productSchemaValidation.validate(trip)
    if(!validator)
    {
       return res.status(500).send({error:validator.error,message:"format incorrecte"})
    }

    trip.save().then(data=>{
        res.status(200).send({
            created:true,
            message:"Create success",
            data:data
        })

    }).catch(err=>{
        res.status(500).send({
            created:false,
            message:err.message
            }
        )
    })
}



// trip controller list all
exports.all = (req,res)=>{
    Trip.find({}).populate('owner').then(data=>{
        res.status(200).send({data:data})
    }).catch(err=>{
        res.status(403).send({
            error:err.message
        })
    })
}

// get Trip by id
exports.Tripid = (req, res)=>{

    Trip.findById(req.params.id).populate("passengers").populate("owner")
   .then((trip) => {
     if (!trip) {
       return res.status(404).send({
         message: `Trip not found with id ${req.params.id}`,
       });
     }
     res.send(trip);
   })
   .catch((err) => {
     return res.status(404).send({
       message: err.message,
     });
   });
}







exports.deletedProduct = (req,res)=>{
    Product.deleteOne({_id:req.body._id}).then(data=>{

        return res.status( 200 ).send(
            { response:data,status:'utlisateur supprimé...'})
    }).catch(error=>{
        res.status(500).send({message:error.message})
    })
}


exports.search = (req,res)=>{
    Product.find({title:{$regex:"^"+req.params.title},})
}

exports.update = (req,res)=>{
    if(!req.body) {
        return res.status(400).send({
            message:"Data to update can not be empty..."
        })
    }
    const id = req.params.id;
    Product.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                return res.status(404).send({
                    message: `Cannot update product with id=${id}. Maybe User was not found!`,
                    status:false
                });
            } else return  res.send({ message: "product was updated successfully.",res:data,status:true });
        }).catch(err => {
            res.status(500).send({
                message: "Error updating product with id=" + id
            });
        });

}

exports.findAll = (req, res) => {
  var name = req.query.name;
  var description = req.query.description;
  var condition = name || description ? { name: { $regex: new RegExp(name), $options: "i" },description: { $regex: new RegExp(description), $options: "g" } } : {};
  Product.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving product."
      });
    });
};
