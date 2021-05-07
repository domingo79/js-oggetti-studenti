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
var nomeUser = prompt('Inserisci il tuo nome').toString()

var cognomeUser = prompt('Inserisci il tuo cognome').toString()

var etaUser = parseInt(prompt('Inserisci la tua eta'))

studenti.push({ nome: nomeUser, cognome: cognomeUser, eta: etaUser })


// stampa in html la lista studenti, con l'ultimo aggiunto dall'utente
var contentEle = document.querySelector('.container');

for (var key in studenti) {
    const element = studenti[key]
    console.log(element.nome, element.cognome);

    contentEle.insertAdjacentHTML('beforeend',
        `
    <div class="card">
            <div class="imgBox">
                <img src="/asset/img/${[key] + '.jpeg'}">
            </div>

            <div class="content">
            <h4>Cognome: ${element.cognome}</h4>
            <h4>Nome: ${element.nome}</h4>
            <h5>Età: ${element.eta}</h5>
                Lorem ipsum dolor sit amet consectetur!
            </div>
    </div>
`
    )

}