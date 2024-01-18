let score = "Okasha"

//console.log(typeof score)
//or
//console.log(typeof(score))

//converting score (string) to a number (int)
let valueInNumber = Number(score)
//console.log(typeof valueInNumber)
//console.log(valueInNumber) //got => NaN (Not a Number)

// "33" => 33
// "33abc" => NaN
// true => 1 , false => 0

let isLoggedIn = "Okasha"
//converting string to boolean
let booleanIsLoggedIn = Boolean(isLoggedIn)
//console.log(booleanIsLoggedIn)

// 1 => true ; 0 => false
// "" => false
// "Okasha" => true

let someNumber = 33
//converting into string
let someString = String(someNumber)
//console.log(someString)
//console.log(typeof (someString))

//****************Operators*******************

let value = 3
let negValue = -value
//console.log(negValue);

//console.log(2+2);
//console.log(2-2);
//console.log(2*2);
//console.log(2**2);
//console.log(2/2);
//console.log(2%2);

let str1 = "hello"
let str2 = "Okasha"
let str3 = str1 + " " + str2
//console.log(str3)

//console.log("1" + 2);
//console.log(1 + "2");
//console.log("1" + 2 + 2); // string on start converts the whole value into string
//console.log(1 + 2 + "2" + 2); // string on end only converts end value to string and the values after it

//console.log( (3 + 5) * 5 % 3) // correct way
//console.log( 3 + 5 * 5 % 8) // not good for readability and wrong way

//console.log(+true)
//console.log(+"")

let num1, num2, num3
num1 = num2 = num3 = 2 + 2 // wrong could type only 4 there are better ways

let gameCounter = 100
gameCounter++;
console.log(gameCounter)
