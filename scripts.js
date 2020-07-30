let activity = document.querySelector("#activity-select");
let time = document.querySelector("#date-select");

const addTemplate = () => {
    let template = document.getElementById('template'); // select the template element
    let fragment = template.content.cloneNode(true); //get read-only documentFragment from the template, and clone it to put it into the fragment variable 
    let testItem = fragment.querySelector(".listItem"); //select list item from the
    testItem.childNodes[2].textContent = activity.value;
    let section = document.querySelector(`.${time.value}`); // select the section related to the time argument
    section.appendChild(fragment); //add the new list item to the section
};


const form = document.querySelector("form");
form.addEventListener("submit", function(event){
    event.preventDefault();
    addTemplate();
});

//Function to delete items in the list when the delete button is clicked
document.addEventListener("click", (e) => { //when the document is clicked
    if (e.target.className === 'delete-button') { //if the item clicked has a class of 'delete-button'
        e.target.parentNode.remove(); //remove its parent node (the entire list item)
    }
});

