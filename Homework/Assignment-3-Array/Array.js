// ---------------------------------Q1-------------------------------------
// function groupEmployeesByID(employeeIDs){
//     let group_A = [];
//     let group_B = [];

//     employeeIDs.forEach(id =>{
//         if(id % 2 === 0){
//             group_A.push(id);
//         }else{
//             group_B.push(id);
//         }
//     })
//     return{group_A, group_B}
// }
// let employeeIDs=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
// let groupEmployees= groupEmployeesByID(employeeIDs)

// console.log(`Group A (Even IDs): ${groupEmployees.group_A}`)
// console.log(`Group B (Odd IDs): ${groupEmployees.group_B}`)


// ---------------------------------Q2-------------------------------------
// function categorizeTransactions(transactions){
//     transactions.forEach((amount, index) => {
//         let category=amount % 2 === 0 ? "Approved" : "Requires Manual Review"
//         let type = amount % 2 === 0 ? "Even" : "ODD"
//         console.log(`Transaction ${index + 1} : ${amount} - ${type} - ${category}`)    
//     });
// }
// let transactions=[1200,755,300,987,450]
// categorizeTransactions(transactions)

// ---------------------------------Q3-------------------------------------
// function categorizeGroceryItems(){
//     let itemCount=parseInt(prompt(`Enter the number of grocery items`),10)
//     let groceryList=[]

//     for (let i=0; i<itemCount; i++){
//         let itemName=prompt(`Enter name of item ${i+1}:`)
//         let itemPrice=parseFloat(prompt(`Enter price of ${itemName}`))
//         let category=itemPrice<200 ? "On Sale" : "Regular Price"
//         groceryList.push(`<br> <p style="margin:auto; text-align:center; font-size:1.5em;"><b>Item Name :</b> <span style="color: Blue;">${itemName}</span> , <b>Price :</b> <span style="color: lightgreen;">${itemPrice}</span> , <b style="color: Red;">${category}</b></p>`)
//     }
    
//         document.write(`<p style="margin:auto; text-align:center; font-size:1.5em;">Grocery List: ${groceryList} </p>`)
// }
// categorizeGroceryItems()

// ---------------------------------Q4-------------------------------------
// function findExtremeTempertures(){
//     let city_count=parseInt(prompt("Enter the Number of Cities:"), 10)
//     let temperatures_data=[]
//     for (let i=0; i<city_count; i++){
//         let city_name=prompt(`Enter name of City ${i+1}:`)
//         let city_temp=parseFloat(prompt(`Enter temperature of ${city_name}:`))
//         temperatures_data.push({name: city_name, temperature: city_temp})
//     }
//     let highestTempCity=temperatures_data.reduce((max, city)=> city.temperature > max.temperature ? city: max, temperatures_data[0])
//     let lowestTempCity=temperatures_data.reduce((min, city)=> city.temperature < min.temperature ? city: min, temperatures_data[0])

//     document.write(`<p style="text-align:center; font-size:1.5em; width:60%; margin:auto">The state with the highest Temperature is <b style="color:Green; font-size:1.7em; background-color:beige; border-radius:5px;">${highestTempCity.name}</b>, with a Temperature of <b style="color:Red; font-size:1.7em; background-color:beige; border-radius:5px;">${highestTempCity.temperature}</b>°C</p>`)
//     document.write(`<br><p style="text-align:center; font-size:1.5em; width:60%; margin:auto">The state with the lowest Temperature is <b style="color:Green; font-size:1.7em; background-color:beige; border-radius:5px;">${lowestTempCity.name}</b>, with a Temperauture of <b style="color:Red; font-size:1.7em; background-color:beige; border-radius:5px;">${lowestTempCity.temperature}</b>°C</p>`)
// }
// findExtremeTempertures()

// ---------------------------------Q5-------------------------------------
// function filterCustomerByLetter(customers, letter){
//     let filteredCustomers=customers.filter(name => name.toLowerCase().startsWith(letter.toLowerCase()))
//     console.log(`Customer whose names start with ${letter}:`)
//     filteredCustomers.forEach(name => console.log(name))
// }
// let customersNames=['Arnav','Jai','Shashi','Radha','Aditya','Ranjeet','Dishant']
// filterCustomerByLetter(customersNames, 'R')

