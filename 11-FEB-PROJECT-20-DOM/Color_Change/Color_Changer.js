let change_color=document.querySelector('.box-1')
function remove_color(){
    change_color.classList.remove('bt5','bt6','bt7','bt8')
}
function color_green(){
    document.getElementsByClassName('box-1')[0].style.backgroundColor='green'
}
function color_red(){
    document.getElementsByClassName('box-1')[0].style.backgroundColor='red'
}
function color_blue(){
    document.getElementsByClassName('box-1')[0].style.backgroundColor='blue'
}
function color_orange(){
    document.getElementsByClassName('box-1')[0].style.backgroundColor='orange'
}
function color_purple(){
    remove_color()
    change_color.classList.add('bt5')
}
function color_cyan(){
    remove_color()
    change_color.classList.add('bt6')
}
function color_teal(){
    remove_color()
    change_color.classList.add('bt7')
}
function color_pink(){
    remove_color()
    change_color.classList.add('bt8')
}