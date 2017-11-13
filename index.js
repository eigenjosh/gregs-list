var express = require('express')
var bp = require('body-parser')
var server = express()
var port = 3000

// SERVES THE DEFAULT STATIC FILES
// MIDDLEWARE
server.use(express.static(__dirname + '/public'))
server.use(bp.json())
server.use(bp.urlencoded({ extended: true }))


var autos = [{
    id: 'asdfkljsdafdsaflkj239023u9402u',
    make: 'Honda',
    model: 'Accord',
    year: 1987,
    color: 'Burgandy',
    price: 1800,
    mileage: 323200,
    condition: 'Like New',
    engineId: '3', //GOOD QUESTION
    description: 'Runs great with gas',
    location: 'Boise',
    contact: 'testcar@cars.auto',
    img: '//loremflickr.com/200/200/car',
    title: 'Your New Car'
}]

// GETTERS AND SETTERS for our data
server.get('/api/autos', (req, res, next) => {
    res.send(autos)
})

server.post('/api/autos', (req, res, next) => {
    autos.push(req.body)
    res.send({ message: 'it worked, You just created a new auto listing' })
})

server.delete('/api/autos/:index', (req, res, next) => {
    if (autos[req.params.index]) {
        autos.splice(req.params.index, 1)
        res.send({ message: 'Successfully removed the auto listing' })
    } else {
        res.status(400).send({ error: 'Bad index provided' })
    }
})

server.listen(port, () => {
    console.log('Server is running on port, ', port)
})