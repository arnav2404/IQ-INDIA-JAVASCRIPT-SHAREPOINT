//Regular Expression is a sequence of Characters that defines a Search Pattern
//It enables fast and Quick Searching in Data.
//Regular Expression are Incredibly used in Web-Development for searching and validation with set of pattern

// let string="Winger is a multi-utility passenger vehicle that is Bigger on Mileage, Better on Comfort, Best on Earnings."
// let res=string.match(/Multi-UTiLiTy/i)
// console.log(res)

// let string="Winger is a multi-utility passenger vehicle that is Bigger on Mileage, Better on Comfort, Best on Earnings."
// let pattern=/a/ig
// let res=string.match(pattern)
// console.log(res)

// let string="Winger is a multi-utility passenger vehicle that is Bigger on Mileage, Better on Comfort, Best on Earnings."
// let pattern=/a/ig
// let res=string.search(pattern)
// console.log(res)

// 1. Metacharacter

// ------------------------1'.' :match any character with dots('.')----------------------

// let regex=/a.b/;                       //false
// console.log(regex.test('accscbcsc'))

// let regex=/a.b/;                      // true
// console.log(regex.test('acbcsc'))

// let regex=/a...b/;                       //true
// console.log(regex.test('acscbcsc'))

//------------------ 2.(\d) :matches any digits btw 0-9-------------------

// let regex=/\d+/
// console.log(regex.test('abc'))

// let regex=/\d+/
// console.log('abc789'.match(regex))

// let string="Winger is a multi-utility passenger dev@123 vehicle that is Bigger on Mileage, Better on Comfort, Best on Earnings."
// let regex=/\d+/g
// console.log(string.match(regex))

// --------------------------------3.(\D) :Matches any non digit------------------------

// let string="Winger is a multi-utility passenger dev@123 vehicle that is Bigger on Mileage, Better on Comfort, Best on Earnings."
// let regex=/\D+/g
// console.log(string.match(regex))

// let string="Winger is a multi-utility passenger dev@123 vehicle that is Bigger on Mileage, Better on Comfort, Best on Earnings."
// let regex=/\D+/
// console.log(string.match(regex))

//--------------------------------- 4. (\w) : Matches any word character-------------------

// let string="Winger is a multi-utility passenger dev@123 vehicle that: is Bigger on_Mileage, Better on Comfort, Best on Earnings."
// let regex=/\w+/g
// console.log(string.match(regex))

// ------------------------5. (\W) : Matches any non-word CharacterData;--------------------------

// let string="Winger is a multi-utility +passenger= dev@123 )vehicle& ^ % $ that: is Bigger# on_Mileage, Better on Comfort, Best on Earnings."
// let regex=/\W+/g
// console.log(string.match(regex))

//--------------------------- 6. (\s) : Matches any whitespace (space tab newline)

// let string="Winger is a multi-utility +passenger= dev@123 )vehicle& ^ % $ that: is Bigger# on_Mileage, Better on Comfort, Best on Earnings."
// let regex=/\s/g
// console.log(string.match(regex))

//--------------------------- 7. (\S) : Matches any whitespace (space tab newline)

// let string="Winger is a multi-utility +passenger= dev@123 )vehicle& ^ % $ that: is Bigger# on_Mileage, Better on Comfort, Best on Earnings."
// let regex=/\S/g
// console.log(string.match(regex))

// let string="Winger is a multi-utility +passenger= dev@123 )vehicle& ^ % $ that: is Bigger# on_Mileage, Better on Comfort, Best on Earnings."
// let regex=/\S+/g
// console.log(string.match(regex))

//-------------------------------- 8. (\b) : Word Boundary (match position start or end of word)

// let regex=/\bcat\b/
// console.log(regex.test('dog cat'))

//-------------------------------- 9. (\B) : Non-Word Boundary (match position start or end of word)
// let regex=/\Bcat\B/
// console.log(regex.test('dog cat'))

// 10. (^) : Matches the starting of string.
// let reg=/^ae/
// console.log(reg.test("aeyor bro"))

// 11. ($) : Matches the ending of string
// let reg=/ae$/
// console.log(reg.test("yor broae"))