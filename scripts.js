let activity = document.querySelector("#activity-select");
let time = document.querySelector("#date-select")
const checkbox = '<input type="checkbox" name="checkbox" id="checkbox">';


const addTemplate = () => {
    let template = document.getElementById('template'); // select the template element
    let fragment = template.content.cloneNode(true); //get read-only documentFragment from the template, and clone it to put it into the fragment variable 
    let testItem = fragment.querySelector(".listItem"); //select list item from the
    testItem.childNodes[2].textContent = activity.value;
    console.log(testItem.childNodes[2]);
    let section = document.querySelector(`.${time.value}`); // select the section related to the time argument
    section.appendChild(fragment); //add the new list item to the section
};


const form = document.querySelector("form");
form.addEventListener("submit", function(event){
    event.preventDefault()
    addTemplate()
});


//Toggling 
// let checkboxes = document.getElementsByClassName("checkbox");
// console.log(checkboxes)

// const toggleCheckbox = (event) => {    
//     if (event.target.value === "on") {
//         event.target.value = "";
//         console.log(event)
//     } else {
//         event.target.value = "on";
//         console.log(event)
//     }
// };



// checkboxes.forEach( checkbox => {
//     checkbox.addEventListener("click", toggleCheckbox)
// });
