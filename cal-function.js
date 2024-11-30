const calucations = document.getElementById("calucations"); // calculations happen in a specific paragraph
const number = document.getElementById("number");// current typing number shows on a specific paragraph

let i = 0;// current typing digit 
let element = 0; //current typing number, goes to next when you use + - * /
let funcs = 0; //amount of function used, saving for further call on last calculatons

function addDigit(digit) { //adding the selceted digit to the number
    if (numbers[element] === undefined) {//making sure if the element is defined in the array
        numbers[element] = 0;
    }
    numbers[element] *= 10 ;
    numbers[element] += digit;
    i = i + 1;
    number.innerHTML = numbers[element];
}

let numbers = []; //numbers calculating
let functions = []; // all the (+-*/)  in selceted order

const button1 = document.getElementById("num1"); // calling buttons starts
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
const reset = document.getElementById("reset"); // calling buttons finishs

button1.addEventListener("click" , no1Function );//deploying functions on buttons starts
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
reset.addEventListener("click" , resertFunction); //deploying functions on buttons ends

//adding the selected digit by the user to current number
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

//using each sum,minus,multiply,division functions closes the current number
//starts the next number counting it digits
function sumFunction () {
    if (functions[funcs] === undefined) {//making sure if the element is defined in array
        functions[funcs] = '+';
    }
    calucations.innerHTML = ` `
    for(let x = 0 ; x <= element ; x++){
        calucations.innerHTML += numbers[x]
        if (functions[x] !== undefined){
            calucations.innerHTML += functions[x];
        }
        }
    element++;//moving to the next number
    funcs++;
    i = 0;
    return;
}


function minusFunction () {//making sure if the element is defined in array
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
    element++;//moving to the next number
    funcs++;
    i = 0;
    return;
}


function divideFunction () {//making sure if the element is defined in array
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
    element++;//moving to the next number
    funcs++;
    i = 0;
    return;

}


function multiplyFunction () {//making sure if the element is defined in array
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
    element++; //moving to the next number
    funcs++;
    i = 0;
    return;
}

//clearing the calculations paragraph and recalling numbers and functions in order
//calculating by the function char selected by user
function equalToFunction (){
    let answer = numbers[0];

    calucations.innerHTML = ` `
    for(let x = 0 ; x <= element ; x++){
        calucations.innerHTML += numbers[x] // calling numbers
        if (functions[x] !== undefined){
            calucations.innerHTML += functions[x]; //calling functions
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
    calucations.innerHTML += ` = ${answer} `; // showing the final result

}

function resertFunction () { //clearing all the arrays and paragraphs for any selction error
    i = 0;
    element = 0;
    funcs = 0;
    numbers = [];
    functions = [];
    calucations.innerHTML = ` `;
    number.innerHTML = ` `;

}
