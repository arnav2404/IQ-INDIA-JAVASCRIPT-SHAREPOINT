//------------DOM: Document Object Model---------------

function test(){
    let get=document.getElementsByClassName('get')
    console.log(get)
    for(let i=0; i<get.length; i++){
        get[i].innerHTML="SharePoint Developer"
        get[i].classList.toggle('bg')
    }
}
