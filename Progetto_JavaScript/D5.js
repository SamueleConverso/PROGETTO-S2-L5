/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
console.log("--- ESERCIZIO 1 ---");
const pets = ["dog", "cat", "hamster", "redfish"];
function printArr() {
  for (let i = 0; i < pets.length; i++) {
    console.log(pets[i]);
  }
}
printArr();
/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/
console.log("--- ESERCIZIO 2 ---");
pets.sort();
printArr();
/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/
console.log("--- ESERCIZIO 3 ---");
pets.reverse();
printArr();
/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
console.log("--- ESERCIZIO 4 ---");
let primPos = pets.shift();
pets.push(primPos);
printArr();
/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
console.log("--- ESERCIZIO 5 ---");
const cars = [
  {
    brand: "Ford",
    model: "Fiesta",
    color: "red",
    trims: ["titanium", "st", "active"],
  },
  {
    brand: "Peugeot",
    model: "208",
    color: "blue",
    trims: ["allure", "GT"],
  },
  {
    brand: "Volkswagen",
    model: "Polo",
    color: "black",
    trims: ["life", "style", "r-line"],
  },
];

cars[0].licensePlate = "DC89765";
console.log("License plate: " + cars[0].licensePlate);
cars[1].licensePlate = "FZ53489";
console.log("License plate: " + cars[1].licensePlate);
cars[2].licensePlate = "CV27831";
console.log("License plate: " + cars[2].licensePlate);

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/
console.log("--- ESERCIZIO 6 ---");
const newCar = {
  brand: "Fiat",
  model: "Punto",
  color: "blue",
  trims: ["bold", "flat"],
  licensePlate: "WL64566",
};

cars.push(newCar);

for (let i = 0; i < cars.length; i++) {
  cars[i].trims.pop();
  console.log("trims: " + cars[i].trims);
}

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
console.log("--- ESERCIZIO 7 ---");
const justTrims = [];
for (let i = 0; i < cars.length; i++) {
  justTrims.push(cars[i].trims[0]);
}
console.log("Il primo elemento di ogni trims: " + justTrims);

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/
console.log("--- ESERCIZIO 8 ---");
for (let i = 0; i < cars.length; i++) {
  if (cars[i].color.charAt(0) === "b") {
    console.log("Fizz");
  } else {
    console.log("Buzz");
  }
}
/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
console.log("--- ESERCIZIO 9 ---");
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
];
let cond = 0;
while (cond < numericArray.length) {
  console.log(numericArray[cond]);
  if (numericArray[cond] === 32) {
    break;
  }
  cond++;
}

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
console.log("--- ESERCIZIO 10 ---");
const charactersArray = ["g", "n", "u", "z", "d"]; //7, 12, 19, 21, 4
const posArr = [];

for (let i = 0; i < charactersArray.length; i++) {
  switch (charactersArray[i]) {
    case "a":
      posArr.push(1);
      break;
    case "b":
      posArr.push(2);
      break;
    case "c":
      posArr.push(3);
      break;
    case "d":
      posArr.push(4);
      break;
    case "e":
      posArr.push(5);
      break;
    case "f":
      posArr.push(6);
      break;
    case "g":
      posArr.push(7);
      break;
    case "h":
      posArr.push(8);
      break;
    case "i":
      posArr.push(9);
      break;
    case "l":
      posArr.push(10);
      break;
    case "m":
      posArr.push(11);
      break;
    case "n":
      posArr.push(12);
      break;
    case "o":
      posArr.push(13);
      break;
    case "p":
      posArr.push(14);
      break;
    case "q":
      posArr.push(15);
      break;
    case "r":
      posArr.push(16);
      break;
    case "s":
      posArr.push(17);
      break;
    case "t":
      posArr.push(18);
      break;
    case "u":
      posArr.push(19);
      break;
    case "v":
      posArr.push(20);
      break;
    case "z":
      posArr.push(21);
      break;
  }
  console.log(posArr[i]);
}
