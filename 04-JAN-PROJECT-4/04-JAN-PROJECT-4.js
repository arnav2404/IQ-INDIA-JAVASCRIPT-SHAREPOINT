let name1="IQ INDIA"
document.write(`<center><h2>Hello Javascript</h2></center>`)
document.write(`<center><h1>${name1}</h1></center>`)
document.write(`<hr>`)
console.log(name1)

let num1=56
let num2=74
let res=num1+num2
document.write(`<h1 style="color:yellow"><span style="color:green">${num1}</span> <span style="color:black">+</span> <span style="color:blue">${num2}</span><span style="color:black">=</span>${res}</h1>`)
//               ^^                        ^
// > we put span so we can edit each number or variable in different color
// >> we can use HTML h1, h2, style and so on inside (`here`)
console.log(res)

let n1=Number(prompt("ENTER YOUR NUMBER 1 :")) // prompt is use to get the value from user in a pop up form
let n2=Number(prompt("ENTER YOUR NUMBER 2 :"))
let total=n1+n2
document.write(`<h1>Result : ${total}</h1>`)