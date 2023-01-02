const PlayerSchema = require('../model/players.model');

module.exports.Players = (req,res) => {
    PlayerSchema.find({})
    .then((results) => res.json(results))
    .catch((error) => res.status(400).json(error))
}


module.exports.AddPlayer = (req,res)  => {
    PlayerSchema.create(req.body)
    .then((results) => res.json(results))
    .catch((error) => res.status(400).json(error))
}

module.exports.DeletePlayer = (req, res) => {
    PlayerSchema.deleteOne({_id: req.params.id})
    .then((results) => res.json(results))
    .catch((error) => res.status(400).json(error))
}

module.exports.UpdatePlayer = (req, res) => {
    PlayerSchema.findOneAndUpdate({_id: req.params.id},req.body,{new: true, runValidators: true})
    .then((results) => res.json(results))
    .catch((error) => res.status(400).json(error))
}