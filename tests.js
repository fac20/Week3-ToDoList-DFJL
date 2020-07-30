// Submit Button will submit only if text is inputted
let submit = document.querySelector(".submit"); //submit button;
let listItems = document.getElementsByClassName("listItem");
// test("Submit Button will submit only if text is inputted", t => {
 
//     input.value = "";
//     let result = 
//     t.equal(result, expected);
// })

// Element is created that contains text input

test("Element is created and appended to the correct location", t => {
    activity.value = "Do Washing Up";
    time.value = "today";
    submit.click();
    let todaySection = document.querySelector(".today");
    let appendedItem = todaySection.querySelector(".listItem");
    const expected = true;
    let result = todaySection.contains(appendedItem); 
    t.equal(result, expected);
})

test("the created element contains the text input that was submitted", t=> {
    input.vale="Do your laundry";
    submit.click;
    let length = listItems.length;
    result = listItems[length-1].textContent; 
    expected = "Do your laundry";
    t.equal(result, expected);
})



// Click check box and it changes