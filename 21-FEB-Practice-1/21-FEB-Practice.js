// let string="This is the Javascript"
// let string2=""
// for(let i=string.length-1; i>=0; i--){
//     string2+=string[i]
// }
// console.log(string2)

// let string="This is the Javascript"
// let string2=""
// for(let i=0; i<string.length; i++){
//     string2=string[i]+string2;
// }
// console.log(string2)


// let a="this"
// let b=""
// for (let i=0; i<a.length; i++){
//     b=b+a[i]
// }
// console.log(b)
// let div=document.createElement('div')
//     document.body.append(div)
// let h1=document.createElement('h1')
//     h1.id='original'
//     h1.innerHTML="This is the JavaScript"
//     div.append(h1)
// let h2=document.createElement('h2')
//     h2.id='reverse'
//     h2.innerHTML=   
//     div.append(h2)
let h22=""
let h11=document.getElementById('rev')
function reverse(){
    let input=document.getElementById('reverse').value
    for (let i=0; i<input.length; i++){
        h22=input[i]+h22
    }
    h11.innerHTML=h22
}
