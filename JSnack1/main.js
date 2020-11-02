$(document).ready(function() {
    // Creare un array di oggetti: ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore.

    // creare l'array di oggetti
    var bikeModels = [
        {
            'name': 'Wilier 0 SLR',
            'weight': 6
        },
        {
            'name': 'Cannondale SuperSix EVOHi-MOD Disc Dura Ace',
            'weight': 8
        },
        {
            'name': 'Trek Emonda 2020',
            'weight': 7
        },
        {
            'name': 'SAVA Phantom 2.0 700C',
            'weight': 8
        }
    ];
    // Creo una variabile peso minore ed inserisco il valore peso del primo oggetto
    var lessWeight = bikeModels[0].weight;
    // creo una variabile nome e la inizializzo con il nome del primo oggetto
    var bikeName;

    // scorro l'array e verifico il peso di ogni bici
    for (var i = 0; i < bikeModels.length; i++) {
        // creo una variabile bici corrente per prendere in esame una bici alla volta
        var currentBike = bikeModels[i];
        var weight = currentBike.weight;
        console.log(weight);
        var currentName = currentBike.name;
        console.log(currentName);

        // se il peso della bicicletta in esame è minore di lessWeight aggiorno il valore di lessWeight perchè è il peso minore trovato fino ad ora
        if (weight < lessWeight) {
            lessWeight = weight;
            bikeName = currentName;
        }
    }
    console.log('Il peso più basso è: ' + lessWeight + 'kg');
    // console.log(bikeName);
    // // stampo in pagina la bici più leggera
    // $("h1").text("La bici più leggera è: " + bikeName);
});
