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

    for (var i = 0; i < bikeModels.length; i++) {
        console.log("Bicicletta " + (i+1));
        for(var key in bikeModels[i]){
            console.log(key + ": " + bikeModels[i][key]);
        }
    };
});


// var n1 = 234;
// var n2 = 985;
// var n3 = 1234;
//
//
// var minnum = minnum(n1, n2, n3);
// alert(minnum);

function minnum() {
    return Math.min.apply(this,arguments);
}
