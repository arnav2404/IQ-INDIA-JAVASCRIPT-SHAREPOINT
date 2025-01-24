let username=prompt(`Welcome to IQ Hotel! Please Enter Your Name`)
let user_mobile=parseInt(prompt(`Please Enter Your Mobile Number`))
let user_age=parseInt(prompt(`Please Enter Your Age`))
let user_address=prompt(`Please Enter Your Address`)
let room_type=parseInt(prompt(`Please Select the room you want to have. \n1.Standard Room \n2.Deluxe Room \n3.Suite Room \n4.Exit`))
let user_rooms=parseInt(prompt(`Please Enter Your Number of Rooms`))
let user_days=parseInt(prompt(`Please Enter Your Number of Days`))
let amount1=0;
if(room_type=='4'){
    let exit='Okay! Thank Have a Nice Day'
    return exit;
}else{
        let total_amount=(user_rooms,user_days)=>{
        if (user_rooms=='1'){
            let amount=(user_days*100)
            return amount;
        }else if (user_rooms=='2'){
            let amount=(user_days*200)
            return amount;
        }else if (user_rooms=='3'){
            let amount=(user_days*300)
            return amount;
        }else{
            let amount='Invalid Input'
            return amount;
        }
    }
    amount1=total_amount(user_rooms,user_days)
}

document.write(`Hello! ${username}`)
document.write(`Your Mobile number is: ${user_mobile}`)
document.write(`Your Age is: ${user_age}`)
document.write(`Your Address is: ${user_address}`)
document.write(`Your Room Type is: ${room_type}`)
document.write(`Your Number of Days booking is: ${user_days}`)
document.write(`Your Reciept is: ${amount1}`)