const Car = require("../models/car")
const categorieSchema = require('../middleware/validators/categorie.validation')


exports.AddCategories = (req, res)=>{

    //return res.send({message:"teste"})

    const car = new Car({
        mark: req.body.mark,
        owner: req.body.owner,
        picture: req.body.picture,
        color: req.body.color,
    })

    /*
    const validation = categorieSchema.validate(cat)
    if( validation.err )
    {
         return res.status(400).send(validation.error)
    }
    */


    car.save().then(data=>{
        res.status(200).send({data:data})
        }).catch(err=>{
            res.status(403).send({error:err.message})
        })

}

exports.all = (req,res)=>{
    Car.find({}).populate('owner').populate("picture").then(data=>{
        res.status(200).send({data:data})
    }).catch(err=>{
        res.status(403).send({
            error:err.message
        })
    })
}


exports.Delete = (req,res)=>{

    const categore_id = req.body.id;

    Car.findByIdAndRemove(req.body).then(data=>{
        return res.status( 200 ).send(
            { response:data,status:'categorie supprimée'})
    }).catch(error=>{
        res.status(500).send({message:error.message})
    })

}

