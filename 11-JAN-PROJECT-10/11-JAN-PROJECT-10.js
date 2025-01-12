////------------------------PARAMETERS AND ARGUMENTS----------------------------////
// function calculates_square(n11,n22){
//     console.log(n11,n22)
// }
// calculates_square(65,55)


// function generic_function(n1,n2){
//     console.log(n1**n2)
// }
// generic_function(5,9)

// write a function to check the charcter passnby user is voewl or not.

function Chr(v){
    if (v=="a" ||v=="e" ||v=="i" ||v=="o" ||v=="u"){
        console.log(`${v} is Voewl`)
    }
    else{
        console.log(`${v} is not a voewl`)
    }
}
let value='4'
Chr(value)

////----------------------Return Keyboard-----------------------////
function add(total_cash,used_cash){
    return total_cash-used_cash
}
let total_cash=100
let used_cash=50
let data=add(total_cash,used_cash)
console.log(data)



