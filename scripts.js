function addTemplate(time, text) {
    let template = document.getElementById('template'); // select the template element
    let fragment = template.content.cloneNode(true); //get read-only documentFragment from the template, and clone it to put it into the fragment variable 
    let testItem = fragment.querySelector(".listItem"); //select list item from the fragment
    testItem.childNodes[2].textContent = text;
    let section = document.querySelector(`.${time}`); // select the section related to the time argument
    section.appendChild(fragment); //add the new list item to the section
}; 


