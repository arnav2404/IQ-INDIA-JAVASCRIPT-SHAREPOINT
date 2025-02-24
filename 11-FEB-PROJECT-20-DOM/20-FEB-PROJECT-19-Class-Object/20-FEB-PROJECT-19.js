// let name1=document.getElementById('card-name')
// let age1=document.getElementById('card-age')
// let mobile1=document.getElementById('card-mobile')
// let bio1=document.getElementById('card-bio')
// let hobbies1=document.getElementById('card-hobbies')
// let img=document.getElementById('card-img-top')

// class Card_Details{
//     setData(img,name,age,mobile,bio,hobbies){
//         this.img=img;
//         this.name=name;
//         this.age=age;
//         this.mobile=mobile;
//         this.bio=bio;
//         this.hobbies=hobbies;
//     }

//     info(){
//             img.src=`${this.img}`,
//             name1.innerHTML=`<b>Name:</b> ${this.name}`,
//             age1.innerHTML=`<b>Age:</b> ${this.age}`,
//             mobile1.innerHTML=`<b>Mobile:</b> ${this.mobile}`,
//             bio1.innerHTML=`<b>Bio:</b> ${this.bio}`,
//             hobbies1.innerHTML=`<b>Hobbies:</b> ${this.hobbies}`
//     }

// }

// function new_data(){
//     img.src='56520.png'
//     name1.innerHTML=`<b>Name:</b> Shubham Pandey`
//     age1.innerHTML=`<b>Age:</b> 36`
//     mobile1.innerHTML=`<b>Mobile:</b> 516816165`
//     bio1.innerHTML=`<b>Bio:</b> Data Science`
//     hobbies1.innerHTML=`<b>Hobbies:</b> Dalaal`
// }

// let new_card_array=[card1,card2]
// for(let i=0; i<new_card_array.length; i++){
//     setImmediate.innerHTML+=[i].info()
// }

// let card1=new Card_Details
// let card2= new Card_Details
// card1.setData('362619.png','Arnav Dixit',22,9340891701,'SharePoint Developer','Video Games, Cooking, Badminton')
// card1.info()
// // card2.setData('216516.png','Jai vardhan',24,3516546516,'DevOps Developer','Apple fan')
// // card2.info()




let cardContainer = document.getElementById('card-container'); // Container to hold all cards

class Card_Details {
    constructor(img, name, age, mobile, bio, hobbies) {
        this.img = img;
        this.name = name;
        this.age = age;
        this.mobile = mobile;
        this.bio = bio;
        this.hobbies = hobbies;
    }

    createCard() {
        // Create elements
        let card = document.createElement('div');
        card.className = 'card m-2';
        card.style.width = '18rem';

        let imgElement = document.createElement('img');
        imgElement.className = 'card-img-top';
        imgElement.src = this.img;

        let cardBody = document.createElement('div');
        cardBody.className = 'card-body';

        let nameElement = document.createElement('p');
        nameElement.innerHTML = `<b>Name:</b> ${this.name}`;

        let ageElement = document.createElement('p');
        ageElement.innerHTML = `<b>Age:</b> ${this.age}`;

        let mobileElement = document.createElement('p');
        mobileElement.innerHTML = `<b>Mobile:</b> ${this.mobile}`;

        let bioElement = document.createElement('p');
        bioElement.innerHTML = `<b>Bio:</b> ${this.bio}`;

        let hobbiesElement = document.createElement('p');
        hobbiesElement.innerHTML = `<b>Hobbies:</b> ${this.hobbies}`;

        // Append elements
        cardBody.appendChild(nameElement);
        cardBody.appendChild(ageElement);
        cardBody.appendChild(mobileElement);
        cardBody.appendChild(bioElement);
        cardBody.appendChild(hobbiesElement);
        card.appendChild(imgElement);
        card.appendChild(cardBody);

        // Add card to container
        cardContainer.appendChild(card);
    }
}

// Array to store card objects
let new_card_array = [];

// Function to add a new card
function addNewCard(img, name, age, mobile, bio, hobbies) {
    let newCard = new Card_Details(img, name, age, mobile, bio, hobbies);
    new_card_array.push(newCard);
    newCard.createCard(); // Create and display the card
}

// Adding sample cards
addNewCard('362619.png', 'Arnav Dixit', 22, '9340891701', 'SharePoint Developer', 'Video Games, Cooking, Badminton');
addNewCard('216516.png', 'Jai Vardhan', 24, '3516546516', 'DevOps Developer', 'Apple fan');

// Function for button to add a new card dynamically
function new_data() {
    addNewCard('56520.png', 'Shubham Pandey', 36, '516816165', 'Data Science', 'Dalaal');
}
