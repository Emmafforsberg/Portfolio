/* MOBILE MENU */
function myFunction() {
  var x = document.getElementById("mobileView");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

/* MENU ICON */
function menuIcon() {
  var x = document.getElementById("down");
  x.classList.toggle("fa-chevron-up");
}

/* TOP BUTTON */
//Get the button
var mybutton = document.getElementById("topBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 150 ||
    document.documentElement.scrollTop > 150
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

/* DISPLAY YEAR */
const d = new Date();
let year = d.getFullYear();
document.getElementById("year").innerHTML = year;
