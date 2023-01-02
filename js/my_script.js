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

// jQuery tests
$(document).ready(function(){

    // $("#header_text").hide()
  
});

// Collapsible button code
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}















