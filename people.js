const namesImported = require('./name')
const hobbies = require('./hobbies')

const risultato = namesImported('Antonio', 'Cassano');
console.log(risultato)

const risultatoSecondo = hobbies('pesca', 'cucina', 'palestra')
console.log(risultatoSecondo)