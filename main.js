/* Palidroma
Chiedere all’utente di inserire una parola 
Creare una funzione per capire 
se la parola inserita è palindroma */

const parolaPalindroma = prompt("Inserire una parola");


/**
 * 
 * @param {string} -  Passiamo il paramentro indicato dall'utente 
 * @returns {string} - Fornisce l'estio della stringa nel caso sia o no palindroma
 */
function palindroma(parolaPalindroma) {
    //Prendiamo la lunghezza della parola passata dall'utente
    let lunghezza = parolaPalindroma.length;
    //Andiamo a dividere la lunghezza a metà e la mettiamo in una variabile middle
    let middle = Math.floor(lunghezza / 2);

    //Tramite ciclo for, cicliamo per verificare l'uguaglianza dei caratteri
    for (let i = 0; i < middle; i++) {
        //Se le prime due lettere sono diverse dalle ultime due lettere
        if (parolaPalindroma[i] !== parolaPalindroma[lunghezza - 1 - i]) {
            return `La parola ${parolaPalindroma.toUpperCase()} non è palindroma`;
        }
    }
    //Se le prime due lettere sono ugali alle ultime due lettere 
    return `La parola ${parolaPalindroma.toUpperCase()} è palindroma`;

}

//Richiamo della funzione palindroma
console.log(palindroma(parolaPalindroma));



/* Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) 
per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri 
è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto. */


let pari_dispari = prompt("Scegli pari o dispari!!")
let numero_utente = parseInt(prompt("Inserisci un numero da 1 a 5"))
let somma = 0;

//console.log(`L'utente ha scelto:  ${pari_dispari}`);

if (pari_dispari > 5 || pari_dispari < 1) {
    alert("Devi inserire un numero compreso tra 1 e 5")
}

/**
 * 
 * @param {number} - min Il numero minimo 1  
 * @param {number} - max Il numero massimo 5
 * @returns {number} 
 */
function numeroCasuale(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Richiamo funzione per genereare il numero casuale
let random_number = numeroCasuale(1, 5)

//Andiamo a sommare il numero inserito dall'utente e il numero random generato dalla funzione
somma += random_number + numero_utente;

/* INIZIO FUNZIONE PER VERIFICARE SE IL TOTALE DELLA SOMMA è PARI O DISPARI */
/**
 * 
 * @param {number} - sum La somma tra il numero generato random e quello indicato dall'utente 
 * @returns - true("è PARI") or false ("è DISPARI")
 */
function sePariDispari(sum) {

    if (sum % 2 == 0) {
        return true;
    } else {
        return false;
    }

}


console.log(`Il numero dell'utente è: ${numero_utente}`);
console.log(`Il numero scelto randomicamente è: ${random_number}`)
console.log(`La somma dei due numeri è: ${sePariDispari(somma)}`);

if (sePariDispari(somma) == true && pari_dispari == "pari") {
    console.log("HAI VINTO");
} else if (sePariDispari(somma) == false && pari_dispari == "dispari") {
    console.log("HAI VINTO");
} else {
    console.log("HAI PERSO");
}





