// Submit Button will submit only if text is inputted
let submit = document.querySelector(".submit"); //submit button;
let input = document.querySelector(".input"); //test input
let listItems = document.getElementsByClassName("listItem");

test("Submit Button will submit only if text is inputted", t => {
 
    input.value = "";
    let result = 
    t.equal(result, expected);
})

// Element is created that contains text input

test("Element is created", t => {
    input.value = "Fishsticks";
    submit.click();
    const expected = 2;
    t.equal(listItem.length, expected)
    
})

test("the created element contains the text input that was submitted", t=> {
    input.vale="Do your laundry";
    submit.click;
    let length = listItems.length;
    result = listItems[length-1].textContent; 
    expected = "Do your laundry";
    t.equal(result, expected);
})

// Element is appended to correct location
test("element is appended to the correct location")

// Click check box and it changes