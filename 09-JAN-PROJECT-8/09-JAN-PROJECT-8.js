// write a programme to check the divisibility of 4 and 5.
// write a programme to check the number is odd or even.
// write a programme to find out the last digit of a number ex.24534540

// document.write(`<h1>write a programme to check the divisibility of 4 and 5.</h1><hr>`)
// let num=40;
// if(num%4==0 && num%5==0){
//     document.write(`${num} is divisible by 4 and 5`)
// }
// else{
//     document.write(`${num} is Odd`)
// }



// document.write(`<h1>write a programme to check the number is odd or even.</h1><hr>`)
// let num1=46;
// if(num1%2==0){
//     document.write(`${num1} is Even`)
// }
// else{
//     document.write(`${num1} is Odd`)
// }

// let k=75
// if(k>30){
//     document.write(`Hello`)
//     if(k<70){
//         document.write(`By`)
//     }
//     else{
//         document.write(` BY BY`)
//     }
// }
// else{
//     document.write(`not hello`)
// }

// let celsiusValue = 10;
// let fValue = (celsiusValue * 9/5) + 32;
// console.log(`${fValue}F`);


// let n=333;
// let v=546;
// let m=56;
// if(n<v>m){
//     console.log(`${v} is the middle number.`)
// }
// else if(v<n<m){
//     console.log(`${n}`)
// }
// else{ 
// }

function findMiddle(a, b, c) {
    let middle;

    if ((a > b && a < c) || (a < b && a > c)) {
        middle = a;
    } else if ((b > a && b < c) || (b < a && b > c)) {
        middle = b;
    } else {
        middle = c;
    }

    return middle;
}
let num1 = 1000;
let num2 = 20;
let num3 = 150;

console.log("The middle number is:", findMiddle(num1, num2, num3));