// ---------------------------------Q6-------------------------------------
// function findLongestTitle(books){
//     if (books.lenght === 0){
//         console.log("No Books in the Catalog.")
//         return;
//     }
//     let longestTitle=books.reduce((longest, current)=>
//         current.length > longest.length ? current : longest
//     )
//     console.log(`The book with the longest title is: ${longestTitle}`)
// }
// let book_titles=['Harry Porter','Narnia','The Great Gatsby', 'Atomic habits', 'The Catcher in the Rye', 'War and Peace', 'The Old Man and the Sea', 'A Brief History of Time','The Batman','Dune','Sword Art Online','Pirates of the Caribbian']

// findLongestTitle(book_titles)

// ---------------------------------Q7-------------------------------------
// function validateUsernames(usernames, minlength = 3, maxlength = 10){
//     return usernames.map(username => {
//         return `${username}:  len-${username.length}`
//     }).filter(username=>{
//         let length=parseInt(username.split('-')[1])
//         return length >= minlength && length <= maxlength
//     })
// }

// let Usernames=['Ashutosh', 'Arnav', 'Jai', 'R', 'aarav123', 'vihaan007', 'vivaan_k', 'ananya.star', 'ishita_01',
// 'aanya.sharma', 'rohan_raj', 'aryan_singh', 'sid.cool', 'priya_1995', 'Aditya', 'Temperature', 'Aditya-02','Shubham', 'Kartik', 'Ankit', 'Avilash', 'Shashi', 'Dishant']

// let result=validateUsernames(Usernames)
// console.log(result)

// ---------------------------------Q8-------------------------------------
// function filterEmployeesByChar(employees, Char){
//     return employees.filter(name => name.toLowerCase().startsWith(Char.toLowerCase()))
// }
// let employees=['Ashutosh', 'Arnav', 'Jai', 'R', 'aarav123', 'vihaan007', 'vivaan_k', 'ananya.star', 'ishita_01', 'aanya.sharma', 'rohan_raj', 'aryan_singh', 'sid.cool', 'priya_1995', 'Aditya', 'Temperature', 'Aditya-02','Shubham', 'Kartik', 'Ankit', 'Avilash', 'Shashi', 'Dishant']
// let searchChar = 'A'
// let filteredEmployees=filterEmployeesByChar(employees, searchChar)
// console.log(`Employees Starting with ${searchChar}:`, filteredEmployees)

// ---------------------------------Q9-------------------------------------
// function E_CommerceDescription(descriptions, limit = 20){
//     return descriptions.map(document => document.length > limit ? `${document.substring(0, limit)}...view more` : desc)
// }

// let product_Descriptions = [
//     'This new smartwatch is packed with features including heart rate monitoring, sleep tracking, and a long battery life.',
//      'Our latest smartphone has an ultra-fast processor, an incredible camera, and long-lasting battery life.',
//      'This ergonomic office chair is designed to provide comfort for long hours of sitting, with adjustable features.',
//      'The new gaming laptop features a high-resolution display, powerful graphics card, and fast processing power.',
//      'Eco-friendly water bottles made from recycled materials that keep your beverages hot or cold for hours.']

// let E_Commerce_Product_Description=E_CommerceDescription(product_Descriptions)
// console.log(E_Commerce_Product_Description)

// ---------------------------------Q10-------------------------------------
// let employees = [];

// function addEmployeeLast(name) {
//     employees.push(name);
//     console.log(`Employee added at last position: ${name}`);
// }

// function addEmployeeFirst(name) {
//     employees.unshift(name);
//     console.log(`Employee added at first position: ${name}`);
// }

// function addEmployeeAtPosition(name, position) {
//     if (position < 0 || position > employees.length) {
//         console.log("Invalid position");
//         return;
//     }
//     employees.splice(position, 0, name);
//     console.log(`Employee added at position ${position}: ${name}`);
// }

// function readEmployeeFirst() {
//     console.log(employees.length ? employees[0] : "No employees available");
// }

// function readEmployeeLast() {
//     console.log(employees.length ? employees[employees.length - 1] : "No employees available");
// }

// function readEmployeeAtPosition(position) {
//     console.log(position >= 0 && position < employees.length ? employees[position] : "Invalid position");
// }

