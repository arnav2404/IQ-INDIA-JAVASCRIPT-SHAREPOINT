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

function table(num){
    let arr_table=[]
    let count_x=0;
    let string=""
    for(let i=1; i<=10; i++){
        arr_table.push(`${num} x ${i} = ${num*i}`)
    }
    for(let i=0; i<arr_table.length; i++){
       string+=arr_table[i]
    }
    for(let i=0; i<string.length; i++){
        if(string[i] == 'x'){
            count_x+=1
        }
    }
    console.log(arr_table)
    console.log(`----------------------------`)
    console.log(string)
    console.log(`-------------`)
    console.log(`No. X: ${count_x}`)
}
let num=5
table(num)