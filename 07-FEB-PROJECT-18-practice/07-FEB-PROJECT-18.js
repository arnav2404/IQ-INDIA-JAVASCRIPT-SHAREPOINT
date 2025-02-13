// write a function to print the table of a number pass by user.
// input: 2
// output:
// 2 x 1 = 2
// 2 x 2 = 4
// 2 x 3 = 6
// 2 x 10 = 20

// function table(a){
//     for(let i=0; i<=20; i++){
//         let res=i*a
//         console.log(res)
//     }

// }
// table(2)

// function table(num){
//     for(let i=1; i<=10; i++)
//         console.log(`${num} x ${i} = ${num*i}`)
// }
// let num=5
// table(num)

// function table(num){
//     let arr_table=[]
//     for(let i=1; i<=10; i++){
//         arr_table.push(`${num} x ${i} = ${num*i}`)
//     }
//     console.log(arr_table)
// }
// let num=5
// table(num)

// function table(num){
//     let arr_table=[]
//     for(let i=1; i<=10; i++){
//         arr_table.push(`${num} x ${i} = ${num*i}`)
//     }
//     console.log(arr_table.toString().split(' '))
// }
// let num=5
// table(num)

// function table(num){
//     let arr_table=[]
//     let count_x=0;
//     let string=""
//     for(let i=1; i<=10; i++){
//         arr_table.push(`${num} x ${i} = ${num*i}`)
//     }
//     for(let i=0; i<arr_table.length; i++){
//        string+=arr_table[i]
//     }
//     for(let i=0; i<string.length; i++){
//         if(string[i] == 'x'){
//             count_x+=1
//         }
//     }
//     console.log(arr_table)
//     console.log(`----------------------------`)
//     console.log(string)
//     console.log(`-------------`)
//     console.log(`No. X: ${count_x}`)
// }
// let num=5
// table(num)


// -------------------------08-FEB-2025----------------------
// let count=0
// let num=12
//     for (let i=1; i<=num; i++){
//         if (num%1==0){
//             console.log(`multiple of ${num}: ${i}`)
//             count+=1
//         }
//     }
// console.log(`${count}`)


// let count=0
// let num=12
// let multiple=[]
//     for (let i=1; i<=num; i++){
//         if (num%1==0){
//             multiple.push(`multiple of ${num}: ${i}`)
//             count+=1
//         }
//     }
// console.log(`Total Multiple: ${count}`)
// console.log(`Multiple of ${n}:`,multiple)

// find all vowels from an array ['aman','abhay','rohan','ankit']

// using toString() and Split()
// let data=['aman','abhay','rohan','ankit'].toString().split('')
// for(let i of data.toString().toLowerCase()){
//     if (i=='a' || i=='e' || i=='i' || i=='o' || i=='u'){
//     }
//     console.log(i)
// }

// let data=['aman','abhay','rohan','ankit']
// let str=""
// for(let i of data){
//     str+=1
// }

// for (let i of str.toLowerCase()){
//     if(i=='a' || i=='e' || i=='i' || i=='o' || i=='u'){
//         console.log(i)
//     }
// }

// create a pattern for validate username (min=3, max=15) words+
// 1. alpha metric (Only alphabate) minimum one character in CAPITALS
// 2. NO Symbols and Numbers allowed

// let username=/^(?=[A-Z])[A-Za-z_ ]{3,15}$/;
// console.log(username.test('Arnav_Dixit'))