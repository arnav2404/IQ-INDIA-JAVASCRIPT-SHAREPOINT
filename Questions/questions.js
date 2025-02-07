// write a program of all indexes of a string given by Users

function sum(){
    let user='This is a string Question with the addition od all string'
    let sum=0;

    for(let i=0; i < user.length; i++){
        sum+=1;
    }
    console.log(`The sum of Indexes is: ${sum}`)
}
sum()