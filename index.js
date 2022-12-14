// Select the section with an id of container without using querySelector.
const section = document.getElementById("container");

// Select the section with an id of container using querySelector.
const section = document.querySelector("#container");

// Select all of the list items with a class of “second”.
const second = document.querySelectorAll(".second");

// Select a list item with a class of third, but only the list item inside of the ol tag.
const thirdOl = document.querySelector("ol .third");

// Give the section with an id of container the text “Hello!”.
const container = document.querySelector("#container");

container.innerText = "Hello!";

// Add the class main to the div with a class of footer.
const div = document.querySelector(".footer");
div.classList.add("main");

// Remove the class main on the div with a class of footer.
const div = document.querySelector(".footer");
div.classList.remove("main");

// Create a new li element.
const li = document.createElement("li");

// Give the li the text “four”.
li.innerText = "four";

// Append the li to the ul element.
const ul = document.querySelector("ul");
ul.append(li);

// Loop over all of the lis inside the ol tag and give them a background color of “green”.
const lis = document.querySelectorAll("ol li");
for (let li of lis) {
  li.style.backgroundColor = "green";
}

// Remove the div with a class of footer
const footer = document.querySelector(".footer");
footer.remove();
