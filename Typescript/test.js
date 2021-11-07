/*var Arry = [
    {
        id: 1,
        name: "Lisa",
        partner: "Markus",
        kind: "Maxi"
    },
    {
        id: 2,
        name: "Max",
        partner: "Alina",
        kind: "false",
    }
];
for (let i = 0; i < Arry.length; i++) {
    document.write(Arry[i].id + " ");
    document.write(Arry[i].name + " ");
    document.write(Arry[i].partner + " ");
    document.write(Arry[i].kind + " ");
}*/


let helloworld = "Hello World";

const pi = 3.14;

const burjdubai = "828m";

const fullname = "Jan Schmidt";

const eifeltower = "324m";

const camelcase = "camelCase";

var kursStatus = true;


// Lev1_1_js-einführung_console-log
a = 12;
b = a * 3;
console.log(b);
document.write(b);
console.log(document.URL);

// Variable Deklarieren

console.log("Anton")
let name = "Anton"
console.log(name);

let age = 27;
console.log(age);

let job = "Trainer";
console.log(job);

let married = true;
console.log(married)

// Merge Variables
console.log(name + " ist " + age + " Jahre alt und ist verheiratet: " + married);



// Lev1_5_js-einführung_variables

let carName = "BMW";
console.log(carName);

let x = 150;
console.log(x);

let y = 50;
console.log(y);

let z = x + y;
console.log(z);

let firstName = "john", lastName = "Doe", age2 = "35";
console.log(firstName, lastName, age2);

//Lev1_12_js-einführung_arithmetic_operators

let score = 5 + 5 * 10;
console.log('Ergebnis: ' + score);

let score1 = (5 + 5) * 10;
console.log('Ergebnis: ' + score1);

let score2 = 0;
score2 = score + 10;
console.log('Ergebnis: ' + score2);

score += 10;
console.log('Ergebnis: ' + score);

// Dekrement Inrement

let zahl = 1;
zahl = zahl + 1;
zahl += 1;
console.log(zahl);

zahl++;
console.log('increment: ' + zahl);

zahl--;
console.log('dekrement: ' + zahl);

//Lev1_13_js-einführung_arithmetische_wiederholung

let addition_operator = 1 + 1;
console.log("addition: " + addition_operator);

let subtraktion_operator = 2 - 1;
console.log("subtraktion: " + subtraktion_operator);

let multiplication_operator = 2 * 2;
console.log("multiplication: " + multiplication_operator);

let division_operator = 4 / 2;
console.log("division: " + division_operator);

let modulus_operator = 14 % 5; // 5 10 15
console.log("modulus: " + modulus_operator);

//Lev1_11_js-einführung_string-methoden

let Hello = "Hello ";
let World = "World";
let Summe = Hello + World;
console.log(Summe);

let n = Hello + " " + World;
console.log(n);

let con = Hello + " World ";
console.log(con);

let meinString = "Ich bin Erster" + " Ich komme auf Platz zwei"
console.log(meinString)

//Lev1_1_js-einführung_document-write
let mytext = "Hello Again ";
let vorName = "Name: John";
let nachName = "Nachname: Schmidt";
document.write("<h1>Hello World!</h1><br><p>Have a nice Day!</p>" + mytext + "<br>" + "<br>" +
    vorName + "<br>" + nachName);

//Lev1_2_js-einführung_innerhtml

document.getElementById("info").innerHTML = "<h1> Hallo Welt </h1>";
function Chanche() {
    for (let index = 0; index < 10; index++) {
        document.write("akim<br>")
        
        
    }
}