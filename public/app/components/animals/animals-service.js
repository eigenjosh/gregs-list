function AnimalsService() {
    var baseUrl = 'http://localhost:3000/api/animals'
    var animals = []

    function Animal(config) {
        this.sex = config.sex.value
        this.age = config.age.value
        this.name = config.name.value
        this.price = config.price.value
        this.image = config.image.value
        this.species = config.species.value
        this.contact = config.contact.value
        this.location = config.location.value
    }

    function logError(err) {
        console.error(err)
    }

    this.getAnimals = function getAnimals(cb) {
        if (!cb || typeof cb != 'function') { return console.error('WOah I need a cb to run') }
        // first task is to request the data from the server ASYNC
        // the data from the server
        // give the controller what it wants
        $.get(baseUrl)
            .then(res => {
                // second task is to update the local animals array with 
                animals = res
                cb(animals)
            })
            .fail(logError)
    }

    this.getAnimal = function getAnimal(id) {
        for (var i = 0; i < animals.length; i++) {
            var animal = animals[i];
            if (id == animal.id) {
                return animal
            }
        }
    }

    this.addAnimal = function addAnimal(form, getAnimals) {
        if (!form || !getAnimals || typeof getAnimals != 'function') { return console.error('Unable to add Animal', 'bad parameters', form, getAnimals) }
        var newAnimal = new Animal(form)
        $.post(baseUrl, newAnimal)
            .then(getAnimals)
            .fail(logError)
    }

    this.removeAnimal = function removeAnimal(index, getAnimals) {
        $.ajax({
            url: baseUrl + '/' + index,
            method: 'DELETE'
        })
            .then(getAnimals)
            .fail(logError)
    }


}