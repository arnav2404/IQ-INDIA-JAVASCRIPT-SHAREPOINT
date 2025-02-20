// let timouts=setTimeout(
//         function fun(){
//             document.getElementById('get').innerHTML="How ar you..."
//         },5000)

let timouts=setTimeout(fun,5000)
let timeouts1=setTimeout(()=>alert(`Your Time has been Over Please Refresh`),10000)
function fun(){
    let get=document.getElementById('get')
    get.innerHTML="How ar you..."
    get.style.background='linear-gradient(55deg, Orange, Red)'
    document.body.style.background='linear-gradient(55deg, blue, cyan)'
    document.body.style.height='70vh'
}