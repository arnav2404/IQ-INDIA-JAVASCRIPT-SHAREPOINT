// Write a function to create profile
// take image url/path from user and users name , mob,address,bio
// and display the profile in center of user screen in card form.

function create_profile(img_path,user_name,user_contact,user_address,user_bio){
    document.write(`
        <div style=" margin: auto; width: 300px; height: 300px; border: 1px solid red;">
            <img src="${img_path}" alt="missing">
            <div>
                <span>Name    :${user_name || 'NOT AVAILABLE'} </span> 
                <br/>
                <span>Contact :${user_contact || 'NOT AVAILABLE'} </span> 
                 <br/>
                <span>Address :${user_address || 'NOT AVAILABLE'} </span> 
                 <br/>
                <span>Bio     :${user_bio || 'NOT AVAILABLE'} </span> 
                 <br/>
                <button>Follow</button>
                <button>Edit</button>
            </div>
        </div>
        
        `)
}
let img_path=prompt("Enter Image path : ")
let user_name=prompt("Enter User name : ")
let user_contact=prompt("Enter User conctact : ")
let user_address=prompt("Enter User Address : ")
let user_bio=prompt("Enter User bio : ")

create_profile(img_path, user_name, user_contact, user_address, user_bio)