var Autos = require('../models/auto')
var router = require('express').Router()
// WHAT IS AUTOS? RESOURCE
// WHERE IS EXPRESS
router.get('/api/autos', (req, res, next) => {
    // FIRST JOB is to go get the autos from the db
    Autos.find({})
        .then(autos => res.send(autos))
        .catch(err => res.status(400).send(err))
})

router.get('/api/autos/:id', (req, res, next) => {
    Autos.findById(req.params.id)
        .then(auto => res.send(auto))
        .catch(err => res.status(400).send(err))
})

//CREATES NEW AUTO
router.post('/api/autos', (req, res, next) => {
    Autos.create(req.body)
        .then(auto => res.send(auto))
        .catch(err => res.status(400).send(err))
})

router.delete('/api/autos/:id', (req, res, next) => {
    Autos.findByIdAndRemove(req.params.id)
        .then((auto) => {
            res.send({ message: 'Successfully removed auto at ' + req.params.id })
        })
        .catch(err => res.status(400).send(err))
})


module.exports = router