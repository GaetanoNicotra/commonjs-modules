// importo le funzioni
const namesImported = require('./name.js')
const hobbies = require('./hobbies.js')

// assegno gli argomenti delle funzioni
const namesValue = namesImported('Antonio', 'Cassano');
//console.log(risultato)

const hobbiesValue = hobbies('pesca', 'cucina', 'palestra')
//console.log(risultatoSecondo)

// creo una funzione che unisce le precedenti
const personInformation = () => {
    const information = {
        fullName: namesValue,
        passions: hobbiesValue
    };
    return information;
}
console.log(personInformation());