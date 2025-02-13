// ------------------------------------------Q1(odd - even)---------------------------------------------
// let num=20
// for(let i=0; i<=20; i++){
//     if(i%2===0){
//         console.log(`The even numbers are: ${i}`)
//     }else{
//         console.log(`The odd numbers are: ${i}`)
//     }
// }

// ------------------------------------------Q2(Multiple of 12)---------------------------------------------
// let num=120
// for(let i=12; i<=num; i+=12){
//     console.log(i)
// }

// ------------------------------------------Q3(Table)---------------------------------------------
// let user=2
// for(let i=1; i<=10; i++){
//     console.log(`${user} x ${i} = ${user*i}`)
// }

// ------------------------------------------Q4(Prime Number)---------------------------------------------
// let num=5
// let count=0
// for(let i=1; i<=num; i++){
//     if(num%i===0){
//         count++
//     }
// }
// if(count<=2){
//     console.log(`${num} is a Prime Number`)
// }else{
//     console.log(`${num} is not Prime Number`)
// }

// ------------------------------------------Q5(Addition Start-End)---------------------------------------------
// let Start=6;
// let End=20;
// let sum=0;
// for(let i=Start; i<=End; i++){ //Start < End
//     sum+=i;
    
// }
// console.log(`The SUM of Numbers is: ${Start} + ${End} = ${sum}`)

// ------------------------------------------Q6(Multiply Start-End)---------------------------------------------
// let start=1
// let end=4
// let multi=1
// for (let i=start; i<=end; i++){
//     multi*= i
// }
// console.log(`The multiple of numbers is: ${start} * ${end} = ${multi}`)

// ------------------------------------------Q7(Fibonacci Sequence)---------------------------------------------
// let terms=10
// let a=0, b=1, nextTerm;
// console.log(`Fibonacci Sequence:`)
// for(let i=0; i<=terms; i++){
//     console.log(a)
//     nextTerm=a+b;
//     a=b;
//     b=nextTerm;
// }

// ------------------------------------------Q8(Factorial)---------------------------------------------
// let number=5
// let factorial=1
// for(let i=1; i<=number; i++){
//     factorial*=i
// }
// console.log(`Factorial of ${number}: ${factorial}`)

// ------------------------------------------Q9(All letters except 'm' and 'i)---------------------------------------------
// let text="Dreamer infotech"
// let result=""
// for(let i=0; i<text.length; i++){
//     let character = text[i]
//     if (character!=='m' && character!=='i'){
//         result += char;
//     }
// }
// console.log(result)

// ------------------------------------------Q10(Print Alternate Characters)---------------------------------------------
// let text="arnav, jai, shashi, dishant"
// let result=''
// for (let i=0; i<text.length; i+=2){
//     result += text[i]
// }

// console.log(`Alternate Characters: ${result}`)

// ------------------------------------------Q11(Reverse the string)---------------------------------------------
// let text="arnav, jai, shashi, dishant"
// let reversed=''
// for (let i=text.length-1; i>=0; i--){
//     reversed += text[i]
// }

// console.log(`Alternate Characters: ${reserved}`)

// ------------------------------------------Q12(total number of strings)---------------------------------------------
// let text='Arnav Dixit, Jai, Shashi, Dishant'
// let words=text.trim().split(/\s+/)
// let count=words.length
// console.log(`Total number of words: ${count}`)

// --------------------------------------v----Q13(string is a palindrome or not:)---------------------------------------------
// let text="madam".toLowerCase().replace(/[^a-z0-9]/g)
// let reversed=text.split("").reverse().join("")
// if(text===reversed){
//     console.log("This is a Pallindrome.")
// }else{
//     console.log("This is not a Pallindrome.")
// }

// ------------------------------------------Q14(Search for a character within a given string)---------------------------------------------
// let text='Arnav Dixit is Rich Person'
// let character='v'
// let found=false
// for(let i=0; i<text.length; i++){
//     if(text[i] === character){
//         found = true
//         break
//     }
// }
// if (found){
//     console.log(`The Character ${character} exists in the String`)
// }else{
//     console.log(`The Character ${character} does not exist in the string`)
// }

// ------------------------------------------Q15(Filter out vowels and consonants)---------------------------------------------
// let text='Arnav Dixit Jai Shashi Dishant IQ-India'.toLowerCase()
// let vowels=""
// let consonants=""

// for(let i=0; i<text.length; i++){
//     let character=text[i]
//     if(character.match(/[a-z]/)){
//         if ("aeiou".includes(character)){
//             vowels += character
//         }else{
//             consonants += character
//         }
//     }
// }
// console.log(`Vowels: ${vowels}`)
// console.log(`Consonants: ${consonants}`)

// ------------------------------------------Q16(Filter out duplicate characters of a string)---------------------------------------------
// let text='Arnav Dixit Jai Shashi Dishant IQ-India'
// let unique_character=''
// for(let i=0; i<text.length; i++){
//     if(!unique_character.includes(text[i])){
//         unique_character += text[i]
//     }
// }

// console.log(`String without Duplicates: \n ${unique_character}`)

// ------------------------------------------Q17(Display possible pairs of 3 (e.g., 1:3, 2:3, 3:3))---------------------------------------------
// let constant_number=4
// for(let i=0; i<=10; i++){
//     console.log(`${i}:${constant_number}`)
// }

// ------------------------------------------Q18(Check duplicate letters between two strings)---------------------------------------------
// let string1='Arnav Dixit Jai Shashi Dishant IQ-India'.toLowerCase()
// let string2='Arnav Dixit Jai Shashi Dishant IQ-India'.toLowerCase()

// let duplicates=""
// for(let character of string1){
//     if (string2.includes(character) && !duplicates.includes(character)){
//         duplicates += character
//     }
// }
// console.log(`Duplicates letters: ${duplicates || none}`)

// ------------------------------------------Q19(Display the square of numbers from 1 to 10)---------------------------------------------
// for(let i=1; i<=10;i++){
//     console.log(`Square of ${i} is ${i * i}`)
// }



