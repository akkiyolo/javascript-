let score = "33abc"; // it will print not a number (NaN)

console.log(typeof(score));

let valueInNumber = Number(score);

console.log(typeof(valueInNumber));

console.log(valueInNumber)


// "33" => 33 using explicit conversion
// "33abc" => it will return NaN meaning noit a number



let LoggedIn = "akki"

let isloggedIn = Boolean(LoggedIn)

console.log(isloggedIn);

// true/false => 1/0
// "" => false
// "akki" => true

let someNumber = 33
let stringNumber = String(someNumber)

console.log(typeof stringNumber)
