// Classe Pet
class Pet {
    constructor(petName, ownerName, species, breed) {
      this.petName = petName;
      this.ownerName = ownerName;
      this.species = species;
      this.breed = breed;
    }
  
    // Metodo per verificare se due animali hanno lo stesso proprietario
    hasSameOwner(otherPet) {
      return this.ownerName === otherPet.ownerName;
    }
  }
  
  // Lista di oggetti Pet
  const pets = [];
  
  // Funzione per aggiungere un nuovo pet
  function addPet(pet) {
    pets.push(pet);
    updatePetList();
  }
  
  // Funzione per aggiornare la lista dei pets nella UI
  function updatePetList() {
    const petList = document.getElementById("petList");
    petList.innerHTML = "";
  
    pets.forEach((pet, index) => {
      const petItem = document.createElement("li");
      petItem.className = "list-group-item";
      petItem.textContent = `Nome: ${pet.petName}, Proprietario: ${pet.ownerName}, Specie: ${pet.species}, Razza: ${pet.breed}`;
      petList.appendChild(petItem);
    });
  }
  
  // Gestore dell'evento di submit del form
  document.getElementById("petForm").addEventListener("submit", function(e) {
    e.preventDefault();
  
    // Raccogliere i dati dal form
    const petName = document.getElementById("petName").value;
    const ownerName = document.getElementById("ownerName").value;
    const species = document.getElementById("species").value;
    const breed = document.getElementById("breed").value;
  
    // Creare una nuova istanza di Pet e aggiungerla alla lista
    const newPet = new Pet(petName, ownerName, species, breed);
    addPet(newPet);
  
    // Resettare il form
    document.getElementById("petForm").reset();
  });
  