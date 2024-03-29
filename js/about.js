// Code to swap figure caption
var screenWidth = window.screen.availWidth;
if (screenWidth < 400) {
    // Getting DOM elements
    var ourFig = document.getElementById("home_about_figure");
    var removeMe = document.getElementById("home_about_fig_cap");
    // var ourPic = document.getElementById("home_about_pic")

    // Removing DOM elements
    ourFig.removeChild(removeMe)

    // Creating DOM elements
    var newFigCap = document.createElement("figcaption");
    var newLink = document.createElement("a");
    var newCap = document.createTextNode("Machu Pichu after attending ");

    // Configuring new elements
    newLink.target = "_blank";
    newLink.id = "home_about_fig_cap_link";
    newLink.href = "https://sahc2018.com/";
    newLink.appendChild(document.createTextNode("SAHC Conference."));
    newFigCap.id = "home_about_fig_cap";
    newFigCap.appendChild(newCap);
    newFigCap.appendChild(newLink);

    // Appending DOM elements
    ourFig.appendChild(newFigCap);

    // Replacing caption elements
    // ourFig.replaceChild(newFigCap, swapMe);
}


// Code for slideshow
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}