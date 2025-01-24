//----------------------------------------------------------Q1--------------------------------------------------------------//

// let wellcome=prompt(`Wellcome to the Food Order. Please Enter Your Name`)
// let menu=parseInt(prompt(`Please Your Desire Food \n1.Dosa - 70rs\n2.Butter Chicken - 250rs (500g)\n3.Momos - 60rs (12 pieces)\n4. Dal Chappati - 120rs`))
// let feedback=prompt(`Would you like to provide the Feedback? \n Yes \n No`)
// let tip=prompt(`Would you like to give a Tip? \n Yes \n No`)
// function foodordermenu(menu){
//     if(menu=='1'){
//         let val=("Dosa - 70rs")
//         return val;
//     }if(menu=='2'){
//         let val=(`Butter Chicken - 250rs (500g)`)
//         return val;
//     }if(menu=='3'){
//         let val=(`Momos - 60rs (12 pieces)`)
//         return val;
//     }if(menu=='4'){
//         let val=(`Dal Chappati - 120rs`)
//         return val;
//     }else{
//         let val=(`Invalid Input please correct order.`)
//         return val;
//     }
// }
// function yourfeedback(feedback){
//     if(feedback=='yes' || feedback=='yes'){
//         let yfb=prompt(`Please Enter Your feedback here. \nGood \nVery Good \nBad \nVery Bad`)
//         return yfb;
//     }else if (feedback=='no' || feedback=='No'){
//        let yfb=(`No Feedback`) 
//        return yfb;
//     }else{
//         let yfb=(`Invalid Input`)
//         return yfb;
//     }
// }
// function yourtip(tip){
//     if(tip=='yes' || tip=='Yes'){
//         let tip1=prompt(`Please enter your Tip? (<=10)`)
//         if (tip1>=10){
//             return tip1;
//         }
//     }else if (tip=='no' || tip=='No'){
//         let tip1=(`No Tip`) 
//         return tip1;
//      }else{
//          let tip1=(`Invalid Input`)
//          return tip1;
//      }
// }

// let price=foodordermenu(menu)
// let feedback1=yourfeedback(feedback)
// let tip2=yourtip(tip)

// document.write(`<h1 style="text-align: center;">Wellcome! ${wellcome}</h1>`)
// document.write(`<h1 style="text-align: center;">Your Order's Total is: ${price}</h1>`)
// document.write(`<h1 style="text-align: center;">Your feeback is: ${feedback1}</h1>`)
// document.write(`<h1 style="text-align: center;">Your Tip is: ${tip2}</h1>`)
// document.write(`<p style="text-align: center; color: red; font-size: 2em;"><b>Thank You For Using Our Service, Please Come Again!</b></p>`)



//----------------------------------------------------------Q2--------------------------------------------------------------//

// let basic_calculator=prompt(`Select the method of operation \n1.Add(+) \n2.Subtract(-) \n3.Multiply(*) \n4.Divide(/) \n5.Exit`)
// let num1=parseFloat(prompt(`Enter Number 1`))
// let num2=parseFloat(prompt(`Enter Number 2`))
// function calculate(basic_calculator){
//     if(basic_calculator=='1'){
//         let res=num1+num2;
//         return res;
//     }if(basic_calculator=='2'){
//         let res=num1-num2;
//         return res;
//     }if(basic_calculator=='3'){
//         let res=num1*num2;
//         return res;
//     }if(basic_calculator=='4'){
//         let res=num1/num2;
//         return res;
//     }if(basic_calculator=='5'){
//         let res=(`Have a Nice Day!`)
//         return res;
//     }else{
//         let res=(`Invalid Input`)
//         return res;
//     }
// }
// let ans=calculate(basic_calculator)

// document.write(`<h1 style="text-align: center;">Your Answer is: <p style="color: red; font-size: 2em;"><b>${ans}</b></p></h1>`)


//----------------------------------------------------------Q3--------------------------------------------------------------//

// let name=prompt(`Enter Your Name as per your Aadhaar`)
// let bmi_weight=parseInt(prompt(`Enter Your Weight here in KG`))
// let bmi_height=parseInt(prompt(`Enter Your Height here in CM`))
// let bmi=(bmi_weight/(bmi_height)*2)*10000
// function bmi_calculator(bmi){
//     if (bmi_height<=0){
//         let res=(`Not a Valid Height`)
//         return res;
//     }else{
//         if (bmi<=18.5){
//             let res=(`Under-Weight`)
//             return res;
//         }if (bmi>=18.5 || bmi<=24.9){
//             let res=(`Normal-Weight`)
//             return res;
//         }if (bmi>=25 || bmi<=29.9){
//             let res=(`Over-Weight`)
//             return res;
//         }if (bmi>=30){
//             let res=(`Obese`)
//             return res;
//         }else{
//             let res=(`Invalid Input`)
//             return res;
//         }
//     }
// }
// let ans=bmi_calculator(bmi)

