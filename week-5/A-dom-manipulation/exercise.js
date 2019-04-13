/*
Task 1
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/
var ButtonChange = document.querySelector("#bgrChangeBtn");

ButtonChange.addEventListener("click", changeColor);

function changeColor() {
  document.style.backgroundColor = "violet";
  //alert("It is working")
}
/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/
var AlertVisiting = document.querySelector("#alertBtn");

AlertVisiting.addEventListener("click", AlertVisit);

function AlertVisit() {
  alert("Thanks for visiting Bikes for Refugees!");
}
/*
Task 3
======

When a user clicks the 'Add some text' button, a new paragraph should be added below the buttons that says "Read more below."
*/

var NewParagraph = document.querySelector("#addTextBtn");

NewParagraph.addEventListener("click", AddParagraph);

function AddParagraph() {
  var paragraph = document.createElement("p");
  NewParagraph.appendChild(paragraph);
  paragraph.innerText = "Read more below.";
}

/*
Task 4
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/
var textLink = document.querySelectorAll("a");
var btn = document.querySelector("#largerLinksBtn");

btn.addEventListener("click", increaseTextLink);

function increase(text) {
  text.style.fontSize = "xx-large";
}

function increaseTextLink() {
  textLink.forEach(increase);
  //alert("It's working");
}
