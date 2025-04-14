const namesImported = require('./name.js')
const hobbies = require('./hobbies.js')

const risultato = namesImported('Antonio', 'Cassano');
console.log(risultato)

const risultatoSecondo = hobbies('pesca', 'cucina', 'palestra')
console.log(risultatoSecondo)

const personInformation = () => {
    const information = {
        fullName: risultato,
        passions: risultatoSecondo
    };
    return information;
}
console.log(personInformation());