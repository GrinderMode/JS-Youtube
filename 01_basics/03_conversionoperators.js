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
console.log(booleanIsLoggedIn)

// 1 => true ; 0 => false
// "" => false
// "Okasha" => true

let someNumber = 33
//converting into string
let someString = String(someNumber)
console.log(someString)
console.log(typeof (someString))