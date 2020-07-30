// Submit Button will submit only if text is inputted
let submit = document.querySelector(".submit"); //submit button;
let listItems = document.getElementsByClassName("listItem");
test("Submit Button will submit only if text is inputted", t => {
    activity.value = "";
    time.value = "today";
    submit.click();
    let todaySection = document.querySelector(".today");
    let appendedItem = todaySection.querySelector(".listItem");
    const expected = false;
    let result = todaySection.contains(appendedItem); 
    t.equal(result, expected);
})



// Element is created that contains text input

test("Element is created and appended to today", t => {
    activity.value = "Do Washing Up";
    time.value = "today";
    submit.click();
    let todaySection = document.querySelector(".today");
    let appendedItem = todaySection.querySelector(".listItem");
    const expected = true;
    let result = todaySection.contains(appendedItem); 
    t.equal(result, expected);
})

test("Element is created and appended to tomorrow", t => {
    activity.value = "Vacuum the floor";
    time.value = "tomorrow";
    submit.click();
    let tomorrowSection = document.querySelector(".tomorrow");
    let appendedItem = tomorrowSection.querySelector(".listItem");
    const expected = true;
    let result = tomorrowSection.contains(appendedItem); 
    t.equal(result, expected);
})

test("Element is created and appended to this-week", t => {
    activity.value = "Change the bed";
    time.value = "this-week";
    submit.click();
    let thisWeekSection = document.querySelector(".this-week");
    let appendedItem = thisWeekSection.querySelector(".listItem");
    const expected = true;
    let result = thisWeekSection.contains(appendedItem); 
    t.equal(result, expected);
})

test("Element is created and appended to this-month", t => {
    activity.value = "Have a little dance";
    time.value = "this-month";
    submit.click();
    let thisMonthSection = document.querySelector(".this-month");
    let appendedItem = thisMonthSection.querySelector(".listItem");
    const expected = true;
    let result = thisMonthSection.contains(appendedItem); 
    t.equal(result, expected);
})

test("the created element contains the text input that was submitted", t=> {
    let thisMonthSection = document.querySelector(".this-month");
    let appendedItem = thisMonthSection.querySelector(".listItem");
    let expected = "Have a little dance";
    let result = appendedItem.childNodes[2].textContent;
    t.equal(result, expected);
})



// Click check box and it changes


test("Checkbox changes when clicked", t=> {
    let thisMonthSection = document.querySelector(".this-month");
    let appendedItem = thisMonthSection.querySelector(".listItem"); 
    let completeCheckbox = appendedItem.querySelector(".checkbox");
    completeCheckbox.click();
    let expected = "on"
    let result = completeCheckbox.value;
    t.equal(result, expected);

})


// Click delete button will remove input 

test("click delete button will remove input", t=> {
    let thisMonthSection = document.querySelector(".this-month");
    let appendedItem = thisMonthSection.querySelector(".listItem"); 
    let deleteButton = appendedItem.querySelector(".delete-button");
    deleteButton.click();
    let expected = null;
    let result = thisMonthSection.querySelector(".listItem");
    t.equal(result, expected);
})
