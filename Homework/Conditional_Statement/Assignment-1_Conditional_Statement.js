// //1. student grading system


// let m=parseInt(prompt("Enter Your Marks : "))
// if (m>=90 && m<=100){
//     document.write(`<h1>Grade : A</h1>`)
// }else if (m<=89 && m>=80){
//     document.write(`<h2>Grade : B</h2>`)
// }else if (m<=79 && m>=70){
//     document.write(`<h2>Grade : C</h2>`)
// }else if (m<=69 && m>=60){
//     document.write(`<h2>Grade : D</h2>`)
// }else if (m<=59 && m>=50){
//     document.write(`<h2>Grade : E</h2>`)
// }else if (m<=49 && m>=0){
//     document.write(`<h2>Grade : F</h2>`)
// }else{
//     document.write(`<h1>Invalid Input</h1>`)
// }



//// 2. Tax Calculation for Car Purchase

// let brand=prompt("Enter the Car Brand (Audi, Mahindra, Jaguar, Mercedes)")
// let price=parseFloat(prompt("Enter the Car price in Lakhs (7L-10L, 10L-15L, 15L-20L, 20L-25L)           (in 000000 format)"))
// if (brand=="Mahindra" || brand=="mahindra" && (price>=700000 && price<=1000000)){
//     document.write(`<h1>Tax on Mahindra will be ${(price/100)*5}</h1>`)
// }else if(brand=="Audi" || brand=="audi" && (price>=1000000 && price<=1500000)){
//     document.write(`<h1>Tax on Audi will be ${(price/100)*10}</h1>`)
// }else if(brand=="Jaguar" || brand=="jaguar" && (price>=1500000 && price<=2000000)){
//     document.write(`<h1>Tax on Audi will be ${(price/100)*25}</h1>`)
// }else if(brand=="Mercedes" || brand=="mercedes" && (price>=2000000 && price<=2500000)){
//     document.write(`<h1>Tax on Audi will be ${(price/100)*30}</h1>`)
// }else{
//     document.write(`<h1>Invalid Input</h1>`)
// }


// //3.Finding the Middle Number

// let number1=parseInt(prompt("Enter the First Number"))
// let number2=parseInt(prompt("Enter the Second Number"))
// let number3=parseInt(prompt("Enter the Last Number"))
// if ((number1<number2 && number1>number3) || (number1>number2 && number1<number3)){
//     document.write(`<h1>Middle No. : ${number1}</h1>`)
// }else if ((number2<number1 && number2>number3) || (number2>number1 && number2<number3)){
//     document.write(`<h1>Middle No. : ${number2}</h1>`)
// }else{
//     document.write(`<h1>Middle No. : ${number3}</h1>`)
// }


// // 4.Find the greatest number
// let num1=parseInt(prompt(`Type the First Number`))
// let num2=parseInt(prompt(`Type the Second Number`))
// let num3=parseInt(prompt(`Type the Third Number`))
// if (num1>num2 && num1>num3){
//     document.write(`<h1>${num1} is the greatest number</h1>`)
// }else if(num2>num1 && num2>num3){
//     document.write(`<h1>${num2} is the greatest number</h1>`)
// }else{
//     document.write(`<h1>${num3} is the greatest number</h1>`)
// }


//// 5.Authentication System
// let username=prompt("Enter your Username")
// let password=prompt("Enter your Password")
// if ((username=="user1" || username=="USER1") && (password=="pass@123" || password=="PASS@123")){
//     document.write(`<h1 style="color:green;">Authentication Successfull</h1>`)
// }else{
//     document.write(`<h1 style="color:red;">Authentication Failed</h1>`)
// }


//// 6. Calculate Class Attendance Percentage
// let percentage=prompt("Write Your Total Attendance Percentage of all Classes")
// if (percentage>=75 && percentage<=100){
//     document.write(`<h1>Eligible to sit in the exam</h1>`)
// }else if(percentage>=101){
//     document.write(`<h1>Invalid Input</h1>`)
// }else{
//     document.write(`<h1>Not eligible to sit in the exam</h1>`)
// }


