// 1
// Select the div with the id of "problem-one" and change the border color to
// red and the border width to 3 pixels
const problemOne = document.getElementById("problem-one");
problemOne.style.borderColor = "red";
problemOne.style.borderWidth = "3px";
problemOne.style.borderStyle = "solid";

// 2
// Select the text in the first div that has the class of "even" and change the
// font color to green and the font style to bold
const firstEven = document.querySelector(".even");
firstEven.style.color = "green";
firstEven.style.fontWeight = "bold";

// 3
// Select all of the elements with the class of "odd" and add a box shadow. You
// may choose your own box-shadow values.
const oddElements = document.querySelectorAll(".odd");
oddElements.forEach((element) => {
  element.style.boxShadow = "2px 2px 5px rgba(0, 0, 0, 0.5)";
});

// 4
// Select the fourth box with a selector of your choice. Change the text inside
// the box to the string "Four"
const fourthBox = document.querySelector("#problem-four");
fourthBox.textContent = "Four";

// 5
// Select the fifth box. Remove the text "5", and replace it with a child button that says "5!"
const fifthBox = document.querySelector("#problem-five");
fifthBox.textContent = ""; // Clear the existing text
const button = document.createElement("button");
button.textContent = "5!";
fifthBox.appendChild(button);

// 6 
// Select the span element. Remove it from the DOM.
const spanElement = document.querySelector("span");
spanElement.remove(); // Remove the span element

// 7
// Select the element with the number 7, and change the number to 6 (because you
// just removed number 6!)
const sevenBox = document.querySelector(".seven");
sevenBox.textContent = "6";

// 8
// Select the last box, and add the class of "last". This will apply new styling
// to the box if successful. Change the text inside to box to "END!!!"
const lastBox = document.querySelector("#problem-eight");
lastBox.classList.add("last");
lastBox.textContent = "END!!!";
