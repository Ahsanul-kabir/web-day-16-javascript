var number1 = 20;
var number2 = 25;
console.log(number1 + number2); // nomal addition


var number1 = '20';
var number2 = '25';
console.log(number1 + number2); //  like of string concatination


var number3 = 20;
var number4 = '35';
console.log(number3 + number4); // string and number concatination


//parsing are 2 type:


// parse float
var number3 = 20;
var number4 = '35.76';
number4 = parseFloat(number4); // or number4 = +number4; = shortcut
console.log(number3 + number4);

// parse int
var number3 = 20;
var number4 = '35.36';
number4 = parseInt(number4);
console.log(number3 + number4);


var number3 = 20;
var number4 = 35;
number4 = '' + number4; // convert to string = shortcut
console.log(number3 + number4);
console.log(typeof number4)


var number5 = 0.1;
var number6 = 0.2;
var total = number5 + number6;
console.log(total);

// fixed it more number to limited number
//total = total.toFixed(3);
total = total.toFixed(1);
console.log(total);