let card_container=document.getElementById('cardContainer')


// create class

class Card_Details{
    constructor(img,name,qualification,bio,perks,more_info){
        this.img=img;
        this.name=name;
        this.qualification=qualification;
        this.bio=bio;
        this.perks=perks;
        this.more_info=more_info;
    }
    create_card(){
        // create card elements
        let card=document.createElement('div')
        card.className='card m-3'
        card.style.width='20rem'

        // create card-body elements
        let card_body=document.createElement('div')
        card_body.className='card-body'

        let img=document.createElement('img')
        img.src=`${this.img}`
        img.className = "card-img-top";
        
        let p1=document.createElement('p')
        p1.innerHTML=`${this.name}`
        
        let p2=document.createElement('p')
        p2.innerHTML=`${this.qualification}`
        
        let hr=document.createElement('hr')
        
        let bio=document.createElement('p')
        bio.innerHTML=`${this.bio}`
        
        let p=document.createElement('p')
        p.innerHTML=`${this.perks.map((user)=> `<span class="rounded bg-primary p-2 text-white">${user}</span>` ).join(' ')}`
        
        let view_more=document.createElement('p')
        
        let button4=document.createElement('button')
        button4.className='btn bg-primary p-2 text-white border border-0 '
        button4.innerHTML=`${this.more_info}`
        button4.addEventListener('click',()=>{
            alert(`
                ${this.name}
                ${this.qualification}
                ${this.bio}
                ${this.perks}
                `)
        })
        
        // append elements
        card_body.appendChild(p1)
        card_body.appendChild(p2)
        card_body.appendChild(hr)
        card_body.appendChild(bio)
        card_body.appendChild(p)
        view_more.appendChild(button4)
        card_body.appendChild(view_more)
        
        card.appendChild(img)
        card.appendChild(card_body)

        // append card to container
        card_container.appendChild(card)
    }
}

// array to store the new card data
let new_profile_data=[]

// function to add new data
function new_data_card(img,name,qualification,bio,perks,more_info){
    let new_card=new Card_Details(img,name,qualification,bio,perks,more_info)
    new_profile_data.push(new_card)
    new_card.create_card()
}

// add data to card
new_data_card('362619.png','Arnav Dixit','SharePoint Developer, 22 yrs','Loves Coding and Video Games',['Cooking','Coding','Video Games'],'View More')
new_data_card('362619.png','Shubham Pandey','FullStack Developer, 28 yrs','Loves Talking and Truck Auction',['Cooking','Coding','Video Games'],'View More')
new_data_card('362619.png','Arnav Dixit','SharePoint Developer, 22 yrs','Loves Coding and Video Games',['Cooking','Coding','Video Games'],'View More')
new_data_card('362619.png','Arnav Dixit','SharePoint Developer, 22 yrs','Loves Coding and Video Games',['Cooking','Coding','Video Games'],'View More')
new_data_card('362619.png','Arnav Dixit','SharePoint Developer, 22 yrs','Loves Coding and Video Games',['Cooking','Coding','Video Games'],'View More')
new_data_card('362619.png','Arnav Dixit','SharePoint Developer, 22 yrs','Loves Coding and Video Games',['Cooking','Coding','Video Games'],'View More')
new_data_card('362619.png','Arnav Dixit','SharePoint Developer, 22 yrs','Loves Coding and Video Games',['Cooking','Coding','Video Games'],'View More')
new_data_card('362619.png','Arnav Dixit','SharePoint Developer, 22 yrs','Loves Coding and Video Games',['Cooking','Coding','Video Games'],'View More')
new_data_card('362619.png','Arnav Dixit','SharePoint Developer, 22 yrs','Loves Coding and Video Games',['Cooking','Coding','Video Games'],'View More')






