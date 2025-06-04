/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/
const num1 = 10;
const num2 = 20;
if (num1 > num2) {
  console.log(`${num1} è il più grande`);
} else if (num2 > num1) {
  console.log(`${num2} è il più grande`);
}
/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/
const number = 3;

if (number !== 5) {
  console.log("not equal");
} else {
  console.log("equal");
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

const num = 25;
if (num % 5 === 0) {
  console.log("divisibile per 5");
} else {
  console.log("non divisibile per 5");
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/
const a = 8;
const b = 4;
if (a === 8 || b === 8 || a + b === 8 || a - b === 8 || b - a === 8) {
  console.log("Uno dei numeri è 8 o la loro somma/sottrazione è uguale a 8");
} else {
  console.log("Nessuna condizione soddisfatta");
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

const totalShoppingCart = 75;
let shippingCost = 10;
if (totalShoppingCart > 50) {
  shippingCost = 0;
}
const totalAmount = totalShoppingCart + shippingCost;
console.log(
  `Il totale da addebitare all'utente è: ${totalAmount} (inclusa spedizione di ${shippingCost})`
);

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/
const TotalShoppingCart = 75;
let discount = 0.2;
let discountedTotal = TotalShoppingCart * (1 - discount);
let shippingCostBlackFriday = 10;
if (discountedTotal > 50) {
  shippingCostBlackFriday = 0;
}
const totalAmountBlackFriday = discountedTotal + shippingCostBlackFriday;
console.log(
  `Il totale da addebitare all'utente durante il Black Friday è: ${totalAmountBlackFriday} (inclusa spedizione di ${shippingCostBlackFriday})`
);

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

const numA = 30;
const numB = 10;
const numC = 20;
let highest, middle, lowest;
if (numA >= numB && numA >= numC) {
  highest = numA;
  if (numB >= numC) {
    middle = numB;
    lowest = numC;
  } else {
    middle = numC;
    lowest = numB;
  }
} else if (numB >= numA && numB >= numC) {
  highest = numB;
  if (numA >= numC) {
    middle = numA;
    lowest = numC;
  } else {
    middle = numC;
    lowest = numA;
  }
} else {
  highest = numC;
  if (numA >= numB) {
    middle = numA;
    lowest = numB;
  } else {
    middle = numB;
    lowest = numA;
  }
}
console.log(
  `Ordine dei numeri dal più alto al più basso: ${highest}, ${middle}, ${lowest}`
);

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

const value = "Hello";
if (typeof value === "number") {
  console.log(`${value} è un numero`);
} else {
  console.log(`${value} non è un numero`);
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

const numberToCheck = 15;
if (numberToCheck % 2 === 0) {
  console.log(`${numberToCheck} è un numero pari`);
} else {
  console.log(`${numberToCheck} è un numero dispari`);
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

let val = 7;
if (val < 5) {
  console.log("Meno di 5");
} else if (val < 10) {
  console.log("Meno di 10");
} else {
  console.log("Uguale a 10 o maggiore");
}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};

me.city = "Toronto";
console.log(me);
/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

delete me.lastName;
console.log(me);

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

me.skills.pop();
console.log(me.skills);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

const numbersArray = [];
for (let i = 1; i <= 10; i++) {
  numbersArray.push(i);
}
console.log(numbersArray);

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

numbersArray[numbersArray.length - 1] = 100;
console.log(numbersArray);
