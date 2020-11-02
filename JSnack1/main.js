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
    // clicare tutti gli oggetti tramite un ciclo for
    for (var i = 0; i < bikeModels.length; i++) {
        console.log("Bicicletta " + (i+1));
        // stampare la proprietà weight degli oggetti dell'array bikeModels
        for (var key in bikeModels) {
            var weight = bikeModels[i]['weight'];
            console.log(weight);
        };
    };
    var bikesWeight = [];
    for (var i = 0; i < bikeModels.length; i++) {
        var currentBike = bikeModels[i];

        // inserire il peso delle biciclette nell'array bikesWeight
        bikesWeight.push(currentBike['weight']);
        console.log(bikesWeight);

        // cerco nell'array invocando la funzione getMinOfArray() il peso minimo
        var minWeight = getMinOfArray(bikesWeight);
        console.log(minWeight);
    };
});


// creo una funzione per trovare il numero minimo in un array
function getMinOfArray(numArray) {
  return Math.min.apply(null, numArray);
}
