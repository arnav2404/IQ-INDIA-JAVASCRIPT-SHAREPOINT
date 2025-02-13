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

//-------------------------------------------- A. Metacharacter ------------------------------------------------

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

// 12. (|) : Alternate (or)
// let reg=/good|bad/
// console.log(reg.test('I am verbady'))
// console.log(reg.test('I am good but pata nhi'))

// 13. (|) : Grouping
// let reg=/(good|bad)s?/
// console.log(reg.test('I am very bad'))
// console.log(reg.test('I am good but pata nhi'))

// 14. (+) : Matches one or more of the preceding character
// let reg=/to+/
// console.log(reg.test('to'))
// console.log(reg.test('tooo'))
// console.log(reg.test('toooo'))

// 15. (\) : Escape special character (for any symbol)
// let reg=/\./
// console.log(reg.test('a.b'))
// console.log(reg.test('abc'))

// let reg=/\@/
// console.log(reg.test('a@b'))
// console.log(reg.test('a.b'))
// console.log(reg.test('abc'))

//---------------------------------------------- B. Brackets -----------------------------------

// 1. Match any character inside any bracket
// let reg=/[abc]/
// console.log(reg.test('this is kite')) //there is no character inside as same as the reg

// let reg=/[abci]/
// console.log(reg.test('this is kite')) // i is present inside this log

// let reg=/[abci]/g
// console.log(reg.test('this is kite'))
// console.log('this is a kite bad'.match(reg))

// let reg=/[aeiou]/g
// console.log(reg.test('this is kite'))
// console.log('aman, abhay, rohan, ankit'.match(reg))

// 2. Match any from a-z.
// let reg=/[A-Z]/ig
// console.log(reg.test('this is kite')) 
// console.log('aman, abhay, rohan, ankit'.match(reg))

// 3. Match any from 0-9.
// let reg=/[A-Za-z0-9@]/g
// console.log(reg.test('this is kite')) 
// console.log('aman, abhay, rohan,5465 ankit, @, &^$%&^*'.match(reg))

// 4. Match not any char.(type those character that you don't want to find)
// let reg=/[^aeiou]/g
// console.log(reg.test('this is kite')) 
// console.log('aman, abhay, rohan,5465 ankit, @, &^$%&^*'.match(reg).length)

// 5. Match 1 time at end.
// let reg=/hey$/g
// console.log(reg.test('he'))
// console.log(reg.test('hey'))
// console.log(reg.test('heyy'))

// 6. Match n time at end.
// let reg=/hey{0}/g
// console.log(reg.test('he bad good'))

// let reg=/hey{5}/g
// console.log(reg.test('heyyyy bad good'))

// let reg=/hey{2}/g
// console.log(reg.test('heyyyy bad good'))

// create a pattern for validate username (min=3, max=15) words+
// 1. alpha metric (Only alphabate) minimum one character in CAPITALS
// 2. NO Symbols and Numbers allowed

// let reg=/^[A-Za-z_]/
// console.log(reg.test('Arnav_Dixit'))

let date='2025-04-24'
let reg=/^\d{4}-\d{2}-\d{2}$/
console.log(reg.test(date))