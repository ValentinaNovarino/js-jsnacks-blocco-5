$(document).ready(function() {
    // Creare un array di oggetti: ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore.

    // creare un array di oggetti
    var bike = [
        {
            name: "MMR Kenta",
            weight: "10,54"
        },
        {
            name: "Olimpya F1X",
            weight: "10,80"
        },
        {
            name: "Torpado Matador X",
            weight: "10,44"
        },
        {
            name: "Santa Cruz Blur",
            weight: "11,12"
        }
    ];
    console.log(bike);

    // creo una variabile lessWeight e salvo come valore il peso del primo oggetto dell'array bike
    var lessWeight = bike[0].weight;
    // console.log(lessWeight);

    // creo una variabile bikeName per salvare il nome della bici il cui peso viene salvato nella variabile lessWeight
    var bikeName = bike[0].name;

    // scorro l'array con un ciclo for e esamino tutte le bici
    for (var i = 0; i < bike.length; i++) {
        // creo una variabile currentBike per esaminare una bici alla volta
        var currentBike = bike[i];
        console.log(currentBike);

        // creo una variabile weight per salvare il peso della bici esaminata
        var weight = currentBike.weight;
        console.log(weight);

        // creo una variabile currentName per salvare il nome della bici esaminata
        var currentBikeName = currentBike.name;
        console.log(currentBikeName);

        // se il weight della bici esaminata è minore di lessWeight allora salvo quel weight come lessWeight perchè sarebbe il più basso trovato fino a quel momento
        if (weight < lessWeight) {

            lessWeight = weight;

            bikeName = currentBikeName;
        }
    }
    console.log(lessWeight);
    console.log(bikeName);

});
