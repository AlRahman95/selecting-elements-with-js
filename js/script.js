//document is an object, and querySelector is a method within the document object
//document.querySelector will return a single element matching the criteria within the ()
var header = document.querySelector("#header");

header.textContent = "Hello World";

document.querySelector(".p-styles").textContent = "Bahuh?";

//document.querySelectorAll will return an array like data structure which contains all elements that match the criteria passed within the ()
var pStyles = document.querySelectorAll(".p-styles");

for (var x = 0; x < pStyles.length; x++) {
  pStyles[x].textContent = "I'm p-styles " + (x + 1);
}

var li = document.querySelectorAll("li");

for (var x = 0; x < li.length; x++) {
  li[x].textContent = x + 1;
}


//Another way to select an element by its ID is document.getElementById
document.getElementById("second-header").textContent = "Something";

var awesome = document.getElementsByClassName("awesome");
for (var x = 0; x < awesome.length; x++) {
  awesome[x].textContent = x + 1;
}

var h3 = document.getElementsByTagName("h3");
for (var x = 0; x < h3.length; x++) {
  h3[x].textContent = "What's Up " + (x + 1);
}