// 7. Library Charge Calculation
// let charges=parseInt(prompt("Enter the Total no. of days you've borrwed the book"))
// if (charges<=5 && charges>=1){
//     document.write(`<h1>Total Charges are: ${2*charges}</h1>`)
// }else if (charges<=10 && charges>=6){
//     document.write(`<h1>Total Charges are: ${3*charges}</h1>`)
// }else if (charges<=15 && charges>=11){
//     document.write(`<h1>Total Charges are: ${4*charges}</h1>`)
// }else{
//     document.write(`<h1>Total Charges are: ${5*charges}</h1>`)
// }


// ////8.UPSC Selection Process 
// //----------Eligibility Check-----------------//
// let age=parseInt(prompt(`Type your Age`))
// if (age>=21 && age<=32){
//     let graduate=prompt(`Type your Graduate Status (Yes and No only)`)
//         if (graduate=='Yes' || graduate=='yes' || graduate=='YES'){
//             let nationality=(prompt(`What's Your Nationality?`))
//                 if(nationality=='India' || nationality=='indian' || nationality=='india' || nationality=='Indian' || nationality=='INDIA' || nationality=='INDIAN'){
//                     let congrats=(prompt(`You've Successfully Entered in Next Process (PRESS ENTER)`))
//                     let prelim_score=parseInt(prompt(`Enter Your Prelims Exam Score Between 0-150`)) //-------------Prelims Exam-----------------//
//                     if (prelim_score>=100 && prelim_score<=150){
//                         let main_score=parseInt(prompt(`Enter Your Mains Exam Score Between 0-175`))//-------------Mains Exam-----------------//
//                         if (main_score>=120 && main_score<=175){
//                             let interview_score=parseInt(prompt(`Enter Your Interview Exam Score Between 0-200`))//-------------Interview Exam-----------------//
//                                 if (interview_score>=140 && interview_score<=200){
//                                     document.write(`<h1>Congratulations! You have cleared the UPSC.</h1>`)
//                             }else{
//                                 document.write(`<h1>You failed the Interview</h1>`)
//                             }
//                         }else{
//                             document.write(`<h1>You failed the Mains</h1>`)
//                         }
//                     }else{
//                         document.write(`<h1>You failed the Prelims</h1>`)
//                     }
//                 }else{
//                     document.write(`<h1>Not Eligible you're not from India</h1>`)
//                 }
//             }else{
//                 document.write(`<h1>Not Eligible You're not Graduate</h1>`)
//                 }
//         }else{
//             document.write(`<h1>Your Age is not Eligible</h1>`)
//             }    



// //9.  Menu-Driven Login System
// //-------------Create the Menu-------------//
// let menu=prompt(`Please Select the login Method \n 1. Login With Phone \n2. Login With Email \n3. Exit the System`)
// if (menu=="1"){
//     let ent_phn=prompt(`Enter the Phone Number.`)
//     let ent_otp=prompt(`Enter the OTP.`)
//     if (ent_phn=="1234567890" && ent_otp=="1234"){
//         document.write(`<h1>Login Successfull with Phone Number</h1>`)
//     }else{
//         document.write(`<h1>Either Phone Number or OTP is Incorrect.</h1>`)
//     }
// }else if (menu=="2"){
//     let ent_email=prompt(`Enter the Email.`)
//     let ent_pass=prompt(`Enter the Password.`)
//     if (ent_email=='user@gmail.com' && ent_pass=='pass123'){
//         document.write(`<h1>Login Succesfull with Email.</h1>`)
//     }else{
//         document.write(`<h1>Either Email ID or Password is Incorrect.</h1>`)
//     }
// }else if(menu=="3"){   
//         document.write(`<h1>Exiting the program. Have a nice day!</h1>`)
//     }


