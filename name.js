function names(firstName, lastName) {
    const person = {
        nome: firstName,
        cognome: lastName
    };
    return person;
}
names('Gaetano', 'Nicotra')

module.exports = names;