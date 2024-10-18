function ToDarkMode(){
    document.body.classList.toggle("dark-mode");
    var links=document.querySelectorAll("a");
    var ftr=document.querySelector("footer");
    var titlecard=document.querySelectorAll("h6");
    var contacttitle=document.querySelectorAll("sidebar-title");
    var paragraphs=document.querySelectorAll("p");
    var darkscroolbtn=document.querySelectorAll("#myBtn");
    var section2=document.querySelector(".section-2");
    var section4=document.querySelector(".section-4");
    ftr.classList.toggle("footer-dark");
    var sdbr=document.querySelector(".sidebar");
    var btnscrool=document.querySelector("#scrool-icon");

    links.forEach((element) => element.classList.toggle("dark-header"));
    titlecard.forEach((element) => element.classList.toggle("dark-header")); 
    paragraphs.forEach((element) => element.classList.toggle("white-text"));
    section2.classList.toggle("dark-header");
    section4.classList.toggle("dark-header");
    contacttitle.classList.replace("white-text"); 
    sdbr.classList.toggle("test");
    btnscrool.classList.toggle("scrol-dark");
}
const checkbox = document.getElementById("checkbox")
checkbox.addEventListener("change", () => {
    ToDarkMode();
})

let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
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

function redirect(){
  window.location.href = "product.html";

}