// //10. Create Your Own KBC Game
// //-----------------Game Structure-------------//
// let welcome=prompt("Welcome to Kaun Banega Crorepati (KBC)! (PRESS ENTER)")
// //-----------------Scoring System-------------//
// let total_score=0;
// let numberofcorrectanswers=0;
// let numberofskippedquestions=0;
// let numberofwronganswer=0;
// let start=prompt(`Do You Want to Play? (Yes and No)`)
// if (start=='yes' || start=='Yes'){
//     let question1=prompt(`Question-1 \n What is the capital of India? \nA. Mumbai \nB. New Delhi \nC. Kolkata \nD. Chennai \nE. Skip`)
//         if (question1=='E' || question1=='e'){
//             numberofskippedquestions++;
//         }else if(question1=='B' || question1=='b'){
//             total_score += 1000;
//             numberofcorrectanswers++;
//         }else{
//             numberofwronganswer++;
//         }
//         let question2=prompt(`Who is known as the father of the Indian Constitution? \nA. Mahatma Gandhi \nB. Subhash Chandra Bose \nC. Jawaharlal Nehru \nD. B. R. Ambedkar \nE. Skip`)
//         if (question2=='E' || question2=='e'){
//             numberofskippedquestions++;
//         }else if(question2=='D' || question2=='d'){
//             total_score += 2000;
//             numberofcorrectanswers++;
//         }else{
//             numberofwronganswer++;
//         }
//         let question3=prompt(`Which is the largest planet in our solar system? \nA. Jupiter \nB. Earth \nC. Mars \nD. Saturn \nE. Skip`)
//         if (question3=='E' || question3=='e'){
//             numberofskippedquestions++;
//         }else if(question3=='A' || question3=='a'){
//             total_score += 3000;
//             numberofcorrectanswers++;
//         }else{
//             numberofwronganswer++;
//         }
//         let question4=prompt(`Which Indian cricketer is known as the 'God of Cricket'? \nA. Virat Kohli \nB. MS Dhoni \nC. Mars \nD. Rahul Dravid \nE. Skip`)
//         if (question4=='E' || question4=='e'){
//             numberofskippedquestions++;
//         }else if(question4=='C' || question4=='c'){
//             total_score += 5000;
//             numberofcorrectanswers++;
//         }else{
//             numberofwronganswer++;
//         }
//         let question5=prompt(`What is the national animal of India? \nA. Lion \nB. Tiger \nC. Elephant \nD. Peacock \nE. Skip`)
//         if (question5=='E' || question5=='e'){
//             numberofskippedquestions++;
//         }else if(question5=='C' || question5=='c'){
//             total_score += 10000;
//             numberofcorrectanswers++;
//         }else{
//             numberofwronganswer++;
//         }//--------------End of Game Statistics-------------//
//         let rating=prompt(`What Rating would you like to give? (1-5) \n1. ⭐ \n2. ⭐⭐ \n3. ⭐⭐⭐ \n4. ⭐⭐⭐⭐ \n5. ⭐⭐⭐⭐⭐`)
//         if (rating=='1'){
//             document.write(`<h1>Rating : ${rating} ⭐</h1>`)
//         }else if (rating=='2'){
//             document.write(`<h1>Rating : ${rating} ⭐⭐</h1>`)
//         }else if (rating=='3'){
//             document.write(`<h1>Rating : ${rating} ⭐⭐⭐</h1>`)
//         }else if (rating=='4'){
//             document.write(`<h1>Rating : ${rating} ⭐⭐⭐⭐</h1>`)
//         }else if (rating=='5'){
//             document.write(`<h1>Rating : ${rating} ⭐⭐⭐⭐⭐</h1>`)
//         }
//         document.write(`<h1>Number of Correct Answers : ${numberofcorrectanswers}</h1>`)
//         document.write(`<h1>Number of Wrong Questions : ${numberofwronganswer}</h1>`)
//         document.write(`<h1>Number of Skipped Questions ${numberofskippedquestions}:</h1>`)
//     }
