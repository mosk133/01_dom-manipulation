// EXERCISE 1: Selecting Elements
// Select the element with the ID 'mainTitle' and log it to the console.

let mainTitle = document.getElementById("mainTitle");
console.log(mainTitle);

// EXERCISE 2: Changing HTML Content
// Select all paragraph elements and change the content of the second paragraph to "This paragraph has been changed."

let secondParagraph = document.getElementsByTagName("p")[1];
secondParagraph.innerHTML = "<p>This paragraph has been changed.</p>";

// EXERCISE 3: Changing CSS Styles
// Select the first list item and change its text color to red.

let firstItem = document.getElementsByTagName("li")[0];
firstItem.style.color = "red";

// EXERCISE 4: Adding/Removing Classes
// Add the "highlight" class to the first paragraph
// Remove the "highlight" class from the first paragraph after 3 seconds

let firstParagraph = document.getElementsByClassName("paragraph")[0];
firstParagraph.classList.add("highlight");

setTimeout(function () {
    firstParagraph.classList.remove("highlight");
}, 3000);

// EXERCISE 5: Creating and Appending Elements
// Create a new list item with the text "Item 4" and append it to the existing list.

let newItem4 = document.createElement("li");
newItem4.textContent = "Item 4";
let ul = document.getElementById("list");
ul.appendChild(newItem4);

// EXERCISE 6: Removing Elements
// Remove the last list item from the unordered list

let lastItem = document.getElementsByTagName("li")[3];
lastItem.remove();

// EXERCISE 7: Handling Events
// Add a click event listener to the button that displays an alert saying "Button clicked!"

actionButton.addEventListener("click", function () {
    alert("Button clicked!");
});

// Exercise 8: Working with Input
// Add an input event listener to the input field that displays the current input value in the result div.

let inputText = document.getElementById("inputField");
let divResult = document.getElementById("result");

inputText.addEventListener("input", function () {
    divResult.textContent = inputText.value;
});

// Exercise 9: Toggling Visibility
// Add a click event listener to the button that toggles the visibility of the content div.

let divContent = document.getElementById("content")

actionButton.addEventListener("click", function () {
    if (divContent.style.display === "none"){
        divContent.style.display = "block"
    } else {
        divContent.style.display = "none";
    }
});

// Exercise 10: Modifying Attributes
// Select the input field and change its placeholder text to "Enter your name".

inputText.placeholder = "Enter your name";