// function deleteEmployeeFirst() {
//     console.log(employees.length ? `Deleted: ${employees.shift()}` : "No employees to delete");
// }

// function deleteEmployeeLast() {
//     console.log(employees.length ? `Deleted: ${employees.pop()}` : "No employees to delete");
// }

// function deleteEmployeeAtPosition(position) {
//     if (position >= 0 && position < employees.length) {
//         console.log(`Deleted: ${employees.splice(position, 1)[0]}`);
//     } else {
//         console.log("Invalid position");
//     }
// }

// function updateEmployeeFirst(name) {
//     if (employees.length) {
//         employees[0] = name;
//         console.log(`First employee updated to: ${name}`);
//     } else {
//         console.log("No employees available");
//     }
// }

// function updateEmployeeLast(name) {
//     if (employees.length) {
//         employees[employees.length - 1] = name;
//         console.log(`Last employee updated to: ${name}`);
//     } else {
//         console.log("No employees available");
//     }
// }

// function updateEmployeeAtPosition(name, position) {
//     if (position >= 0 && position < employees.length) {
//         employees[position] = name;
//         console.log(`Employee at position ${position} updated to: ${name}`);
//     } else {
//         console.log("Invalid position");
//     }
// }

// function showAllEmployees() {
//     console.log(employees.length ? `Employee List: ${JSON.stringify(employees)}` : "No employees available");
// }

// function menu() {
//     console.log(`\n1. Add Employee at Last Position\n2. Add Employee at First Position\n3. Add Employee at Specific Position\n4. Read Employee at First Position\n5. Read Employee at Last Position\n6. Read Employee at Specific Position\n7. Delete Employee at First Position\n8. Delete Employee at Last Position\n9. Delete Employee at Specific Position\n10. Update Employee at First Position\n11. Update Employee at Last Position\n12. Update Employee at Specific Position\n13. Show All Employees\n14. Exit`);
// }

// let readline = require("readline").createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// function start() {
//     menu();
//     readline.question("Enter your choice: ", choice => {
//         if (choice == 14) {
//             console.log("Exiting program...");
//             readline.close();
//             return;
//         }
        
//         switch (parseInt(choice)) {
//             case 1:
//                 readline.question("Enter Employee Name: ", name => {
//                     addEmployeeLast(name);
//                     start();
//                 });
//                 break;
//             case 2:
//                 readline.question("Enter Employee Name: ", name => {
//                     addEmployeeFirst(name);
//                     start();
//                 });
//                 break;
//             case 3:
//                 readline.question("Enter Employee Name: ", name => {
//                     readline.question("Enter Position: ", pos => {
//                         addEmployeeAtPosition(name, parseInt(pos));
//                         start();
//                     });
//                 });
//                 break;
//             case 4:
//                 readEmployeeFirst();
//                 start();
//                 break;
//             case 5:
//                 readEmployeeLast();
//                 start();
//                 break;
//             case 6:
//                 readline.question("Enter Position: ", pos => {
//                     readEmployeeAtPosition(parseInt(pos));
//                     start();
//                 });
//                 break;
//             case 7:
//                 deleteEmployeeFirst();
//                 start();
//                 break;
//             case 8:
//                 deleteEmployeeLast();
//                 start();
//                 break;
//             case 9:
//                 readline.question("Enter Position: ", pos => {
//                     deleteEmployeeAtPosition(parseInt(pos));
//                     start();
//                 });
//                 break;
//             case 10:
//                 readline.question("Enter New Employee Name: ", name => {
//                     updateEmployeeFirst(name);
//                     start();
//                 });
//                 break;
//             case 11:
//                 readline.question("Enter New Employee Name: ", name => {
//                     updateEmployeeLast(name);
//                     start();
//                 });
//                 break;
//             case 12:
//                 readline.question("Enter New Employee Name: ", name => {
//                     readline.question("Enter Position: ", pos => {
//                         updateEmployeeAtPosition(name, parseInt(pos));
//                         start();
//                     });
//                 });
//                 break;
//             case 13:
//                 showAllEmployees();
//                 start();
//                 break;
//             default:
//                 console.log("Invalid choice");
//                 start();
//         }
//     });
// }

// start();
    