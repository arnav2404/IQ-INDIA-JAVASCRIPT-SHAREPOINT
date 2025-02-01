// PROPERTIES
// In js Array is a data structure used to store multiple elementsof different types in a vaeriable.
// Arrray is Indexed, means elelment store in a same model.
// Array is hetrogeneous(Various type data) and homogeneous(Same type data).
// Array is dynamic memory management in JS.
// Array have many inbuilt method used for easy manipulation.

// by using square brakets[]
// let my_data=[1,2,3,4,5,"IQ-India","True",89,90,9]
// console.log(my_data)

// by usinfg new Array()
// let my_data= new Array(1,2,3,4,5,"IQ-India","True",89,90,9) // 'new' is used for creating a Array from a braket
// console.log(my_data)

// ----------access of array()
// let my_data=[1,2,3,4,5,"IQ-India","True",89,90,9,54,546,5646,56487216,5423468521,8151,54,45,54654,2,31,1,211,2,12332,123]
// console.log(my_data[0]) //[] is used for finding the value of array by typing the Index number
// console.log(my_data[size-1])

// let my_arr=[4,51,65,44,23,84,35,945,34,52465,2165,24654,23165]
// lambai=my_arr.length
// console.log(arr[lambai-1]) // agar jis variable me (.lenght) ko store kiya h usko iss tarah se (arr[lenght-1]) toh jo last value hogi woh show ho jayegi
// kyonki m_arr.lenght me toh lenght save h joki ek number jyada h index ki lenght se toh apan ko (-1 ) krna padega

// ------------modification od array

// let array=[12,54,54,68,93,47,35,'arnav','honey','jai']
// // lambai=array.length
// // console.log(array[lambai-1])
// array[1]="Jadu" // agar iss tarah se array[] likhoge aur braket ke under koi bhi index ka number daalke = me koi number ya string doge toh woh uss index ki value ko replace ke dega
// array[array.length-1]='Bhuk Lagi h'
// console.log(array)

// let my_array=['Arnav',12,5465,85,656,96,'Jai','Abhishek',545,85]
// my_array[4]='Aditya'
// console.log(my_array)

// ----------Traversing of Array().

// for (let i=10; i>0; i-=2){
//     console.log(i)
// }

// let my_array=['Arnav',12,5465,85,656,96,'Jai','Abhishek',545,85]
// // // by using for loop
// let size=my_array.length
// for (let i=0; i<size; i++){
//     console.log(`${my_array[i]} = ${i}`)
// }
// let my_array=[45,564,54,654,'Jai',562,'Arnav',423,'Shashi',21,'Aditya',32]
// for (i=0; i<12; i++){
//     console.log(`${my_array[i]}  =  ${i}`)
// }

// by using for of loop
// let my_array=[45,564,54,654,'Jai',562,'Arnav',423,'Shashi',21,'Aditya',32]
// for (i of my_array){
//     console.log(i)
// }


// using for in loop

// 1. 4This is only Showing the Index of the array
// let my_array=[45,564,54,654,'Jai',562,'Arnav',423,'Shashi',21,'Aditya',32]
// for (i in my_array){
//     console.log(i) 
// }

// 2. This is Showing the Index value of the array
// let my_array=[45,564,54,654,'Jai',562,'Arnav',423,'Shashi',21,'Aditya',32]
// for (i in my_array){
//     console.log(my_array[i]) 
// }

// => WHILE LOOP
//by using  While loop
// let set=0;
// while (set<10){
//     console.log(set)
//     // set=set+1 // this will let you get a value according to your need
//     // set=set+3 // this an example as it will give you a value dived by 3
//     // set++ // this will give you a fix value of 0 - 10
//     // set+=1 // this is a short from of the first one gave same answer and you can change it according to your need
//     set+=3 // this is an example
// }

// let my_array=[45,564,54,654,'Jai',562,'Arnav',423,'Shashi',21,'Aditya',32]
// let size=my_array.length
// let set=0
// while (set<size){
//     console.log(my_array)
//     set+=1
// }


// let my_array=[45,564,54,654,'Jai',562,'Arnav',423,'Shashi',21,'Aditya',32]
// let size=my_array.length
// let set=0
// while (set<size){
//     console.log(my_array[set])
//     set+=1
// }

// using do while
// let set=0
// do{
//     console.log(set)
//     set+=1
// }while(set<=10)

//-----------------In-Builted Method of array--------------------
//1. push()
// let my_array=[45,564,54,654,'Jai',562,'Arnav',423,'Shashi',21,'Aditya',32]
// let data=800;
// my_array.push(data)
// console.log(my_array)

// let my_array=[45,564,54,654,'Jai',562,'Arnav',423,'Shashi',21,'Aditya',32]
// let data='Shashi 02';
// my_array.push(data)
// console.log(my_array)

let my_array=[45,564,54,654,'Jai',562,'Arnav',423,'Shashi',21,'Aditya',32]
let add_array='4,8,9,10';
my_array.push(add_array)
console.log(my_array)



