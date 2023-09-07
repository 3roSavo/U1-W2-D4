/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/
/*
function area(l1, l2) {
    const mult = l1*l2
    return mult
}
const numero1 = parseInt(prompt("Inserisci il primo numero:")) 
const numero2 = parseInt(prompt("Inserisci il secondo numero:"))
console.log(numero1,numero2)

console.log(area(numero1,numero2))
*/


/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

function crazySum(g1, g2) {
    const sum = g1 === g2 ? (g1 + g2) * 3 : g1 + g2
    return sum
}

console.log(crazySum(2, 3))


/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

function crazyDiff(f1, f2 = 19) {
    if (f1 > f2) {
        const diff = f1 - f2 > f2 ? (f1 - f2) * 3 : f1 - f2
        return diff
    } else {
        const diff = f2 - f1
        return diff
    }
}
console.log(crazyDiff(15)) // = 93





/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

function boundary(n) {
    if (typeof n === "number") {
        if (n >= 20 && n <= 100) {
            return true
        } else if (n === 400) {
            return true
        } else {
            return false
        }
    } else {
        return "Il valore non è un numero"
    }
}
console.log(boundary(400))

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

function epify(p = "") {
    if (typeof p === "string") {
        if (p !== "EPICODE") {
            p = "EPICODE"
            return p
        }
    } else {
        return p
    }
}
const result = epify()
console.log(result)



/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

function check3and7(k = 0) {
    if (k > 0) {
        if (k % 3 === 0 || k % 7 === 0) {
            return k + " è divisibile per 3 o 7"
        } else {
            return k + " non è divisibile per 3 o 7"
        }
    }else {
        return k + " non è un valore valido"
    }
}
console.log(check3and7(99))

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

function reverseString(y) {
    return y.split("").reverse().join("")
    

}
console.log(reverseString("hello"))

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/



/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/



/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/