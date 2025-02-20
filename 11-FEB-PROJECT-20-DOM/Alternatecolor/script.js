function changeColor(){
    let headings = document.querySelectorAll('h1')
    headings.forEach((headings,index)=>{
      if(index%2==0){
        headings.style.color='red'
      }
      else{
        headings.style.color='blue'
      }
    })
  }