function AnimalsController() {
    var animalsService = new AnimalsService()
  
    // Buttons
    // Add New Auto
    // Delete Auto
    // Report Flag
    // View More
    // Filter / Search
    var animalsElem = document.getElementById('animal-list')
    var animalFormElem = document.getElementById('add-animal-form')
    var showButton = document.getElementById('show-button')
    
    function getAnimals(){
      animalsService.getAnimals(drawAnimals)
    }
    
    function drawAnimals(animals) {
  
      // WHERE ARE ALL THE animals?
      var template = ''
      for (var i = 0; i < animals.length; i++) {
        var animal = animals[i];
        template += `
              <div class="col-md-3">
                  <div class="panel panel-info">
                      <div class="panel-heading">
                          <i class="glyphicon glyphicon-trash pull-right" onclick="app.controllers.animalsCtrl.removeAnimal(${i})"></i>
                          <h3>${animal.title}</h3>
                          <h6>${animal.location}</h6>
                      </div>
                      <div class="panel-body text-center">
                          <img src="${animal.img}" class="img-responsive">
                          <h4>${animal.year} - ${animal.make} ${animal.model}</h4>
                      </div>
                      <div class="panel-footer">
                          <h5>$ ${animal.price}</h5>
                      </div>
                  </div>
              </div>
              `
      }
      animalsElem.innerHTML = template
    }
  
    this.addAnimal = function addAnimal(event) {
      event.preventDefault()
      var form = event.target
      animalsService.addAnimal(form, getAnimals)
      animalsFormElem.classList.toggle('hidden', true)
    }
    var formstate = false
    
    this.showAddAnimalForm = function showAddAnimalForm() {
      if (formstate) {
        showButton.innerText = 'Add Listing'
        showButton.className = 'btn btn-info'
        animalsFormElem.classList.add('hidden')
        formstate = false
      } else {
        showButton.innerText = 'Cancel'
        showButton.className = 'btn btn-danger'
        animalsFormElem.classList.remove('hidden')
        formstate = true
      }
    }
  
    this.removeAnimal = function removeAnimal(index){
      animalsService.removeAnimal(index, getAnimals)
    }
  
    getAnimals()
  }