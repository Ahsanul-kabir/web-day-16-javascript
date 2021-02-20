var number = -5; // absulute number er khetre number positive or negetive do not metter
var absolute_number = Math.abs(number);

console.log(absolute_number);



var number = 5.500000000;
var result = Math.round(number); // round number kore pelbe
// 5.499999 = 5
// 5.500000000 = 6
console.log(result);


var number = 4.99999999;
var result = Math.ceil(number); // ceil = up e jbe
console.log(result);

var number = 6.77;
var result = Math.floor(number); // floor = bottom e jbe
console.log(result);


// random number
var random_number = Math.random();
console.log(random_number);


// so, handle huge number
var number = Math.random() * 100;
console.log(number); // make maining full number~
var result = Math.round(number);
console.log(result);