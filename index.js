// Definizione della classe User
class User {
    constructor(firstName, lastName, age, location) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.location = location;
    }

    // Metodo per confrontare l'età con un altro utente
    compareAge(otherUser) {
        if (this.age > otherUser.age) {
            return `${this.firstName} è più vecchio di ${otherUser.firstName}`;
        } else if (this.age < otherUser.age) {
            return `${this.firstName} è più giovane di ${otherUser.firstName}`;
        } else {
            return `${this.firstName} e ${otherUser.firstName} hanno la stessa età`;
        }
    }
}

// Creazione di oggetti User
const user1 = new User("Mario", "Rossi", 30, "Milano");
const user2 = new User("Luigi", "Verdi", 25, "Roma");
const user3 = new User("Anna", "Bianchi", 30, "Napoli");

// Test del confronto dell'età
const result1 = user1.compareAge(user2);
const result2 = user1.compareAge(user3);
const result3 = user2.compareAge(user3);

// Visualizzazione dei risultati
document.getElementById("output").innerHTML = `
    <p>${result1}</p>
    <p>${result2}</p>
    <p>${result3}</p>
`;
