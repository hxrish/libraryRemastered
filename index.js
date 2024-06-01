//Pesudocode 

//Main array will get object pushed in through an object constructor
//Main array will have a list a objects

//Use for loop to splice up the array and get individual values out

//Main array has objects, a single for loop will loop over all the objects in an array
//

//Main array creation
let mainArray = [];


//Constructor functions for assigning labels on details said by the user.
function bookConstruction(name, title, author, read){
    this.name = name;
    this.title = title;
    this.author = author;
    this.read = read;

    let book = {name, title, author, read};
    mainArray.push(book);
}


let newBook = new bookConstruction('Good book', 'Good title', 'Good author', true);
let oldBook = new bookConstruction('Bad book', 'bad title', 'bad author', false);

    mainArray.forEach((Element) => {
            console.log('Name:' + Element.name);
    });


let button = document.getElementById("addNew");

button.addEventListener('click', () => {
    let mainContainer = document.getElementById('mainContent');
let cards = document.createElement('div');
cards.classList.add('cards');
let cardsTitle = document.createElement('div');
cardsTitle.classList.add('cardsTitle');
let cardsDescription = document.createElement('div');
cardsDescription.classList.add('cardsDescription');
let cardsFooter = document.createElement('div');
cardsFooter.classList.add('cardsFooter');

mainContainer.appendChild(cards);
cards.appendChild(cardsTitle);
cards.appendChild(cardsDescription);
cards.appendChild(cardsFooter);

})

