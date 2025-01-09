//Operator
// 1.Arithmatic Operator

document.write(`<hr><h2 style="color:red;">1.Arithmatic Operator</h2><hr>`)

// addition (+)

let n1=45
let n2=40
let res=n1+n2
document.write(`<h2>ADDITION OF ${n1} + ${n2} = ${res}</h2>`)

// subtraction (-)

let n3=45
let n4=40
let res1=n3-n4
document.write(`<h2>SUBTRACTION OF ${n3} - ${n4} = ${res1}</h2>`)

// Multiplication (*)

let n5=45
let n6=40
let res2=n5*n6
document.write(`<h2>MULTIPLICATION OF ${n5} * ${n6} = ${res2}</h2>`)

// Divide (/)

let n7=45
let n8=40
let res3=n7/n8
document.write(`<h2>DIVIDATION OF ${n7} / ${n8} = ${res3}</h2>`)

// Modulus (%)

let n9=95
let n10=55
let res4=n9%n10
document.write(`<h2>MODULUS OF ${n9} % ${n10} = ${res4}</h2>`)

// Square Root (**)

let m6=45
document.write(`<h2>SQUARE ROOT OF ${m6} = ${m6**2}</h2>`)

// Comparision Operator

document.write(`<hr><h2 style="color:red;">2.Comparision Operator</h2><hr>`)

let x=50;
let y=40;
let data=x>y
document.write(`<h2>Greater Than : ${x} > ${y} = ${data}</h2>`)

let x1=50;
let y2=40;
let data1=x1<y2
document.write(`<h2>Lesser Than : ${x1} < ${y2} = ${data1}</h2>`)

let x3=50;
let y4=50;
let data2=x3==y4
document.write(`<h2>Equal To : ${x3} == ${y4} = ${data2}</h2>`)

let x5=50;
let y6=50;
let data3=x5!=y6
document.write(`<h2>Not Equal To : ${x5} != ${y6} = ${data3}</h2>`)


document.write(`<hr><h2 style="color:red;">3.Increament Operator</h2><hr>`)
// post-increament(a++) pre-increament(++a)
// post-decreament(a--) pre-decreament(--a)


// post-increament(a++) 
let m=10;
let q=m++;
document.write(`<h2> post-increament(a++) : ${m}</h2>`)

// pre-increament(++a)

let m1=10;
let q1=++m1;
document.write(`<h2> pre-increament(++a) : ${q1}</h2>`)

document.write(`<hr><h2 style="color:red;">4.Logical Operator</h2><hr>`)

// and - all, condition should be true, if all the values or even one value is smaller than given values, so the ans will be true
let v1=45;
let v2=46;
let v3=v1>20 && v2>40 && v2>30
document.write(`<h2>${v1} and ${v2} = ${v3}</h2>`)

//or - should, if all the values are greater than given value than the answer is in false
let v4=45;
let v5=46;
let v6=v4>200 || v5>400 || v5>300
document.write(`<h2>${v4} or ${v5} = ${v6}</h2>`)

let v7=45;
let v8=46;
let v9=v7<v8 || ! v7>v8
document.write(`<h2>${v7} not ${v8} = ${v9}</h2>`)

//08-JAN

// ternary Operator (?)
document.write(`<hr><h2 style="color:red;">5.Ternary Operator (?)</h2><hr>`)
let marks=55;
let result=(marks>45) ? 'Pass':'Fail';
document.write(`<h2>Result: ${result}</h2>`)

// Unary Operator
document.write(`<hr><h2 style="color:red;">6.Unary Operator</h2><hr>`)
let v=55;
let t=+v
document.write(`<h2>Result: ${t}</h2>`)


// question asked by batchmate

let r=34
let s='34'
let r1=r===s
document.write(`<h2>Result: ${r1}</h2>`)

// Assignment Operator
document.write(`<hr><h2 style="color:red;">7.Assignment Operator</h2><hr>`)
let j=90;
j=j+10 // standard method
j=j+20
j+=23 // shorthand method
j*=20
j/=3
document.write(`<h2>Result: ${j}</h2>`)






