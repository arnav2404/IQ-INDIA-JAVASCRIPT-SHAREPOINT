let color_box=document.getElementById('upper-box')
let btn=document.getElementById('btn')
let hex_code=document.getElementById('hex-code')

function generate_random_number(){
    let color=Math.floor(Math.random()*255)
    return color
}
// function generate_random_green(){
//     let color=Math.floor(Math.random()*255)
//     return color
// }
// function generate_random_blue(){
//     let color=Math.floor(Math.random()*255)
//     return color
// }
function rgb_to_hex(r, g, b) {
    return `#${((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1)}`;
}   

    btn.addEventListener('click',()=>{
        let red=generate_random_number()
        let green=generate_random_number()
        let blue=generate_random_number()
        let hexColor = rgb_to_hex(red, green, blue);
        hex_code.innerText=`${hexColor}`
        color_box.style.backgroundColor=`rgb(${red}, ${green}, ${blue})`
        btn.style.backgroundColor=`rgb(${red}, ${green}, ${blue})`
        btn.style.color=`white`
        btn.style.boxShadow='0px 0px 15px 1px white'
        hex_code.style.boxShadow='0px 0px 15px 1px white'
        // color_box.style.backgroundColor=`rgb(${color})`
    })
    
