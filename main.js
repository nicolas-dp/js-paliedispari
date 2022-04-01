/* Palidroma
Chiedere all’utente di inserire una parola 
Creare una funzione per capire 
se la parola inserita è palindroma */

/* const parolaPalindroma = prompt("Inserire una parola")
 */

/**
 * 
 * @param {string} -   
 * @returns {string} - Fornisce l'estio della stringa nel caso sia o no palindroma
 */
/* function palindroma(parolaPalindroma) {

    let lunghezza = parolaPalindroma.length;
    let middle = Math.floor(lunghezza/2);

    for ( let i = 0; i < middle; i++ ) {
        if (parolaPalindroma[i] !== parolaPalindroma[lunghezza - 1 - i]) {
            return `La parola ${parolaPalindroma.toUpperCase()} non è palindroma`;
        }
    }
    
   return `La parola ${parolaPalindroma.toUpperCase()} è palindroma`;
    
} 


console.log(palindroma(parolaPalindroma));*/



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
const min_number = 1;
const max_number = 5;

function generaNumeroRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

console.log(generaNumeroRandom(min_number, max_number));
let somma = generaNumeroRandom(min_number, max_number) + numero_utente;


