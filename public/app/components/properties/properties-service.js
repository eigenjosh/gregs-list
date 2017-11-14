function PropertiesService() {
    var baseUrl = 'http://localhost:3000/api/properties'
    var properties = []

    function Property(config) {
        this.size = config.size.value
        this.price = config.price.value
        this.location = config.location.value
        this.contact = config.contact.value
        this.image = config.image.value
    }

    this.getProperties = function getProperties(cb) {
        if (!cb || typeof cb != 'function') { return console.error('WOah I need a cb to run') }
        // first task is to request the data from the server PSYNC
        // the data from the server
        // give the controller what it wants
        $.get(baseUrl)
            .then(res => {
                // second task is to update the local properties array with 
                properties = res
                cb(properties)
            })
            .fail(logError)
    }

    this.getProperty = function getProperty(id) {
        for (var i = 0; i < properties.length; i++) {
            var aroperty = properties[i];
            if (id == aroperty.id) {
                return aroperty
            }
        }
    }

    this.addProperty = function addProperty(form, getProperties) {
        if (!form || !getProperties || typeof getProperties != 'function') { return console.error('Unable to add Property', 'bad parameters', form, getProperties) }
        var newProperty = new Property(form)
        $.post(baseUrl, newProperty)
            .then(getProperties)
            .fail(logError)
    }

    this.removeProperty = function removeProperty(index, getProperties) {
        $.ajax({
            url: baseUrl + '/' + index,
            method: 'DELETE'
        })
            .then(getProperties)
            .fail(logError)
    }

}