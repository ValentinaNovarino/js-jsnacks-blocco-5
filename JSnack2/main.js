// JSnack2: Creare un array di nomi e chiedere all'utente due numeri. Creare un nuovo array con i valori che si trovano in una posizione compresa tra i due numeri inseriti dall'utente.

$(document).ready(function() {
    // creo un array di nomi
    var names = ['Mario', 'Maria', 'Anna', 'Francesca', 'Luigi', 'Valerio', 'Giacomo'];
    // console.log(names);
    // creare un array vuoto dove inserire i numeri dell'numeri_utente
    var arrayUserNumbers = [];

    // chiedere all'utente due numeri
    while(arrayUserNumbers.length < 2) {

        var userNumber = parseInt(prompt("Inserisci un numero tra 0 e 6 compresi"));

        if(!isNaN(userNumber) && userNumber >= 0 && userNumber <= 6){
            arrayUserNumbers.push(userNumber);
        }else{
            alert("Non hai inserio un valore valido");
        }
    }
    console.log(arrayUserNumbers);

    // creo un array vuoto dove inserire i nomi compresi nelle posizioni scelte dall'utente
    var userName = [];

    // creo un ciclo per for per ciclare i nomi e inserire nell'array solo quelli compresi tra i numeri dell'numeri_utente
    for (var i = 0; i < names.length; i++) {
        if (i >= arrayUserNumbers[0] && i <= arrayUserNumbers[1]) {
            userName.push(names[i]);
        }
    }
    console.log(userName);
});