// document.write(`<h1 style="text-align: center;">Your BMI is : <p style="font-weight: bold; color: red; font-size: 2em;">${ans}</p></h1>`)


//----------------------------------------------------------Q4--------------------------------------------------------------//

// let customer=prompt(`What type of Customer you are? \n1.  Regular customers \n2. Gold customers \n3. Platinum customers`)
// let amount=parseInt(prompt(`Enter the Purchase Amount`))
// function dynamic_discount_calculator(customer,amount){
//     if (customer=="1"){
//         if (amount>=500){
//             let amount1=(10*amount/100)
//             return amount1;
//         }else{
//             let amount1=(5*amount/100)
//             return amount1;
//         }
//     }else if (customer=="2"){
//         if (amount>=500){
//             let amount1=(15*amount/100)
//             return amount1;
//         }else{
//             let amount1=(10*amount/100)
//             return amount1;
//         }
//     }else if (customer=="3"){
//         if (amount>=500){
//             let amount1=(25*amount/100)
//             return amount1;
//         }else{
//             let amount1=(15*amount/100)
//             return amount1;
//         }
//     }
// }
// let ans1=dynamic_discount_calculator(customer,amount)

// document.write(`<h1 style="text-align: center;">Your Amount is: <p style="margin: auto; font-weight: bold; color: red; background-color: rgba(245, 245, 220, 0.57); font-size: 2em; width: 30%; border: 2px solid rgba(128, 128, 128, 0.614);">${amount} Rs</p></h1>`)
// document.write(`<h1 style="text-align: center;">Your Discount is: <p style="margin: auto; font-weight: bold; color: red; background-color: rgba(245, 245, 220, 0.57); font-size: 2em; width: 30%; border: 2px solid rgba(128, 128, 128, 0.614);">${ans1} Rs</p></h1>`)


//----------------------------------------------------------Q5--------------------------------------------------------------//


// let name1=prompt(`Enter the Student Name`)
// let marks=prompt(`Enter the students Marks between (0-100)`)
// let grade=(marks)=>{
//     if (marks>=90 && marks<=100){
//         return '<p style="color: green; font-size: 2em; margin: auto; font-weight: bold; background-color: rgba(245, 245, 220, 0.57); width: 30%; border: 2px solid rgba(128, 128, 128, 0.614);">A+</p>';
//     }else if(marks>=80 && marks<=89){
//         return '<p style="color: lightgreen; font-size: 2em; margin: auto; font-weight: bold; background-color: rgba(245, 245, 220, 0.57); width: 30%; border: 2px solid rgba(128, 128, 128, 0.614);">A</p>';
//     }else if(marks>=70 && marks<=79){
//         return '<p style="color: cyan; font-size: 2em; margin: auto; font-weight: bold; background-color: rgba(245, 245, 220, 0.57); width: 30%; border: 2px solid rgba(128, 128, 128, 0.614);">B</p>';
//     }else if(marks>=60 && marks<=69){
//         return '<p style="color: yellow; font-size: 2em; margin: auto; font-weight: bold; background-color: rgba(245, 245, 220, 0.57); width: 30%; border: 2px solid rgba(128, 128, 128, 0.614);">C</p>';
//     }else if(marks>=50 && marks<=59){
//         return '<p style="color: red; font-size: 2em; margin: auto; font-weight: bold; background-color: rgba(245, 245, 220, 0.57); width: 30%; border: 2px solid rgba(128, 128, 128, 0.614);">D</p>';
//     }else if(marks>=0 && marks<=49){
//         return '<p style="color: crimson; font-size: 2em; margin: auto; font-weight: bold; background-color: rgba(245, 245, 220, 0.57); width: 30%; border: 2px solid rgba(128, 128, 128, 0.614);">F</p>';
//     }else{
//         return 'Please Enter Correct Marks'
//     }
// }
// let ans=grade(marks)

// document.write(`<h1 style="text-align: center;">Student Name is: <p style="margin: auto; font-weight: bold; color: red; background-color: rgba(245, 245, 220, 0.57); font-size: 2em; width: 30%; border: 2px solid rgba(128, 128, 128, 0.614);">${name1}</p></h1>`)
// document.write(`<h1 style="text-align: center;">Student Grade is: <p>${ans}</p></h1>`)


