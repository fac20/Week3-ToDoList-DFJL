let activity = document.querySelector("#activity-select");
let time = document.querySelector("#date-select")


const addTemplate = () => {
    let template = document.getElementById('template'); // select the template element
    let fragment = template.content.cloneNode(true); //get read-only documentFragment from the template, and clone it to put it into the fragment variable 
    let testItem = fragment.querySelector(".listItem"); //select list item from the
    testItem.textContent = activity.value;
    console.log(fragment);
    let section = document.querySelector(`.${time.value}`); // select the section related to the time argument
    section.appendChild(testItem); //add the new list item to the section
};


const form = document.querySelector("form");
form.addEventListener("submit", function(event){
    event.preventDefault()
    addTemplate()
});
