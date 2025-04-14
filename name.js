const names = (firstName, lastName) => {
    const person = {
        nome: firstName,
        cognome: lastName
    };
    return person;
}

const risultato = names('Gaetano', 'Nicotra')
console.log(risultato)

module.exports = names;