//----------------------------------------------------------Q6--------------------------------------------------------------//


// let name1=prompt(`Enter your Name`)
// let first_seat=prompt(`Enter your First Seat Number`)
// let second_seat=prompt(`Enter your Second Seat Number`)
// document.write(` <h1 style="text-align: center; ">Before Swapping: <p style="margin: auto; font-weight: bold; color: red; background-color: rgba(245, 245, 220, 0.57); font-size: 2em; width: 30%; border: 2px solid rgba(128, 128, 128, 0.614);">${first_seat}, ${second_seat}</p></h1>`)
// let seat_swap=(first_seat,second_seat)=>{
//     temp=first_seat;
//     first_seat=second_seat;
//     second_seat=temp;
//     document.write(` <h1 style="text-align: center; ">After Swapping: <p style="margin: auto; font-weight: bold; color: red; background-color: rgba(245, 245, 220, 0.57); font-size: 2em; width: 30%; border: 2px solid rgba(128, 128, 128, 0.614);">${first_seat}, ${second_seat}</p></h1>`)
// }
// seat_swap(first_seat,second_seat);


//----------------------------------------------------------Q7--------------------------------------------------------------//


// let username=prompt(`Welcome to IQ Hotel! Please Enter Your Name`)
// let user_mobile=parseInt(prompt(`Please Enter Your Mobile Number`))
// let user_age=parseInt(prompt(`Please Enter Your Age`))
// let user_address=prompt(`Please Enter Your Address`)
// let room_type=parseInt(prompt(`Please Select the room you want to have. \n1.Standard Room \n2.Deluxe Room \n3.Suite Room \n4.Exit`))
// let user_rooms=parseInt(prompt(`Please Enter Your Number of Rooms`))
// let user_days=parseInt(prompt(`Please Enter Your Number of Days`))
// let amount1=0;
// if(room_type=='4'){
//     document.write(`<h1 style="text-align: center;">Okay! Thank Have a Nice Day<h1>`)
// }else{
//     let total_amount=(user_rooms,user_days)=>{
//         if (user_rooms=='1'){
//             let amount=user_days*100
//             return amount;
//         }else if (user_rooms=='2'){
//             let amount=user_days*200
//             return amount;
//         }else if (user_rooms=='3'){
//             let amount=user_days*300
//             return amount;
//         }else{
//             let amount='Invalid Input'
//             return amount;
//         }
//     }
//     amount1=total_amount(user_rooms,user_days)
// }

// document.write(`<h1 style="text-align: center;">Your Name is: <p style="margin: auto; font-weight: bold; color: red; background-color: rgba(245, 245, 220, 0.57); font-size: 2em; width: 30%; border: 2px solid rgba(128, 128, 128, 0.614);">${username}</p></h1>`)
// document.write(`<h1 style="text-align: center;">Your Mobile number is: <p style="margin: auto; font-weight: bold; color: red; background-color: rgba(245, 245, 220, 0.57); font-size: 2em; width: 30%; border: 2px solid rgba(128, 128, 128, 0.614);">${user_mobile}</p></h1>`)
// document.write(`<h1 style="text-align: center;">Your Age is: <p style="margin: auto; font-weight: bold; color: red; background-color: rgba(245, 245, 220, 0.57); font-size: 2em; width: 30%; border: 2px solid rgba(128, 128, 128, 0.614);">${user_age}</p></h1>`)
// document.write(`<h1 style="text-align: center;">Your Address is: </h1><p style="margin: auto; text-align: center; color: red; background-color: rgba(245, 245, 220, 0.57); font-size: 2em; width: 30%; border: 2px solid rgba(128, 128, 128, 0.614);">${user_address}</p>`)
// document.write(`<h1 style="text-align: center;">Your Number of Rooms booking is: <p style="margin: auto; font-weight: bold; color: red; background-color: rgba(245, 245, 220, 0.57); font-size: 2em; width: 30%; border: 2px solid rgba(128, 128, 128, 0.614);">${room_type}</p></h1>`)
// document.write(`<h1 style="text-align: center;">Your Number of Days booking is: <p style="margin: auto; font-weight: bold; color: red; background-color: rgba(245, 245, 220, 0.57); font-size: 2em; width: 30%; border: 2px solid rgba(128, 128, 128, 0.614);">${user_days}</p></h1>`)
// document.write(`<h1 style="text-align: center;">Your Total Amount is: <p style="margin: auto; font-weight: bold; color: red; background-color: rgba(245, 245, 220, 0.57); font-size: 2em; width: 30%; border: 2px solid rgba(128, 128, 128, 0.614);">${amount1} Rs</p></h1>`)









