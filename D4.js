/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/
function area(l1, l2) {
    return l1 * l2
}
const areaResult = area(2, 3)
console.log(areaResult)


/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

function crazySum(g1, g2) {
    if (g1 === g2) {
        return (g1 + g2) * 3
    } else {
        return g1 + g2
    }
}
console.log(crazySum(10, 10))

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

function crazyDiff(t) {
    if (t > 19) {
        return (t - 19) * 3
    } else {
        return Math.abs(t - 19)
    }
}
console.log(crazyDiff(4))




/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

function boundary(n) {
    if ((n >= 20 && n <= 100) || n === 400) {
        return true
    } else {
        return false
    }
}
console.log(boundary(400))

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

function epify(w) {
    if (w.startsWith("EPICODE")) {
        return w
    } else {
        return "EPICODE" + " " + w
    }
}
console.log(epify("EPICODE insegna javascript"))


/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

function checkand7(q) {
    if (q % 3 === 0 || q % 7 === 0) {
        return true
    } else {
        return false
    }
}
console.log(checkand7(14))

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

function reverseString(s) {
    let splitString = s.split("")
    let reverseString = splitString.reverse()
    let finalString = reverseString.join("")
    return finalString
}
console.log(reverseString("mi chiamo eros"))
/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/
/*
function UpperFirst(k) {
    let stringSplit = k.split("")
//    ??????????????????????????????????????????
}
console.log(UpperFirst("Questo è un cane molto bello"))
*/
/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

function cutString(p) {
    return p.slice(1, p.length - 1)

}
console.log(cutString("cammello"))
/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

function giveMeRandom(n) {
    const arr = []
    for (let i = 0; i < n; i++) {
        arr.push(Math.floor(Math.random()*11))
    }
    return arr
}

console.log(giveMeRandom(5))