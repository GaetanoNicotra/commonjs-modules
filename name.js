// dichiaro la funzione
const names = (firstName, lastName) => {
    const person = {
        nome: firstName,
        cognome: lastName
    };
    return person;
}

// esporto la funzione
module.exports = names;