// Category of User-Define-function
//1.TAKE NOTHING RETURN NOTHING
//2.TAKE NOTHING RETURN SOMETHING
//3.TAKE SOMETHING RETURN NOTHING 
//4.TAKE SOMETHING RETURN SOMETHING

// // 1.TAKE NOTHING RETURN NOTHING
// function addition(){
//     let num1=70;
//     let num2=40;
//     let res=num1+num2;
//     console.log(`Result: ${res}`)
// }
// addition()


// //2.TAKE NOTHING RETURN SOMETHING
// function addition(){
//     let num1=70;
//     let num2=40;
//     let res=num1+num2;
//     return `Result: ${res}`
// }
// let data=addition()
// console.log(data)


// //3.TAKE SOMETHING RETURN NOTHING 
// function addition(a,b){
//         let num1=a;
//         let num2=b;
//         let res=num1+num2;
//         console.log(`Result: ${res}`)
//     }
// addition(45,40)


// // 4.TAKE SOMETHING RETURN SOMETHING
// function addition(a,b){
//     let num1=a;
//     let num2=b;
//     let res=num1+num2;
//     return (`Result: ${res}`)
// }
// let data=addition(45,40)
// console.log(data)


// function pro_upd(c,d){
//     console.log(`This is the Previous Profile ${c}  ${d}`)
//     let a='Arnav';
//     let b='Sharepoint';
//     let res=a+b
//     return `${res}`
// }
// let data=pro_upd('Arnav','Coder')
// console.log(`This is the Upadted profile ${data}`)


function showName(updatedName,updatedBio){
    var name1 = "Arnav";
    var bio  = "SharePoint Developer"

    console.log(`This is the previous profile ${name1} + ${bio}`)
    console.log(`This is the updated profile ${updatedName} + ${updatedBio}}`)
}
showName("Dixit", "Sharepoint")

