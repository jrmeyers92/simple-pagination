(function () {
  
// Variables
let currentPage = 1; 
const itemsPerPage = 5; 
const negItemsPerPage = -5;
let firstSlicer = 0;
let secondSlicer = 5;
let arrayOfItems = new Array();
let numOfPages;


// DOM Variables
const nextButton = document.getElementById("next");
const lastButton = document.getElementById("last");
const prevButton = document.getElementById("prev");
const firstButton = document.getElementById("first");
const ul = document.getElementById("list");
const para = document.getElementById('pages');


const initArray = () => {
    for (let i = 1; i < 51; i++) {
        arrayOfItems.push(i);     
    }
    numOfPages = (arrayOfItems.length / itemsPerPage);
}

const buttonDisabled = (element, bool) => {
    element.disabled = bool;
}

const sliceArray = (array, slicer1, slicer2) => {
    console.log(array.slice(slicer1,slicer2))
    return array.slice(slicer1, slicer2);
}

const outputArray = (array) => {
    for (let i = 0; i < array.length; i++) {
        let li = document.createElement("li");
        li.innerHTML = array[i];
        li.classList.add("list__item")
        ul.appendChild(li);
    }
}

const removeChildren = () => {
    const children = ul.querySelectorAll('*')
    children.forEach(node => node.remove())
}

const updateSlicers = (num) => {
    firstSlicer+=num;
    secondSlicer+=num;
}

const init = () => {
    initArray();
    outputArray(sliceArray(arrayOfItems,firstSlicer,secondSlicer))
    buttonDisabled(prevButton, true);
    buttonDisabled(firstButton, true);
    setPara();
}

const setPara = () => {
    para.textContent = `page ${currentPage} of ${numOfPages}`
}


const nextButtonClicked = () => {
    if (currentPage === (numOfPages - 1) ) {
        buttonDisabled(nextButton, true);
        buttonDisabled(lastButton, true);
    }

    if (currentPage === 1) {
        buttonDisabled(prevButton,false);
        buttonDisabled(firstButton, false)
    }
    removeChildren();
    updateSlicers(itemsPerPage)
    outputArray(sliceArray(arrayOfItems,firstSlicer,secondSlicer));
    currentPage++;
    buttonDisabled(prevButton,false);
    buttonDisabled(firstButton, false);
    setPara();

}

const prevButtonClicked = () => {
    if (currentPage === 2) {
        buttonDisabled(prevButton, true);
        buttonDisabled(firstButton, true);
    }
    if (currentPage === numOfPages) {
        buttonDisabled(nextButton, false);
        buttonDisabled(lastButton, false)
    }

    removeChildren();
    updateSlicers(negItemsPerPage)
    outputArray(sliceArray(arrayOfItems,firstSlicer,secondSlicer));
    currentPage--;
    setPara();
}

const firstButtonClicked = () => {
    removeChildren();
    currentPage = 1;
    buttonDisabled(prevButton, true);
    buttonDisabled(firstButton, true);
    buttonDisabled(nextButton, false);
    buttonDisabled(lastButton, false);

    firstSlicer = 0;
    secondSlicer = 5;
    outputArray(sliceArray(arrayOfItems, firstSlicer,secondSlicer))
    setPara();
}

const lastButtonClicked = () => {
    removeChildren();
    currentPage = numOfPages;
    buttonDisabled(nextButton, true);
    buttonDisabled(lastButton, true);
    buttonDisabled(prevButton, false);
    buttonDisabled(firstButton, false);
    firstSlicer = arrayOfItems.length - 5;
    secondSlicer = arrayOfItems.length;
    outputArray(sliceArray(arrayOfItems, firstSlicer,secondSlicer))
    setPara();

}



window.addEventListener('load', init);

nextButton.addEventListener('click', nextButtonClicked);
prevButton.addEventListener('click', prevButtonClicked);
lastButton.addEventListener('click', lastButtonClicked);
firstButton.addEventListener('click', firstButtonClicked)


})();

