var Animals = require('../models/animal')
var router = require('express').Router()
// WHAT IS ANIMALS? RESOURCE
// WHERE IS EXPRESS
router.get('/api/animals', (req, res, next) => {
    // FIRST JOB is to go get the animals from the db
    Animals.find({})
        .then(animals => res.send(animals))
        .catch(err => res.status(400).send(err))
})

router.get('/api/animals/:id', (req, res, next) => {
    Animals.findById(req.params.id)
        .then(animal => res.send(animal))
        .catch(err => res.status(400).send(err))
})

//CREATES NEW ANIMAL
router.post('/api/animals', (req, res, next) => {
    Animals.create(req.body)
        .then(animal => res.send(animal))
        .catch(err => res.status(400).send(err))
})

router.delete('/api/animals/:id', (req, res, next) => {
    Animals.findByIdAndRemove(req.params.id)
        .then((animal) => {
            res.send({ message: 'Successfully removed animal at ' + req.params.id })
        })
        .catch(err => res.status(400).send(err))
})


module.exports = router