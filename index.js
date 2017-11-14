var express = require('express')
var bp = require('body-parser')
var dbConnect = require('./config/mlab/mlab-config')
var autoRoutes = require('./server-assets/routes/auto-routes')

var server = express()
var port = 3000
// SERVES THE DEFAULT STATIC FILES

// MIDDLEWARE
server.use(express.static(__dirname + '/public'))
server.use(bp.json())
server.use(bp.urlencoded({ extended: true }))
server.use(autoRoutes)

// var autos = [{
//     id: 'asdfkljsdafdsaflkj239023u9402u',
//     make: 'Honda',
//     model: 'Accord',
//     year: 1987,
//     color: 'Burgandy',
//     price: 1800,
//     mileage: 323200,
//     condition: 'Like New',
//     engineId: '3', //GOOD QUESTION
//     description: 'Runs great with gas',
//     location: 'Boise',
//     contact: 'testcar@cars.auto',
//     img: '//loremflickr.com/200/200/car',
//     title: 'Your New Car'
// }]


server.listen(port, () => {
    console.log('Server is running on port, ', port)
})