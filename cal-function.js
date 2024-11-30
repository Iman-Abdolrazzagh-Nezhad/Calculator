const calucations = document.getElementById("calucations");
const number = document.getElementById("number");

let i = 0;
let element = 0;
let funcs = 0;

function addDigit(digit) {
    if (numbers[element] === undefined) {
        numbers[element] = 0;
    }
    numbers[element] *= 10 ;
    numbers[element] += digit;
    i = i + 1;
    number.innerHTML = numbers[element];
}

let numbers = [];
let functions = [];

const button1 = document.getElementById("num1"); 
const button2 = document.getElementById("num2");
const button3 = document.getElementById("num3");
const button4 = document.getElementById("num4");
const button5 = document.getElementById("num5");
const button6 = document.getElementById("num6");
const button7 = document.getElementById("num7");
const button8 = document.getElementById("num8");
const button9 = document.getElementById("num9");
const button0 = document.getElementById("num0");

const sum = document.getElementById("sum");
const minus = document.getElementById("minus");
const multiply = document.getElementById("multiply");
const divison = document.getElementById("divison");
const equalto = document.getElementById("equal");
const reset = document.getElementById("reset");

button1.addEventListener("click" , no1Function );
button2.addEventListener("click" , no2Function );
button3.addEventListener("click" , no3Function );
button4.addEventListener("click" , no4Function );
button5.addEventListener("click" , no5Function );
button6.addEventListener("click" , no6Function );
button7.addEventListener("click" , no7Function );
button8.addEventListener("click" , no8Function );
button9.addEventListener("click" , no9Function );
button0.addEventListener("click" , no0Function );

sum.addEventListener("click" , sumFunction);
minus.addEventListener("click" , minusFunction);
divison.addEventListener("click" , divideFunction);
multiply.addEventListener("click" , multiplyFunction);
equalto.addEventListener("click" , equalToFunction);
reset.addEventListener("click" , resertFunction);

function no1Function () {
    const digit = 1;
    addDigit(digit);
}
function no2Function () {
    const digit = 2;
    addDigit(digit);
}
function no3Function () {
    const digit = 3;
    addDigit(digit);
}
function no4Function () {
    const digit = 4;
    addDigit(digit);
}
function no5Function () {
    const digit = 5;
    addDigit(digit);
}
function no6Function () {
    const digit = 6;
    addDigit(digit);
}
function no7Function () {
    const digit = 7;
    addDigit(digit);
}
function no8Function () {
    const digit = 8;
    addDigit(digit);
}
function no9Function () {
    const digit = 9;
    addDigit(digit);
}
function no0Function () {
    const digit = 0;
    addDigit(digit);
}


function sumFunction () {
    if (functions[funcs] === undefined) {
        functions[funcs] = '+';
    }
    calucations.innerHTML = ` `
    for(let x = 0 ; x <= element ; x++){
        calucations.innerHTML += numbers[x]
        if (functions[x] !== undefined){
            calucations.innerHTML += functions[x];
        }
        }
    element++;
    funcs++;
    i = 0;
    return;
}


function minusFunction () {
    if (functions[funcs] === undefined) {
        functions[funcs] = '-';
    }
    calucations.innerHTML = ` `
    for(let x = 0 ; x <= element ; x++){
        calucations.innerHTML += numbers[x]
        if (functions[x] !== undefined){
            calucations.innerHTML += functions[x];
        }
    }
    element++;
    funcs++;
    i = 0;
    return;
}


function divideFunction () {
    if (functions[funcs] === undefined) {
        functions[funcs] = '/';
    }
    calucations.innerHTML = ` `
    for(let x = 0 ; x <= element ; x++){
        calucations.innerHTML += numbers[x]
        if (functions[x] !== undefined){
            calucations.innerHTML += functions[x];
        }
    }
    element++;
    funcs++;
    i = 0;
    return;

}


function multiplyFunction () {
    if (functions[funcs] === undefined) {
        functions[funcs] = '*';
    }
    calucations.innerHTML = ` `
    for(let x = 0 ; x <= element ; x++){
        calucations.innerHTML += numbers[x]
        if (functions[x] !== undefined){
            calucations.innerHTML += functions[x];
        }
    }
    element++;
    funcs++;
    i = 0;
    return;
}

function equalToFunction (){
    let answer = numbers[0];

    calucations.innerHTML = ` `
    for(let x = 0 ; x <= element ; x++){
        calucations.innerHTML += numbers[x]
        if (functions[x] !== undefined){
            calucations.innerHTML += functions[x];
            if(functions[x] == '+'){
                answer += numbers[x + 1];
            }
            else if(functions[x] == '-'){
                answer -= numbers[x + 1];
            }
            else if(functions[x] == '*'){
                answer *= numbers[x + 1];
            }
            else if(functions[x] == '/'){
                answer /= numbers[x + 1];
            }
        }
    }
    calucations.innerHTML += ` = ${answer} `;

}

function resertFunction () {
    i = 0;
    element = 0;
    funcs = 0;
    numbers = [];
    functions = [];
    calucations.innerHTML = ` `;
    number.innerHTML = ` `;

}