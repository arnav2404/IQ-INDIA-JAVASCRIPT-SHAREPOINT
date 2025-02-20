let initiate=document.getElementById('intiate')
let initiate_btn=document.getElementById('initiate-btn')
function start_system(){
    let user='arnav123'
    let password='arn1234'
    let user_check=prompt(`Enter User Name`)
    let user_password_check=prompt(`Enter User Password`)
    if(user===user_check && user_password_check===password){
        initiate.style.display='block'
        initiate_btn.style.display='none'
    }else{
        alert(`Please Enter valid Username and Password`)
    }
}

function add_table_column(){
    let table=document.getElementById('table')
    let user_name=document.getElementById('user_name').value
    let user_mob=document.getElementById('user_mob').value
    let user_age=document.getElementById('user_age').value
    table.innerHTML += `<tr>
                <td>${user_name}</td>
                <td>${user_mob}</td>
                <td>${user_age}</td>
            </tr>`;
}