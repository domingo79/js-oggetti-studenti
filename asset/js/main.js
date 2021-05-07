/*Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome, età.*/
var studente = {

    nome: 'Domenico',

    cognome: 'Santo',

    eta: 40
}

/*Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.*/
for (var key in studente) {

    var alunno = studente[key];

    console.log(alunno);
}
/*Creare un array di oggetti di studenti.*/
var studenti = [
    {
        nome: 'Paola',
        cognome: 'Bonadies',
        eta: 38
    },
    {
        nome: 'Scarlett',
        cognome: 'Johansson',
        eta: 35
    },
    {
        nome: 'Margot',
        cognome: 'Robbie',
        eta: 31
    },
    {
        nome: 'Mila',
        cognome: 'Kunis',
        eta: 24
    },
    {
        nome: 'Natalia',
        cognome: 'Portman',
        eta: 26
    },
    {
        nome: 'Alexandra',
        cognome: 'Daddario',
        eta: 28
    }

]
/*Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.*/
for (const key in studenti) {
    const element = studenti[key]
    console.log(element.nome, element.cognome);
}

/*Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.*/

