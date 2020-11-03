// A partire da un array di oggetti, creare una copia dell'array e aggiungere ai singoli elementi dell'array una nuova proprietà "position" che contiene una lettera casuale.

$(document).ready(function() {
    // creo array prodotti
    var flowers = [
        {
            name: "rose",
            color: "red",
            price: 3.00
        },
        {
            name: "sunflower",
            color: "yellow",
            price: 3.50
        },
        {
            name: "tulip",
            color: "pink",
            price: 2.50
        },
        {
            name: "peony",
            color: "white",
            price: 3.50
        }
    ];
    console.log(flowers);

    // creo un nuovo array da riempire con gli stessi elementi dell'array flower
    var copyFlowers = [];
    // copio l'array con un ciclo for
    for (var i = 0; i < flowers.length; i++) {
        var currentFlower = flowers[i];

        // scorro tutte le proprietà del prodotto corrente
        var copyFlower = {
            name: currentFlower.name,
            color: currentFlower.color,
            price: currentFlower.price,
            position: getRandomChar()
        };
        copyFlowers.push(copyFlower);
    }
    console.log(copyFlowers);
});

// funzione per generare una lettera random presa dall'array alfabeto invocando la funzione dei numeri random
function getRandomChar() {
    var alphabet = "abcdefghijklmnopqrstuvwxyz"

    var position = getRndInteger(0, 25);
    console.log(position);

    var randomLetter = alphabet.charAt(position);
    return randomLetter;
}

// funzione per generare un numero random
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
