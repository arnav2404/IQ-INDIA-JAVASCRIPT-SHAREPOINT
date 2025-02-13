// ---------------------OBJECTS------------------------
// 1. Propertise of Objects
// 2. Creation of Objects
// 3. Accessing of Objects
// 4. Modifications of Objects
// 5. Traversing of Objects
// 6. In-built methods of Objects

// =================Propertise of Objects
// 1. Objects are user-defined data structure which store data of different types
// in the form of key:value pair.
// 2.Object key must be unique.
// 3.Objects are mutable (Changeble)

// 2.========================Creation of Objects

// 1.using({})
let student_profile={
    'name':"Dev",
    age:"26",
    roll:5969,
    email:"example@gmail.com",
    phone:879413213,
    marks:[45,65,85,64],
    subsject:['CS','MATH','COMMUNICATION','DL'],
    address:'Noida Delhi 301201',
    say_hello:function(){
        return `Student Name : ${student_profile.name} Student Age : ${this.age}`// 'this' can be used in place of object name
    }
}
for(let i=0; i<student_profile.marks.length; i++){
    console.log(student_profile.marks[i])
}

console.log(student_profile)
student_profile.say_hello


// // 2.Using New Keyword

let student_profile_1=new Object()
student_profile_1.name="Aman";
student_profile_1.age=34;
student_profile_1.email="aman@gmail.com"
student_profile_1.MOB=849651320;


// 3.===========================Accessing of Objects (.)
console.log(student_profile_1.name)
console.log(student_profile_1.age)
console.log(student_profile_1.email)
console.log(student_profile_1.MOB)

// 4.=======================Modification of Objects



