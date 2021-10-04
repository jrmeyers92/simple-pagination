// GLOBAL VARIABLES
let listOfItems = new Array();
let numOfItemsOnPage = 10;
let firstSlicer = 0;
let secondSlicer = firstSlicer + numOfItemsOnPage; 
let currentPage = 1;
let numOfPages;

// BUTTON VARIABLES 
const nextButton = document.getElementById('next');
const lastButton = document.getElementById('last');
const prevButton = document.getElementById('prev');
const firstButton = document.getElementById('first');

/// Function to make list
const makeList = () => {
    for (let i = 0; i < 200; i++) {
        listOfItems.push(i);
    }
}

//function to calculate num of Pages
const calcPages = () => {
    numOfPages = Math.ceil(listOfItems.length / numOfItemsOnPage)
}

const initialSclice = () => {
    const list = document.getElementById("list");
    for (let i = 0; i < numOfItemsOnPage; i++) {
        let item = document.createElement('li');
        item.classList.add('list__item')
        item.innerHTML = listOfItems[i];
        list.appendChild(item);
    }
}

// load function 
const load = () => {
    makeList();
    calcPages();
    initialSclice();
}

// Event Listener TO LOAD LIST
window.addEventListener("load", load());

//EVENT LISTENERS FOR BUTTON CLICKS



// EVENT FUNCTIONS

const nextButtonClicked = () => {
    // check to make sure it's not on last page 
    if (checkIfLastPage) {
       currentPage++
       adjustSlicers(10)
       console.log(firstSlicer, secondSlicer, currentPage)
       console.log(sliceArray(listOfItems, firstSlicer, secondSlicer))

    }
}

const lastButtonClicked = () => {

}

const prevButtonClicked = () => {

}

const firstButtonClicked = () => {

}

//Next Button Event Listener
nextButton.addEventListener('click', nextButtonClicked)
lastButton.addEventListener('click', lastButtonClicked)
prevButton.addEventListener('click', prevButtonClicked)
firstButton.addEventListener('click', firstButtonClicked)



//HELPER FUNCTIONS 
const adjustSlicers = (numToAdd) => {
    firstSlicer += numToAdd;
    secondSlicer += numToAdd;

    // return [firstSlicer, secondSlicer];
}

// Function to slice array 
const sliceArray = (array, firstSlicerParam, secondSlicerParam) => {
    return array.slice(firstSlicerParam,secondSlicerParam);
}

// function to check if on last page 
const checkIfLastPage = () => {
    let numOfPages = Math.ceil(listOfItems.length / numOfItemsOnPage)
    console.log(numOfPages);
    console.log(currentPage);
    if (currentPage === numOfPages) {
        return true;    
    } else {
        return false;
    }
}


